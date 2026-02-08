import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { countries, getRandomCountry, getAvailableCountries } from '@/lib/countries';

export async function POST(request: Request) {
    try {
        const { sessionId } = await request.json();

        if (!sessionId) {
            return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
        }

        // Get already drawn countries for this session
        const { data: drawnData, error: drawnError } = await supabase
            .from('drawn_countries')
            .select('country_code')
            .eq('session_id', sessionId);

        if (drawnError) throw drawnError;

        const drawnCodes = drawnData?.map(d => d.country_code) || [];
        const availableCountries = getAvailableCountries(drawnCodes);

        if (availableCountries.length === 0) {
            return NextResponse.json({
                error: 'All countries have been drawn!',
                allDrawn: true
            }, { status: 400 });
        }

        // Get a random country
        const selectedCountry = getRandomCountry(availableCountries);

        if (!selectedCountry) {
            return NextResponse.json({ error: 'No countries available' }, { status: 400 });
        }

        // Save the drawn country
        const { data: insertData, error: insertError } = await supabase
            .from('drawn_countries')
            .insert({
                session_id: sessionId,
                country_code: selectedCountry.code,
                country_name: selectedCountry.name,
                dish_name: selectedCountry.dish.name,
                dish_description: selectedCountry.dish.description,
                dish_image_url: `https://source.unsplash.com/800x600/?${encodeURIComponent(selectedCountry.dish.imageKeywords)}`
            })
            .select()
            .single();

        if (insertError) throw insertError;

        return NextResponse.json({
            country: selectedCountry,
            drawnRecord: insertData,
            remainingCount: availableCountries.length - 1
        });
    } catch (error) {
        console.error('Error spinning wheel:', error);
        return NextResponse.json(
            { error: 'Failed to spin wheel' },
            { status: 500 }
        );
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const sessionId = searchParams.get('sessionId');

        if (!sessionId) {
            return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
        }

        // Get all drawn countries for this session
        const { data, error } = await supabase
            .from('drawn_countries')
            .select('*')
            .eq('session_id', sessionId)
            .order('drawn_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json({
            drawnCountries: data || [],
            remainingCount: 70 - (data?.length || 0)
        });
    } catch (error) {
        console.error('Error fetching drawn countries:', error);
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        );
    }
}
