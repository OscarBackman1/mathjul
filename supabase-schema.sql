-- Global Food Roulette - Supabase Schema
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Store game sessions (shareable between friends)
CREATE TABLE IF NOT EXISTS game_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Track drawn countries for each session
CREATE TABLE IF NOT EXISTS drawn_countries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES game_sessions(id) ON DELETE CASCADE,
  country_code VARCHAR(3) NOT NULL,
  country_name VARCHAR(100) NOT NULL,
  dish_name VARCHAR(200) NOT NULL,
  dish_description TEXT,
  dish_image_url TEXT,
  drawn_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_drawn_session ON drawn_countries(session_id);
CREATE INDEX IF NOT EXISTS idx_drawn_at ON drawn_countries(drawn_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE drawn_countries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create sessions (anonymous access)
CREATE POLICY "Anyone can create sessions" ON game_sessions
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read sessions
CREATE POLICY "Anyone can read sessions" ON game_sessions
  FOR SELECT USING (true);

-- Allow anyone to create drawn countries
CREATE POLICY "Anyone can create drawn countries" ON drawn_countries
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read drawn countries
CREATE POLICY "Anyone can read drawn countries" ON drawn_countries
  FOR SELECT USING (true);
