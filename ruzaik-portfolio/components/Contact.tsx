'use client';
import { motion } from 'motion/react';
import { cvData } from '@/lib/data';

export default function Contact() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="contact" className="bg-foreground text-surface pt-16 md:pt-32 pb-12 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-24"
        >
          <div className="font-sans font-bold tracking-widest uppercase text-accent mb-6">Next Steps</div>
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display font-medium mb-8 leading-none">
            Let's Build.
          </h2>
          <p className="font-sans text-surface/70 text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Whether it's architecting a scalable backend, exploring AI research, or pushing technical boundaries—I'm open to discussing ambitious projects.
          </p>
          
          <a 
            href={`mailto:${cvData.personal.email}`} 
            className="inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 bg-accent text-white font-sans font-bold text-sm sm:text-base md:text-lg tracking-wide hover:scale-105 transition-transform w-full sm:w-auto break-all sm:break-normal"
          >
            {cvData.personal.email}
          </a>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-surface/20">
          <div className="text-surface/50 font-sans text-sm">
            © {new Date().getFullYear()} Seyed Ruzaik. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {Object.entries(cvData.personal.links).map(([name, url]) => (
              <a 
                key={name} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-surface/70 hover:text-white capitalize font-sans text-sm font-bold tracking-widest transition-colors"
              >
                {name.replace(/([A-Z])/g, ' $1').trim()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
