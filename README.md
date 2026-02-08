# Global Food Roulette 🌍🍽️

A fun spinning wheel game where you and your friends discover dishes from the world's 70 most populated countries!

## Features

- 🎡 **Spinning Wheel** - Random country selection with smooth animations
- 🍜 **70 Signature Dishes** - One dish from each of the world's largest countries
- 🔗 **Shareable Sessions** - Share your game link with friends
- 📜 **History Tracking** - Keep track of all dishes you've drawn
- 🚫 **No Repeats** - Once a country is drawn, it's removed from the wheel

## Getting Started

### 1. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor and run the contents of `supabase-schema.sql`
3. Copy your project URL and anon key from Settings > API

### 2. Configure Environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push your code to GitHub
2. Import the repo on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TailwindCSS** - Styling
- **Supabase** - Database & real-time sync
- **Vercel** - Hosting

## How It Works

1. Click "Start New Game" to create a session
2. Share the URL with friends (everyone sees the same game state)
3. Click "Spin the Wheel" to randomly select a country
4. See the country's signature dish and cook it together!
5. Repeat until all 70 countries are explored

## Countries & Dishes

The game includes 70 countries with their signature dishes, including:
- 🇮🇹 Italy → Carbonara
- 🇯🇵 Japan → Ramen
- 🇲🇽 Mexico → Tacos al Pastor
- 🇮🇳 India → Butter Chicken
- 🇹🇭 Thailand → Pad Thai
- And 65 more!
