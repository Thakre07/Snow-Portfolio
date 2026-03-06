import React from 'react';
import { motion } from 'motion/react';
import { Code2, Terminal, Layers, Settings } from 'lucide-react';
import { resumeData } from '../constants/data';

const iconMap: Record<string, any> = {
  "ServiceNow Platform": Layers,
  "Scripting & Development": Code2,
  "Integration & Testing": Terminal,
  "Methodologies & Tools": Settings
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
          Technical <span className="text-white/30">Arsenal</span>
        </h2>
        <p className="text-white/50 max-w-xl">
          A comprehensive suite of tools and technologies mastered over 1.5+ years.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {resumeData.skills.map((skillGroup, idx) => {
          const Icon = iconMap[skillGroup.category] || Code2;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications Section */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <AwardIcon /> Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 group"
            >
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
              <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                {cert}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);
