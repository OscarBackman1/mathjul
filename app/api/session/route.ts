import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST() {
    try {
        const { data, error } = await supabase
            .from('game_sessions')
            .insert({})
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({ sessionId: data.id });
    } catch (error) {
        console.error('Error creating session:', error);
        return NextResponse.json(
            { error: 'Failed to create session' },
            { status: 500 }
        );
    }
}
