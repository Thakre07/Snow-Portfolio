import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Splash } from './components/Splash';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading && <Splash onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedBackground />
          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Achievements />
            <Skills />
            <Education />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
