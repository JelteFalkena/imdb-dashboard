import { NextResponse } from 'next/server';
import { fetchGenreStats } from '@/lib/genre-stats';

export async function GET() {
  try {
    const genreStats = await fetchGenreStats();
    return NextResponse.json(genreStats);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Kan genres niet ophalen uit de database' }, { status: 500 });
  }
}
