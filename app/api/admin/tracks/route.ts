import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// GET - Obtener todas las canciones (protegido)
export async function GET() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const client = await clientPromise;
    const db = client.db('portafolio');
    
    const tracks = await db
      .collection('tracks')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(tracks);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 });
  }
}

// POST - Crear nueva canción
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    
    // Validaciones
    if (!body.title || !body.artist || !body.youtubeUrl || !body.genre || !body.releaseDate) {
      return NextResponse.json({ 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('portafolio');
    
    const newTrack = {
      title: body.title.trim(),
      artist: body.artist.trim(),
      youtubeUrl: body.youtubeUrl.trim(),
      genre: body.genre.trim(),
      releaseDate: body.releaseDate,
      description: body.description?.trim() || '',
      featured: Boolean(body.featured),
      coverImage: body.coverImage || '',
      createdAt: new Date(),
    };

    const result = await db.collection('tracks').insertOne(newTrack);

    return NextResponse.json({ 
      success: true, 
      id: result.insertedId 
    });
  } catch (e) {
    console.error('Error creating track:', e);
    return NextResponse.json({ 
      error: 'Failed to create track' 
    }, { status: 500 });
  }
}

// PUT - Actualizar canción
export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { _id, ...updateData } = body;
    
    if (!_id) {
      return NextResponse.json({ 
        error: 'Track ID required' 
      }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db('portafolio');
    
    const sanitizedData = {
      ...(updateData.title && { title: updateData.title.trim() }),
      ...(updateData.artist && { artist: updateData.artist.trim() }),
      ...(updateData.youtubeUrl && { youtubeUrl: updateData.youtubeUrl.trim() }),
      ...(updateData.genre && { genre: updateData.genre.trim() }),
      ...(updateData.releaseDate && { releaseDate: updateData.releaseDate }),
      ...(updateData.description !== undefined && { description: updateData.description?.trim() || '' }),
      ...(updateData.featured !== undefined && { featured: Boolean(updateData.featured) }),
      ...(updateData.coverImage !== undefined && { coverImage: updateData.coverImage }),
      updatedAt: new Date(),
    };
    
    const result = await db.collection('tracks').updateOne(
      { _id: new ObjectId(_id) },
      { $set: sanitizedData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ 
        error: 'Track not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Error updating track:', e);
    return NextResponse.json({ 
      error: 'Failed to update track' 
    }, { status: 500 });
  }
}

// DELETE - Eliminar canción
export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ 
        error: 'ID required' 
      }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('portafolio');
    
    const result = await db.collection('tracks').deleteOne({ 
      _id: new ObjectId(id) 
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ 
        error: 'Track not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Error deleting track:', e);
    return NextResponse.json({ 
      error: 'Failed to delete track' 
    }, { status: 500 });
  }
}
