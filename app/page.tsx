'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music2, Mail, Instagram, Youtube, Disc3, Zap, Radio, Play, MessageCircle, Sparkles, Circle, Guitar, Wand2, Twitter, MessageSquare } from 'lucide-react';
import TrackCard from '@/components/TrackCard';

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

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tracks')
      .then((res) => res.json())
      .then((data) => {
        setTracks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching tracks:', error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="bg-[#0D0A12] relative overflow-x-hidden">
      {/* Hero Section - ULTRA DYNAMIC */}
      <section className="relative overflow-hidden">
        {/* Complex layered background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1625] via-[#0D0A12] to-black" />
          <div className="absolute inset-0 diagonal-stripes opacity-40" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          
          {/* Animated gradient orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#FF6B7A]/30 via-[#A62B5C]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#4A2747]/30 via-[#8B1A1A]/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* MASSIVE 01 - Parallax effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.08,
            x: ['-100%', '100%']
          }}
          transition={{ 
            opacity: { duration: 1.2 },
            x: { 
              duration: 60, 
              repeat: Infinity, 
              ease: 'linear' 
            }
          }}
          className="absolute top-1/2 -translate-y-1/2 text-[40rem] font-black leading-none text-[#FF6B7A] select-none pointer-events-none whitespace-nowrap"
          style={{ 
            fontFamily: 'Impact, "Arial Black", sans-serif',
            WebkitTextStroke: '4px rgba(255, 107, 122, 0.3)',
            textShadow: '0 0 100px rgba(255, 107, 122, 0.5)'
          }}
        >
          01 • 01 • 01 • 01 • 01 • 
        </motion.div>

        {/* Top-right corner system - animated */}
        <motion.div className="absolute top-0 right-0 z-20">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[500px] h-3 bg-[#FF6B7A] origin-right shadow-lg shadow-[#FF6B7A]/50"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-0 right-0 w-3 h-96 bg-gradient-to-b from-[#FF6B7A] to-transparent origin-top"
          />
          {/* Small accent squares */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute top-12 right-12 w-20 h-20 border-4 border-[#A62B5C]"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute top-24 right-24 w-3 h-3 bg-[#A62B5C]"
          />
        </motion.div>

        {/* Bottom-left accent lines */}
        <motion.div className="absolute bottom-0 left-0 z-20">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[400px] h-2 bg-[#FF6B7A] origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 left-0 w-2 h-64 bg-gradient-to-t from-[#FF6B7A] to-transparent origin-bottom"
          />
        </motion.div>
        
        {/* Main content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-30 py-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            
            {/* Left side - Text content with extreme typography */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Small label */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-1 bg-[#FF6B7A]" />
                <span className="text-[#FF6B7A] font-black uppercase text-sm tracking-[0.3em]">
                  PRODUCER • COMPOSER
                </span>
              </motion.div>

              {/* Name - MASSIVE with glitch */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <h1 className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-[0.85] tracking-tighter text-white uppercase"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-white via-[#FF6B7A] to-[#A62B5C] bg-clip-text text-transparent">
                      KLARNM
                    </span>
                    {/* Glitch layers */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B7A] to-[#FFEE00] bg-clip-text text-transparent opacity-40 blur-sm"
                          style={{ transform: 'translate(4px, 4px)' }}>
                      KLARNM
                    </span>
                  </span>
                </h1>
                {/* Underline accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-2 w-64 bg-[#FF6B7A] mt-4 origin-left"
                />
              </motion.div>
              
              {/* Tagline - Aggressive design */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FF6B7A] flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight mb-3"
                        style={{ fontFamily: 'Impact, sans-serif' }}>
                      SONIDO FUERTE,<br/>
                      <span className="text-[#FF6B7A]">ENERGÍA REAL.</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                      Metal, electro, EDM y orquesta mezclados con mi estilo y sin miedo a probar cosas nuevas.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTAs - Ultra bold */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <a
                  href="#music"
                  className="group relative px-10 py-5 bg-gradient-to-r from-[#FF6B7A] to-[#A62B5C] text-white font-black text-lg uppercase tracking-wider overflow-hidden transition-all hover:scale-105 shadow-xl shadow-[#FF6B7A]/50"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Play className="w-6 h-6" />
                    ESCUCHAR AHORA
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[#8B1A1A]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
                
                <a
                  href="#contact"
                  className="group px-10 py-5 border-4 border-[#FF6B7A] text-[#FF6B7A] hover:bg-[#FF6B7A] hover:text-white font-black text-lg uppercase tracking-wider transition-all"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6" />
                    CONTACTAR
                  </span>
                </a>
              </motion.div>

              {/* Genre tags - 3D effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                {[
                  { name: 'METAL', color: '#FF6B7A' },
                  { name: 'ELECTRO', color: '#A62B5C' },
                  { name: 'EDM', color: '#8B1A1A' },
                  { name: 'ORQUESTA', color: '#4A2747' }
                ].map((genre, i) => (
                  <motion.div
                    key={genre.name}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    className="relative group cursor-default"
                  >
                    <div 
                      className="px-6 py-3 bg-black border-2 font-black text-sm uppercase tracking-wider transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ borderColor: genre.color, color: genre.color }}
                    >
                      {genre.name}
                    </div>
                    <div 
                      className="absolute inset-0 translate-x-1 translate-y-1 -z-10"
                      style={{ backgroundColor: genre.color }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right side - Image with dynamic frame */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative w-full max-w-2xl"
              >
                {/* Massive glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B7A] via-[#A62B5C] to-[#FFEE00] blur-3xl opacity-40 animate-pulse scale-110" />
                
                {/* Corner frame elements - ZZZ style */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-l-8 border-t-8 border-[#A62B5C] z-20" />
                <div className="absolute -top-8 -right-8 w-32 h-32 border-r-8 border-t-8 border-[#FF6B7A] z-20" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l-8 border-b-8 border-[#A62B5C] z-20" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 border-r-8 border-b-8 border-[#8B1A1A] z-20" />
                
                {/* Small accent squares */}
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-12 left-1/4 w-6 h-6 border-4 border-[#FF6B7A]"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-12 right-1/4 w-6 h-6 bg-[#FF6B7A]"
                />

                {/* Main image container */}
                <div className="relative z-10 perspective-card">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/hero-oc.png"
                      alt="Klarnm"
                      className="w-full h-auto filter contrast-110 saturate-110"
                    />
                    {/* Scan line overlay effect */}
                    <motion.div
                      animate={{ y: ['0%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B7A]/10 to-transparent h-32"
                    />
                  </div>
                </div>

                {/* Floating status badges - anime style */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -left-16 top-1/4 bg-[#FF6B7A] px-6 py-3 font-black uppercase text-white text-sm z-30 shadow-2xl"
                >
                  <div className="flex items-center gap-2">
                    <Radio className="w-5 h-5" />
                    <span>ONLINE</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -right-16 bottom-1/4 bg-[#FF6B7A] px-6 py-3 font-black uppercase text-white text-sm z-30 shadow-2xl border-2 border-white"
                >
                  <div className="flex items-center gap-2">
                    <Music2 className="w-5 h-5" />
                    <span>PRODUCER</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute inset-0 diagonal-stripes opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-[#1A1625]/30 to-black/95" />
        
        {/* Massive "02" background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.06,
            x: ['-100%', '100%']
          }}
          transition={{ 
            opacity: { duration: 1.2 },
            x: { 
              duration: 60, 
              repeat: Infinity, 
              ease: 'linear' 
            }
          }}
          className="absolute top-1/2 -translate-y-1/2 text-[35rem] font-black leading-none text-[#A62B5C] select-none pointer-events-none whitespace-nowrap"
          style={{ 
            fontFamily: 'Impact, "Arial Black", sans-serif',
            WebkitTextStroke: '4px rgba(166, 43, 92, 0.3)'
          }}
        >
          02 • 02 • 02 • 02 • 02 • 
        </motion.div>

        {/* Corner accent - top left */}
        <motion.div 
          initial={{ opacity: 0, x: -50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-20 left-0"
        >
          <div className="w-40 h-1 bg-[#A62B5C]" />
          <div className="w-1 h-40 bg-gradient-to-b from-[#A62B5C] to-transparent" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-[#FF6B7A]" />
              <span className="text-[#FF6B7A] font-black uppercase text-sm tracking-[0.3em]">
                ABOUT • INFORMATION
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.05em' }}>
              QUIÉN<br />SOY
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0">
            {/* Bio Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-24 sm:h-24 border-l-2 border-t-2 sm:border-l-4 sm:border-t-4 border-[#FF6B7A] z-10" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 border-r-2 border-b-2 sm:border-r-4 sm:border-b-4 border-[#A62B5C] z-10" />
              
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-[#FF6B7A]/30 p-4 sm:p-6 lg:p-8 hover:border-[#FF6B7A] transition-all sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1">
                {/* 3D shadow effect */}
                <div className="absolute inset-0 bg-[#FF6B7A]/20 -z-10 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FF6B7A] flex items-center justify-center">
                    <Music2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.03em' }}>
                    EN POCAS<br />PALABRAS
                  </h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Soy <strong className="text-[#FF6B7A] font-black">KLARNM</strong>, productor y compositor. 
                  Mezclo metal, electrónica y elementos orquestales para crear música intensa y con personalidad.
                </p>
              </div>
            </motion.div>

            {/* Bio Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              {/* Corner brackets */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-24 sm:h-24 border-l-2 border-t-2 sm:border-l-4 sm:border-t-4 border-[#A62B5C] z-10" />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 border-r-2 border-b-2 sm:border-r-4 sm:border-b-4 border-[#8B1A1A] z-10" />
              
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-[#A62B5C]/30 p-4 sm:p-6 lg:p-8 hover:border-[#A62B5C] transition-all sm:group-hover:translate-x-1 sm:group-hover:-translate-y-1">
                {/* 3D shadow effect */}
                <div className="absolute inset-0 bg-[#A62B5C]/20 -z-10 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#A62B5C] flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.03em' }}>
                    MI<br />ENFOQUE
                  </h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Mi trabajo nace de mezclar lo que más me gusta: guitarras pesadas, sintes fuertes, 
                    bases electrónicas y arreglos orquestales que le dan más emoción.
                  </p>
                  <p>
                    Me gusta experimentar y probar combinaciones nuevas hasta que cada canción encuentre 
                    su propio carácter. He trabajado con artistas independientes y proyectos creativos, 
                    aportando un sonido directo, claro y con fuerza.
                  </p>
                  <div className="pt-4 border-t-2 border-[#FF6B7A]/30">
                    <p className="text-[#FF6B7A] font-black text-xl uppercase tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      QUE LA MÚSICA SE SIENTA VIVA Y CONECTE
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-[#8B1A1A]/15 to-black/95" />
        
        {/* Massive "03" background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.05,
            x: ['-100%', '100%']
          }}
          transition={{ 
            opacity: { duration: 1.2 },
            x: { 
              duration: 60, 
              repeat: Infinity, 
              ease: 'linear'
            }
          }}
          className="absolute top-1/2 -translate-y-1/2 text-[40rem] font-black leading-none text-[#FF6B7A] select-none pointer-events-none whitespace-nowrap"
          style={{ 
            fontFamily: 'Impact, "Arial Black", sans-serif',
            WebkitTextStroke: '6px rgba(255, 107, 122, 0.2)'
          }}
        >
          03 • 03 • 03 • 03 • 03 • 
        </motion.div>

        {/* Diagonal accent lines */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 right-20 w-1 h-96 bg-gradient-to-b from-[#FF6B7A] to-transparent origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 left-20 w-1 h-96 bg-gradient-to-t from-[#A62B5C] to-transparent origin-bottom"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-[#FF6B7A]" />
              <span className="text-[#FF6B7A] font-black uppercase text-sm tracking-[0.3em]">
                TRACKS • MUSIC • BEATS
              </span>
              <div className="w-16 h-1 bg-[#FF6B7A]" />
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.05em' }}>
              MI<br />MÚSICA
            </h2>
          </motion.div>

          {loading ? (
            <div className="flex flex-col justify-center items-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 border-4 border-[#FF6B7A] border-t-transparent mb-4"
              />
              <p className="text-[#FF6B7A] font-black uppercase text-lg tracking-wider">LOADING...</p>
            </div>
          ) : tracks.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32 relative"
            >
              <div className="absolute inset-0 border-4 border-[#FF6B7A]/20 border-dashed" />
              <Disc3 className="h-32 w-32 text-[#FF6B7A]/50 mx-auto mb-8" />
              <p className="text-white font-black text-3xl uppercase tracking-wider mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                PRÓXIMAMENTE
              </p>
              <p className="text-gray-400 text-lg uppercase tracking-wider">
                Nuevos beats en camino...
              </p>
            </motion.div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
              {tracks.map((track, index) => (
                <TrackCard key={track._id} track={track} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute inset-0 diagonal-stripes opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-[#4A2747]/20 to-black/95" />
        
        {/* Massive "04" background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.04,
            x: ['-100%', '100%']
          }}
          transition={{ 
            opacity: { duration: 1.2 },
            x: { 
              duration: 60, 
              repeat: Infinity, 
              ease: 'linear'
            }
          }}
          className="absolute top-1/2 -translate-y-1/2 text-[45rem] font-black leading-none text-[#8B1A1A] select-none pointer-events-none whitespace-nowrap"
          style={{ 
            fontFamily: 'Impact, "Arial Black", sans-serif',
            WebkitTextStroke: '5px rgba(139, 26, 26, 0.3)'
          }}
        >
          04 • 04 • 04 • 04 • 
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 border-2 border-[#A62B5C]"
              />
              <span className="text-[#A62B5C] font-black uppercase text-sm tracking-[0.3em]">
                WORKFLOW • PROCESS • METHOD
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.05em' }}>
              CÓMO<br />TRABAJO
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 - HABLAMOS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Corner brackets */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-[#FF6B7A] z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-[#FF6B7A] z-10" />
              
              <div className="relative bg-black/80 backdrop-blur-sm border-2 border-[#FF6B7A]/30 p-8 group-hover:border-[#FF6B7A] transition-all group-hover:-translate-y-2">
                {/* 3D shadow */}
                <div className="absolute inset-0 bg-[#FF6B7A]/20 -z-10 translate-x-2 translate-y-2" />
                
                {/* Number badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FF6B7A] flex items-center justify-center font-black text-3xl text-white z-20 shadow-2xl">
                  01
                </div>
                
                <Mail className="h-12 w-12 text-[#FF6B7A] mb-6" />
                
                <h3 className="text-4xl font-black text-white uppercase mb-4 tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.04em' }}>
                  HABLAMOS
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Conversamos sobre tu idea, referencias, emociones y lo que quieres lograr con la canción.
                </p>
              </div>
            </motion.div>

            {/* Step 2 - PRODUZCO */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              {/* Corner brackets */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-[#A62B5C] z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-[#A62B5C] z-10" />
              
              <div className="relative bg-black/80 backdrop-blur-sm border-2 border-[#A62B5C]/30 p-8 group-hover:border-[#A62B5C] transition-all group-hover:-translate-y-2">
                {/* 3D shadow */}
                <div className="absolute inset-0 bg-[#A62B5C]/20 -z-10 translate-x-2 translate-y-2" />
                
                {/* Number badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#A62B5C] flex items-center justify-center font-black text-3xl text-white z-20 shadow-2xl">
                  02
                </div>
                
                <Music2 className="h-12 w-12 text-[#A62B5C] mb-6" />
                
                <h3 className="text-4xl font-black text-white uppercase mb-4 tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.04em' }}>
                  PRODUZCO
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Creo la base, te la envío, vemos qué funciona y ajusto lo necesario hasta que ambos quedemos satisfechos.
                </p>
              </div>
            </motion.div>

            {/* Step 3 - ENTREGO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group"
            >
              {/* Corner brackets */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-[#8B1A1A] z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-[#8B1A1A] z-10" />
              
              <div className="relative bg-black/80 backdrop-blur-sm border-2 border-[#8B1A1A]/30 p-8 group-hover:border-[#8B1A1A] transition-all group-hover:-translate-y-2">
                {/* 3D shadow */}
                <div className="absolute inset-0 bg-[#8B1A1A]/20 -z-10 translate-x-2 translate-y-2" />
                
                {/* Number badge */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#8B1A1A] flex items-center justify-center font-black text-3xl text-white z-20 shadow-2xl">
                  03
                </div>
                
                <Disc3 className="h-12 w-12 text-[#8B1A1A] mb-6" />
                
                <h3 className="text-4xl font-black text-white uppercase mb-4 tracking-wide" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.04em' }}>
                  ENTREGO
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hago la mezcla, el master y te paso todo listo (stems incluidos). Si necesitas un retoque pequeño, también puedo hacerlo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-[#8B1A1A]/15 to-black/95" />
        
        {/* Massive "05" background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.06,
            x: ['-100%', '100%']
          }}
          transition={{ 
            opacity: { duration: 1.2 },
            x: { 
              duration: 60, 
              repeat: Infinity, 
              ease: 'linear'
            }
          }}
          className="absolute top-1/2 -translate-y-1/2 text-[50rem] font-black leading-none text-[#FF6B7A] select-none pointer-events-none whitespace-nowrap"
          style={{ 
            fontFamily: 'Impact, "Arial Black", sans-serif',
            WebkitTextStroke: '8px rgba(255, 107, 122, 0.2)'
          }}
        >
          05 • 05 • 05 • 05 • 
        </motion.div>

        {/* Angular corner decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-4 border-t-4 border-[#FF6B7A]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-4 border-b-4 border-[#A62B5C]" />

        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-[#FF6B7A]"
              />
              <span className="text-[#FF6B7A] font-black uppercase text-sm tracking-[0.3em]">
                CONTACT • EMAIL • SOCIAL
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.05em' }}>
              HABLEMOS<br />DE TU<br />PROYECTO
            </h2>
            <div className="space-y-3">
              <p className="text-2xl text-gray-300 leading-relaxed">
                Disponible para <span className="text-[#FF6B7A] font-black">PRODUCCIÓN</span>,{' '}
                <span className="text-[#A62B5C] font-black">MEZCLA</span>,{' '}
                <span className="text-[#8B1A1A] font-black">MASTERIZACIÓN</span>
              </p>
              <p className="text-xl text-gray-400">
                Si buscas un sonido con energía, emoción y un toque experimental, puedes contar conmigo.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Contact Box */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Terminal-style container */}
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#FF6B7A]/20" />
            
            <div className="relative bg-black/90 backdrop-blur-sm border-4 border-[#FF6B7A] p-12">
              {/* Terminal header bar */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-[#FF6B7A] flex items-center px-6 gap-2">
                <div className="w-3 h-3 bg-black" />
                <div className="w-3 h-3 bg-black" />
                <div className="w-3 h-3 bg-black" />
                <span className="ml-4 text-black font-black uppercase text-sm tracking-wider">CONTACT_KLARNM.EXE</span>
              </div>

              <div className="mt-12 flex flex-col items-center gap-8">
                {/* Email button */}
                <motion.a
                  href="mailto:klarnm123@gmail.com"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="group relative w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-[#FF6B7A] translate-x-2 translate-y-2" />
                  <div className="relative px-12 py-6 bg-gradient-to-r from-[#FF6B7A] to-[#A62B5C] border-4 border-white flex items-center justify-center gap-4 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <Mail className="h-8 w-8 text-white" />
                    <span className="text-white font-black text-2xl uppercase tracking-wider" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      klarnm123@gmail.com
                    </span>
                  </div>
                </motion.a>

                {/* Status indicator */}
                <div className="flex items-center gap-3 text-[#FF6B7A]">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-4 h-4 bg-[#FF6B7A]"
                  />
                  <span className="font-black uppercase text-sm tracking-wider">
                    RESPUESTA EN 48 HORAS
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B7A] to-transparent my-4" />

                {/* Social links */}
                <div className="w-full">
                  <p className="text-center text-gray-400 font-black uppercase text-sm tracking-wider mb-6">
                    &gt; SÍGUEME EN:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.a
                      href="https://www.instagram.com/vic_mac_3"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-[#A62B5C] translate-x-1 translate-y-1" />
                      <div className="relative px-8 py-4 bg-black border-2 border-[#A62B5C] flex items-center gap-3 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <Instagram className="h-6 w-6 text-[#A62B5C]" />
                        <span className="text-white font-black uppercase tracking-wide">@vic_mac_3</span>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.youtube.com/@Klarnm132"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-[#8B1A1A] translate-x-1 translate-y-1" />
                      <div className="relative px-8 py-4 bg-black border-2 border-[#8B1A1A] flex items-center gap-3 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <Youtube className="h-6 w-6 text-[#8B1A1A]" />
                        <span className="text-white font-black uppercase tracking-wide">@Klarnm132</span>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://x.com/KlarnmOficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-[#FF6B7A] translate-x-1 translate-y-1" />
                      <div className="relative px-8 py-4 bg-black border-2 border-[#FF6B7A] flex items-center gap-3 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <Twitter className="h-6 w-6 text-[#FF6B7A]" />
                        <span className="text-white font-black uppercase tracking-wide">@KlarnmOficial</span>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://discord.gg/jJjcQ9V79t"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-[#4A2747] translate-x-1 translate-y-1" />
                      <div className="relative px-8 py-4 bg-black border-2 border-[#4A2747] flex items-center gap-3 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <MessageSquare className="h-6 w-6 text-[#4A2747]" />
                        <span className="text-white font-black uppercase tracking-wide">DISCORD</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-gray-400">
          <p className="mb-2 text-lg font-semibold text-gray-300">Klarnm</p>
          <p>© 2025 Klarnm - Productor Musical. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
