'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, LogOut, Music2, Save, X } from 'lucide-react';

interface Track {
  _id: string;
  title: string;
  artist: string;
  youtubeUrl: string;
  genre: string;
  releaseDate: string;
  description: string;
  featured: boolean;
  coverImage?: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTrack, setEditingTrack] = useState<Track | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    youtubeUrl: '',
    genre: '',
    releaseDate: '',
    description: '',
    featured: false,
    coverImage: '',
  });
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchTracks();
    }
  }, [status]);

  const fetchTracks = async () => {
    try {
      const res = await fetch('/api/admin/tracks');
      const data = await res.json();
      setTracks(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tracks:', error);
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tamaño (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('La imagen debe ser menor a 2MB');
      return;
    }

    // Validar tipo
    if (!file.type.startsWith('image/')) {
      alert('Solo se permiten imágenes');
      return;
    }

    setUploading(true);
    
    try {
      // Convertir a base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData({ ...formData, coverImage: base64String });
        setImagePreview(base64String);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error al subir imagen:', error);
      alert('Error al subir la imagen');
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = editingTrack
        ? await fetch('/api/admin/tracks', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, _id: editingTrack._id }),
          })
        : await fetch('/api/admin/tracks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });

      if (!response.ok) {
        throw new Error('Failed to save track');
      }
      
      // Resetear form
      setFormData({
        title: '',
        artist: '',
        youtubeUrl: '',
        genre: '',
        releaseDate: '',
        description: '',
        featured: false,
        coverImage: '',
      });
      setImagePreview('');
      setShowForm(false);
      setEditingTrack(null);
      await fetchTracks();
    } catch (error) {
      console.error('Error saving track:', error);
      alert('Error al guardar la canción. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (track: Track) => {
    setEditingTrack(track);
    setFormData({
      title: track.title,
      artist: track.artist,
      youtubeUrl: track.youtubeUrl,
      genre: track.genre,
      releaseDate: track.releaseDate,
      description: track.description,
      featured: track.featured,
      coverImage: track.coverImage || '',
    });
    setImagePreview(track.coverImage || '');
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar esta canción?')) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/tracks?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete track');
      }
      
      await fetchTracks();
    } catch (error) {
      console.error('Error deleting track:', error);
      alert('Error al eliminar la canción. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Music2 className="h-8 w-8 text-purple-500" />
              <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Botón Agregar */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white">Mis Canciones</h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingTrack(null);
              setImagePreview('');
              setFormData({
                title: '',
                artist: '',
                youtubeUrl: '',
                genre: '',
                releaseDate: '',
                description: '',
                featured: false,
                coverImage: '',
              });
            }}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white hover:from-purple-700 hover:to-pink-700"
          >
            {showForm ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            {showForm ? 'Cancelar' : 'Agregar Canción'}
          </button>
        </div>

        {/* Formulario */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 rounded-2xl bg-gray-900/50 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-xl font-bold text-white">
              {editingTrack ? 'Editar Canción' : 'Nueva Canción'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Título *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Artista *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  URL de YouTube *
                </label>
                <input
                  type="url"
                  required
                  value={formData.youtubeUrl}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Género *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    placeholder="Rock, Pop, etc."
                    className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Fecha de Lanzamiento *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.releaseDate}
                    onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                    className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descripción
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Cover Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cover Personalizado (opcional)
                </label>
                <div className="space-y-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="block w-full text-sm text-gray-400
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-lg file:border-0
                      file:text-sm file:font-semibold
                      file:bg-gradient-to-r file:from-[#8B1A1A] file:to-[#FF6B7A]
                      file:text-white
                      hover:file:opacity-90
                      file:cursor-pointer
                      disabled:opacity-50"
                  />
                  {uploading && (
                    <p className="text-sm text-gray-400">Subiendo imagen...</p>
                  )}
                  {imagePreview && (
                    <div className="relative w-full max-w-md">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full aspect-video object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, coverImage: '' });
                          setImagePreview('');
                        }}
                        className="absolute top-2 right-2 p-1 rounded-full bg-red-600 hover:bg-red-700 text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  <p className="text-xs text-gray-500">
                    Si no subes un cover, se usará la miniatura de YouTube. Tamaño máximo: 2MB
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-purple-600 focus:ring-2 focus:ring-purple-500"
                />
                <label htmlFor="featured" className="text-sm text-gray-300">
                  Marcar como destacado
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white hover:from-purple-700 hover:to-pink-700"
                >
                  <Save className="h-4 w-4" />
                  {editingTrack ? 'Guardar Cambios' : 'Crear Canción'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingTrack(null);
                  }}
                  className="rounded-lg bg-gray-700 px-6 py-3 font-semibold text-white hover:bg-gray-600"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Lista de canciones */}
        <div className="space-y-4">
          {tracks.length === 0 ? (
            <div className="rounded-2xl bg-gray-900/50 p-12 text-center backdrop-blur-sm">
              <Music2 className="mx-auto h-16 w-16 text-gray-600 mb-4" />
              <p className="text-gray-400 text-lg">
                No hay canciones aún. ¡Agrega tu primera canción!
              </p>
            </div>
          ) : (
            tracks.map((track) => (
              <motion.div
                key={track._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-xl bg-gray-900/50 p-6 backdrop-blur-sm hover:bg-gray-900/70 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{track.title}</h3>
                      {track.featured && (
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold text-white">
                          ⭐ Destacado
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-2">{track.artist} • {track.genre}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(track.releaseDate).toLocaleDateString('es-ES')}
                    </p>
                    {track.description && (
                      <p className="mt-3 text-gray-300 text-sm">{track.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(track)}
                      className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(track._id)}
                      className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
