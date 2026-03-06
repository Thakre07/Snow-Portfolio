import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { resumeData } from '../constants/data';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter text-white mb-8">
              Let's build something <span className="text-white/30">exceptional.</span>
            </h2>
            <div className="space-y-6">
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="flex items-center gap-4 text-xl text-white/60 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                {resumeData.basics.email}
              </a>
              <a
                href={`tel:${resumeData.basics.phone}`}
                className="flex items-center gap-4 text-xl text-white/60 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                {resumeData.basics.phone}
              </a>
              <div className="flex items-center gap-4 text-xl text-white/60">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                {resumeData.basics.location}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end md:items-end">
            <a
              href={resumeData.basics.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-white text-black font-bold transition-all hover:scale-105 active:scale-95"
            >
              Connect on LinkedIn <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/30 italic">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
