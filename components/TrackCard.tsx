'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Music, Calendar } from 'lucide-react';
import YouTubePlayer from './YouTubePlayer';

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

interface TrackCardProps {
  track: Track;
  index: number;
}

function TrackCard({ track, index }: TrackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {track.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#8B1A1A] to-[#FF6B7A] px-3 py-1 text-xs font-semibold text-white">
            ⭐ Destacado
          </span>
        </div>
      )}

      <div className="mb-4">
        <YouTubePlayer 
          url={track.youtubeUrl} 
          title={track.title}
          customCover={track.coverImage}
        />
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-[#FF6B7A] transition-colors">
            {track.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{track.artist}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Music className="h-4 w-4" />
            <span>{track.genre}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(track.releaseDate).toLocaleDateString('es-ES')}</span>
          </div>
        </div>

        {track.description && (
          <p className="text-gray-300 text-sm leading-relaxed">
            {track.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default memo(TrackCard);
