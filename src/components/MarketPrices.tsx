import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PriceData {
  date: string;
  coffee: number;
  cocoa: number;
  produce: number;
}

const locations = ["Port Moresby", "Lae", "Mt. Hagen", "Madang", "Goroka"];

const generateMockData = (): PriceData[] => {
  const data: PriceData[] = [];
  const today = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      coffee: 12 + Math.random() * 3,
      cocoa: 8 + Math.random() * 2,
      produce: 5 + Math.random() * 2,
    });
  }
  
  return data;
};

export const MarketPrices = () => {
  const [location, setLocation] = useState("Port Moresby");
  const [priceData, setPriceData] = useState<PriceData[]>([]);

  useEffect(() => {
    setPriceData(generateMockData());
  }, [location]);

  const latestData = priceData[priceData.length - 1];
  const previousData = priceData[priceData.length - 2];

  const calculateChange = (current: number, previous: number) => {
    if (!previous) return 0;
    return ((current - previous) / previous) * 100;
  };

  const PriceCard = ({ title, price, change }: { title: string; price: number; change: number }) => (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">K{price?.toFixed(2)}</div>
          <div className={`flex items-center gap-1 text-sm ${change >= 0 ? 'text-chart-1' : 'text-destructive'}`}>
            {change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            {Math.abs(change).toFixed(1)}%
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">per kg</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Market Prices</CardTitle>
              <CardDescription>Real-time commodity prices across PNG markets</CardDescription>
            </div>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <PriceCard
              title="Coffee"
              price={latestData?.coffee}
              change={calculateChange(latestData?.coffee, previousData?.coffee)}
            />
            <PriceCard
              title="Cocoa"
              price={latestData?.cocoa}
              change={calculateChange(latestData?.cocoa, previousData?.cocoa)}
            />
            <PriceCard
              title="Fresh Produce"
              price={latestData?.produce}
              change={calculateChange(latestData?.produce, previousData?.produce)}
            />
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" label={{ value: 'Price (K)', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="coffee" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Coffee" />
                <Line type="monotone" dataKey="cocoa" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Cocoa" />
                <Line type="monotone" dataKey="produce" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Produce" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
