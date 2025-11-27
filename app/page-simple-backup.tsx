'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music2, Mail, Instagram, Youtube, Disc3, Zap, Radio, Play, MessageCircle, Sparkles, Circle, Guitar, Wand2 } from 'lucide-react';
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
    <main className="min-h-screen bg-[#0D0A12] relative overflow-hidden">
      {/* Hero Section - ZZZ Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Carbon fiber background */}
        <div className="absolute inset-0 carbon-bg opacity-40" />
        
        {/* Diagonal stripes overlay */}
        <div className="absolute inset-0 stripes-bg" />
        
        {/* Big number 01 */}
        <div className="absolute top-20 left-0 opacity-10">
          <span className="section-number text-white">01</span>
        </div>

        {/* Yellow accent block - top right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-0 w-96 h-64 yellow-block"
        />

        {/* Diagonal white accent - bottom left */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-white opacity-20" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
                  <span className="inline-block bg-gradient-to-r from-[#FF6B7A] via-[#A62B5C] to-[#8B1A1A] bg-clip-text text-transparent animate-gradient">
                    Klarnm
                  </span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Zap className="h-8 w-8 text-yellow-400" />
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    Sonido fuerte, energía real.
                  </p>
                </div>
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Metal, electro, EDM y orquesta mezclados con mi estilo y sin miedo a probar cosas nuevas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
              >
                <a
                  href="#music"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B1A1A] via-[#A62B5C] to-[#FF6B7A] rounded-full text-white font-bold hover:from-[#6B1515] hover:via-[#8A2348] hover:to-[#FF5565] transition-all transform hover:scale-105 shadow-lg hover:shadow-[#FF6B7A]/50 text-lg"
                >
                  <Music2 className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Escuchar ahora
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/80 backdrop-blur-sm border-2 border-[#A62B5C]/50 rounded-full text-white font-bold hover:bg-gray-700/80 hover:border-[#FF6B7A] transition-all text-lg"
                >
                  <Mail className="h-6 w-6" />
                  Contactar
                </a>
              </motion.div>

              {/* Genre Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mt-8"
              >
                {['Metal', 'Electro', 'EDM', 'Orquesta'].map((genre, i) => (
                  <span
                    key={genre}
                    className="px-4 py-2 bg-gradient-to-r from-[#4A2747]/50 to-[#A62B5C]/50 backdrop-blur-sm border border-[#FF6B7A]/30 rounded-full text-sm font-semibold text-[#FF6B7A]"
                  >
                    {genre}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B1A1A] to-[#FF6B7A] rounded-3xl blur-2xl opacity-30 animate-pulse" />
                
                <div className="relative rounded-3xl overflow-hidden inline-block border-2 border-[#FF6B7A]/30">
                  <img
                    src="/images/hero-oc.png"
                    alt="Klarnm - Productor Musical"
                    className="block w-full h-auto max-w-md filter drop-shadow-2xl"
                  />
                </div>

                {/* Floating icons */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-[#A62B5C] to-[#FF6B7A] p-4 rounded-2xl shadow-xl"
                >
                  <Guitar className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#4A2747] to-[#8B1A1A] p-4 rounded-2xl shadow-xl"
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4A2747]/10 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6"
            >
              <Wand2 className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
              Quién Soy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio corta */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-[#FF6B7A]/20 hover:border-[#FF6B7A]/40 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#A62B5C] rounded-lg p-2">
                  <Music2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">En pocas palabras</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy <strong className="text-[#FF6B7A]">Klarnm</strong>, productor y compositor. 
                Mezclo metal, electrónica y elementos orquestales para crear música intensa y con personalidad.
              </p>
            </motion.div>

            {/* Bio extendida */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-[#A62B5C]/20 hover:border-[#A62B5C]/40 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-[#FF6B7A] rounded-lg p-2">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mi enfoque</h3>
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
                <p className="text-[#FF6B7A] font-semibold">
                  Mi objetivo es simple: que la música se sienta viva y conecte.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Music Section */}
      <section id="music" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Mi Música
            </h2>
            <p className="text-xl text-gray-400">
              Explora mi colección de beats y producciones
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
          ) : tracks.length === 0 ? (
            <div className="text-center py-20">
              <Disc3 className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">
                Próximamente nuevos beats...
              </p>
            </div>
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
      <section id="process" className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
              Cómo Trabajo
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#8B1A1A] to-[#FF6B7A] mx-auto rounded-full" />
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connection lines (desktop) */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#8B1A1A]/50 via-[#FF6B7A]/50 to-[#A62B5C]/50" />

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#FF6B7A]/30 hover:border-[#FF6B7A]/60 transition-all group hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-[#8B1A1A] to-[#A62B5C] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-[#FF6B7A]/50 group-hover:shadow-[#FF6B7A]/80 transition-all">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Hablamos
                <Mail className="h-6 w-6 text-[#FF6B7A]" />
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Conversamos sobre tu idea, referencias, emociones y lo que quieres lograr con la canción.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#A62B5C]/30 hover:border-[#A62B5C]/60 transition-all group hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-[#A62B5C] to-[#FF6B7A] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-[#A62B5C]/50 group-hover:shadow-[#A62B5C]/80 transition-all">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Produzco
                <Music2 className="h-6 w-6 text-white" />
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Creo la base, te la envío, vemos qué funciona y ajusto lo necesario hasta que ambos quedemos satisfechos.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#4A2747]/30 hover:border-[#4A2747]/60 transition-all group hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-[#4A2747] to-[#8B1A1A] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-[#8B1A1A]/50 group-hover:shadow-[#8B1A1A]/80 transition-all">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Entrego
                <Disc3 className="h-6 w-6 text-white" />
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Hago la mezcla, el master y te paso todo listo (stems incluidos). Si necesitas un retoque pequeño, también puedo hacerlo.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B1A1A]/20 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mb-6"
            >
              <Mail className="h-10 w-10 text-white" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6">
              Hablemos de Tu Proyecto
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                Estoy disponible para <strong className="text-[#FF6B7A]">producción</strong>,{' '}
                <strong className="text-[#A62B5C]">mezcla</strong>,{' '}
                <strong className="text-[#8B1A1A]">masterización</strong> y colaboraciones.
              </p>
              <p className="text-lg text-gray-400">
                Si buscas un sonido con energía, emoción y un toque experimental, puedes contar conmigo.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-[#FF6B7A]/30 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:klarnm123@gmail.com"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#8B1A1A] via-[#A62B5C] to-[#FF6B7A] rounded-full text-white font-bold hover:from-[#6B1515] hover:via-[#8A2348] hover:to-[#FF5565] transition-all transform hover:scale-105 text-xl shadow-lg shadow-[#FF6B7A]/50"
              >
                <Mail className="h-7 w-7 group-hover:rotate-12 transition-transform" />
                klarnm123@gmail.com
              </a>

              <p className="text-sm text-gray-400 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Respondo normalmente en 48 horas
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-center text-gray-400 mb-6">También me encuentras en:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.instagram.com/klarnm23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#A62B5C]/20 to-[#FF6B7A]/20 backdrop-blur-sm border border-[#FF6B7A]/30 rounded-full text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-[#A62B5C]/40 hover:to-[#FF6B7A]/40 hover:border-[#FF6B7A]/60 transition-all group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">@klarnm23</span>
                </a>
                <a
                  href="https://youtube.com/@klarnm23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#8B1A1A]/20 to-[#A62B5C]/20 backdrop-blur-sm border border-[#8B1A1A]/30 rounded-full text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-[#8B1A1A]/40 hover:to-[#A62B5C]/40 hover:border-[#8B1A1A]/60 transition-all group"
                >
                  <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">@klarnm23</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
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
