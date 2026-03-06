import React from 'react';
import { motion } from 'motion/react';
import { Award, TrendingUp, Star, Trophy } from 'lucide-react';
import { resumeData } from '../constants/data';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            Impact & <span className="text-white/30">Achievements</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Measurable results and recognition earned through technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-[2.5rem] bg-black border border-white/10 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {achievement.type === 'award' ? <Trophy size={120} /> : <TrendingUp size={120} />}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8">
                  {achievement.type === 'award' ? <Star size={28} /> : <TrendingUp size={28} />}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {achievement.title}
                </h3>
                
                {achievement.issuer && (
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
                    Issued by {achievement.issuer}
                  </p>
                )}
                
                <p className="text-white/60 leading-relaxed text-lg">
                  {achievement.context}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
