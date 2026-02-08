import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DrawnCountry {
  id: string;
  session_id: string;
  country_code: string;
  country_name: string;
  dish_name: string;
  dish_description: string;
  dish_image_url: string;
  drawn_at: string;
}

export interface GameSession {
  id: string;
  created_at: string;
}
