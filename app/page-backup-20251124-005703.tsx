'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Music2, Mail, Instagram, Youtube, Disc3, Zap, Sparkles, Guitar, Wand2 } from 'lucide-react';
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
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-600 to-purple-600 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-blue-900/30" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl z-10"
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
                  <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
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
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-white font-bold hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-lg"
                >
                  <Music2 className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Escuchar ahora
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-full text-white font-bold hover:bg-gray-700/80 hover:border-purple-400 transition-all text-lg"
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
                    className="px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-semibold text-purple-200"
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                
                <div className="relative rounded-3xl overflow-hidden inline-block border-2 border-purple-500/30">
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
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-2xl shadow-xl"
                >
                  <Guitar className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-xl"
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        
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
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-purple-600 rounded-lg p-2">
                  <Music2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">En pocas palabras</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy <strong className="text-purple-400">Klarnm</strong>, productor y compositor. 
                Mezclo metal, electrónica y elementos orquestales para crear música intensa y con personalidad.
              </p>
            </motion.div>

            {/* Bio extendida */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-pink-600 rounded-lg p-2">
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
                <p className="text-purple-300 font-semibold">
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
            <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connection lines (desktop) */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50" />

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all group hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Hablamos
                <Mail className="h-6 w-6 text-purple-400" />
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
              className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-500/30 hover:border-pink-500/60 transition-all group hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/50 group-hover:shadow-pink-500/80 transition-all">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Produzco
                <Music2 className="h-6 w-6 text-pink-400" />
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
              className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all group hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/80 transition-all">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                Entrego
                <Disc3 className="h-6 w-6 text-blue-400" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        
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
                Estoy disponible para <strong className="text-purple-400">producción</strong>,{' '}
                <strong className="text-pink-400">mezcla</strong>,{' '}
                <strong className="text-blue-400">masterización</strong> y colaboraciones.
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
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-purple-500/30 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:klarnm123@gmail.com"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-white font-bold hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all transform hover:scale-105 text-xl shadow-lg shadow-purple-500/50"
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
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-pink-600/40 hover:to-purple-600/40 hover:border-pink-500/60 transition-all group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">@klarnm23</span>
                </a>
                <a
                  href="https://youtube.com/@klarnm23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm border border-red-500/30 rounded-full text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-red-600/40 hover:to-pink-600/40 hover:border-red-500/60 transition-all group"
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
