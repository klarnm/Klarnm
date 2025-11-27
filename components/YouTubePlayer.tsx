'use client';

import { useState, useEffect, memo } from 'react';
import { Play } from 'lucide-react';

interface YouTubePlayerProps {
  url: string;
  title: string;
  customCover?: string;
}

function YouTubePlayer({ url, title, customCover }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const videoId = getVideoId(url);
  
  if (!videoId) {
    console.error('Invalid YouTube URL:', url);
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center">
        <p className="text-red-500 text-sm">URL inválida</p>
      </div>
    );
  }

  const thumbnailUrls = [
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/0.jpg`,
  ];

  useEffect(() => {
    // Si hay cover personalizado, usarlo primero
    if (customCover) {
      setImgSrc(customCover);
      setImageLoaded(false);
    } else {
      setImgSrc(thumbnailUrls[0]);
      setImageLoaded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId, customCover]);

  const handleImageError = () => {
    console.log(`Error loading: ${imgSrc}, trying next...`);
    // Si el cover personalizado falla, intentar con YouTube
    if (customCover && imgSrc === customCover) {
      setImgSrc(thumbnailUrls[0]);
      setCurrentIndex(0);
      setImageLoaded(false);
    } else if (currentIndex < thumbnailUrls.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setImgSrc(thumbnailUrls[nextIndex]);
      setImageLoaded(false);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-[#1A1625] to-gray-800">
      {!isPlaying ? (
        <>
          {/* Placeholder mientras carga */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-4 border-[#FF6B7A] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-gray-400 text-sm">Cargando...</p>
              </div>
            </div>
          )}
          
          {imgSrc && (
            <img
              src={imgSrc}
              alt={title}
              className={`h-full w-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          )}
          
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all hover:bg-black/50 z-10"
            aria-label="Play video"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#8B1A1A] to-[#FF6B7A] transition-transform hover:scale-110 shadow-lg shadow-[#FF6B7A]/50">
              <Play className="ml-1 h-8 w-8 text-white fill-white" />
            </div>
          </button>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      )}
    </div>
  );
}

export default memo(YouTubePlayer);
