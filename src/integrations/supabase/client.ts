import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://hxkrgpxqynfwvamcfpey.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4a3JncHhxeW5md3ZhbWNmcGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczODI5MjMsImV4cCI6MjA1Mjk1ODkyM30.HRaZx6yJJ_GKQRhbvF4W3J3LLO0xOhbBFf4Gp7h_qmQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
