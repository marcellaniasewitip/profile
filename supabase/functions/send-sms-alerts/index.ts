import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get active SMS subscriptions
    const { data: subscriptions, error: subsError } = await supabaseClient
      .from('sms_subscriptions')
      .select('*')
      .eq('active', true);

    if (subsError) throw subsError;

    const results = [];

    for (const subscription of subscriptions || []) {
      // Get latest market prices for subscribed crops and locations
      const { data: prices, error: pricesError } = await supabaseClient
        .from('market_prices')
        .select('*')
        .in('crop_type', subscription.crop_types)
        .in('location', subscription.locations)
        .order('recorded_at', { ascending: false })
        .limit(10);

      if (pricesError) {
        console.error('Error fetching prices:', pricesError);
        continue;
      }

      // Group prices by crop and location
      const priceMap: Record<string, any> = {};
      for (const price of prices || []) {
        const key = `${price.crop_type}-${price.location}`;
        if (!priceMap[key] || new Date(price.recorded_at) > new Date(priceMap[key].recorded_at)) {
          priceMap[key] = price;
        }
      }

      // Build SMS message
      let message = `AgriTech PNG Market Prices:\n\n`;
      for (const [key, price] of Object.entries(priceMap)) {
        message += `${price.crop_type} @ ${price.location}: ${price.currency} ${price.price_per_kg}/kg\n`;
      }
      message += `\nFor more info, visit our platform.`;

      // Here you would integrate with SMS API (Twilio, Africa's Talking, etc.)
      // For now, we'll log it
      console.log(`Would send SMS to ${subscription.phone_number}:`, message);

      results.push({
        phone: subscription.phone_number,
        status: 'queued',
        message: message.substring(0, 100) + '...'
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        processed: results.length,
        results 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in send-sms-alerts:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
