import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { resumeData } from '../constants/data';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
          Academic <span className="text-white/30">Foundation</span>
        </h2>
      </div>

      <div className="space-y-12">
        {resumeData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 border-l border-white/10 pb-12 last:pb-0"
          >
            <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-white">
              <GraduationCap size={20} />
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-lg text-white/60 font-medium mt-1">{edu.degree}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-bold">
                    {edu.aggregate} Aggregate
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-white/40">
                <span className="flex items-center gap-2">
                  <Calendar size={14} /> {edu.dates}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} /> {edu.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
