'use client';

import { motion } from 'motion/react';
import { cvData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section className="min-h-fit md:min-h-screen pt-32 md:pt-40 px-4 sm:px-6 flex flex-col justify-between border-b border-border bg-grid">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 md:mb-16 mt-4 md:mt-0">
          <div className="md:col-span-8 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
              className="mb-2"
            >
              <span className="font-sans font-bold tracking-widest uppercase text-accent text-sm md:text-base">
                Portfolio & Curriculum Vitae
              </span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: customEase }}
              className="mb-6"
            >
              <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-display font-medium tracking-tighter leading-none md:leading-[0.9] text-foreground sm:-ml-2">
                Seyed<br className="hidden md:block"/>Ruzaik.
              </h1>
            </motion.div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-end pb-4">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: customEase }}
              className="font-sans text-foreground text-lg md:text-xl leading-relaxed border-l-2 border-accent pl-6"
            >
              Building intelligent software systems, exploring data and AI, and sharing knowledge with the next generation of technology professionals.
            </motion.p>
          </div>
        </div>

      </div>

      {/* Bottom Structural Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: customEase }}
        className="w-full max-w-7xl mx-auto border-t border-border grid grid-cols-2 md:grid-cols-4 bg-background"
      >
        {cvData.personal.roles.map((role, i) => (
          <div 
            key={role} 
            className={`py-6 px-4 md:px-6 flex items-center justify-between border-border ${i < 2 ? 'border-b md:border-b-0' : ''} ${i % 2 === 0 ? 'border-r' : 'md:border-r last:border-r-0'}`}
          >
            <span className="font-sans text-xs md:text-sm font-bold tracking-widest uppercase">{role}</span>
            <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 ml-2" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
