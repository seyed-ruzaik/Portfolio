'use client';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Teaching() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="teaching" className="border-b border-border bg-accent text-white py-16 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-medium mb-8 leading-[0.9]">
            I Build Systems.<br/>I Share Knowledge.
          </h2>
          <p className="font-sans text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
            As a Lecturer at the Informatics Institute of Technology and a Tech Blogger, I believe that true mastery comes from breaking down complex engineering paradigms for the next generation of professionals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://medium.com/@seyedruzaik" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 md:px-8 py-4 bg-white text-accent font-sans font-bold tracking-wide flex items-center justify-center gap-3 hover:scale-105 transition-transform w-full sm:w-auto text-sm sm:text-base"
            >
              Read My Articles
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://scholar.google.com/citations?user=fPY0wVUAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 md:px-8 py-4 bg-transparent text-white border border-white font-sans font-bold tracking-wide flex items-center justify-center gap-3 hover:bg-white/10 transition-colors w-full sm:w-auto text-sm sm:text-base"
            >
              View Google Scholar
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
