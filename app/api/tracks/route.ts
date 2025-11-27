import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portafolio');
    
    const tracks = await db
      .collection('tracks')
      .find({}, {
        projection: {
          title: 1,
          artist: 1,
          youtubeUrl: 1,
          genre: 1,
          releaseDate: 1,
          description: 1,
          featured: 1,
          coverImage: 1,
          createdAt: 1,
        }
      })
      .sort({ featured: -1, createdAt: -1 })
      .toArray();

    return NextResponse.json(tracks);
  } catch (e) {
    console.error('Error fetching tracks:', e);
    return NextResponse.json({ 
      error: 'Failed to fetch tracks' 
    }, { status: 500 });
  }
}
