import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { resumeData } from '../constants/data';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-4xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
        >
          {resumeData.basics.name.split(' ')[0]}
          <br />
          <span className="text-white/30">{resumeData.basics.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowDown size={18} />
            </span>
          </a>
          
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            Download Resume <Download size={18} />
          </button>
        </motion.div>
      </div>

      {/* Top Impact Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-0 right-0 hidden md:flex justify-center"
      >
        <div className="flex gap-12 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1.5+</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40">Years Exp</div>
          </div>
          <div className="w-px h-8 bg-white/10 my-auto" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">40%</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40">Effort Saved</div>
          </div>
          <div className="w-px h-8 bg-white/10 my-auto" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">STAR</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40">Awarded</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
