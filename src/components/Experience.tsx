import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Briefcase, Calendar, MapPin, Zap } from 'lucide-react';
import { resumeData } from '../constants/data';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
          Professional <span className="text-white/30">Experience</span>
        </h2>
        <p className="text-white/50 max-w-xl">
          A track record of delivering high-impact ServiceNow solutions in Agile environments.
        </p>
      </div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              "group relative rounded-3xl border transition-all duration-500 overflow-hidden",
              expandedIndex === idx 
                ? "bg-white/10 border-white/20 shadow-2xl" 
                : "bg-white/5 border-white/5 hover:border-white/10"
            )}
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-white/50">
                    <span className="flex items-center gap-1.5 font-semibold text-white/80">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {exp.dates}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-2">
                  {idx === 0 && (
                    <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider">
                      Current
                    </span>
                  )}
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                  className="text-white/30 group-hover:text-white transition-colors"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-8 pt-2 border-t border-white/10">
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4 flex items-center gap-2">
                        <Zap size={12} /> Project Focus
                      </h4>
                      <p className="text-white/80 font-medium">{exp.project}</p>
                    </div>

                    <div className="grid md:grid-cols-1 gap-4">
                      {exp.highlights.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex gap-4 group/bullet">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 group-hover/bullet:bg-white transition-colors shrink-0" />
                          <p className="text-white/60 text-sm leading-relaxed group-hover/bullet:text-white/90 transition-colors">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
