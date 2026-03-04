'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { OpeningScreen } from '@/components/sections/OpeningScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { EventDetails } from '@/components/sections/EventDetails';
import { GallerySection } from '@/components/sections/GallerySection';
import { AgendaSection } from '@/components/sections/AgendaSection';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { ClosingSection } from '@/components/sections/ClosingSection';
import { Volume2, VolumeX } from 'lucide-react';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fade-in audio when gate opens
  useEffect(() => {
    if (!isOpened) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.loop = true;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — silently ignore, user already interacted
      });
    }

    // Gradually fade in volume over 3 seconds
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.15) {
        vol = Math.min(vol + 0.005, 0.15);
        audio.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 80);

    return () => clearInterval(fade);
  }, [isOpened]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  };

  return (
    <main className="relative min-h-screen font-sans" style={{ background: '#F6F1E8' }}>
      {/* Background audio — plays after gate opens */}
      {/* Replace /audio/backsound.mp3 with your preferred audio file */}
      <audio ref={audioRef} src="/audio/Opick - Ramadhan Tiba  Official Video.mp3" preload="auto" />

      {/* Mute/Unmute button — visible only after opening */}
      <AnimatePresence>
        {isOpened && (
          <motion.button
            key="audio-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: 'rgba(250,248,243,0.85)',
              border: '1px solid rgba(198,167,94,0.4)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(198,167,94,0.15)',
            }}
            title={isMuted ? 'Aktifkan suara' : 'Matikan suara'}
          >
            {isMuted
              ? <VolumeX className="w-4 h-4" style={{ color: '#C6A75E' }} />
              : <Volume2 className="w-4 h-4" style={{ color: '#C6A75E' }} />
            }
          </motion.button>
        )}
      </AnimatePresence>

      {/* Opening Screen */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="opening-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 pointer-events-auto"
          >
            <OpeningScreen onOpen={() => setIsOpened(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden pointer-events-none'
          }`}
      >
        <HeroSection />
        <EventDetails />
        <GallerySection />
        <AgendaSection />
        <QuoteSection />
        <ClosingSection />
      </div>
    </main>
  );
}
