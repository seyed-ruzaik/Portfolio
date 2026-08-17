'use client';
import { motion } from 'motion/react';
import { cvData } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export default function Publications() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="publications" className="border-b border-border bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-foreground mb-6">Publications</h2>
            <div className="w-12 h-1 bg-accent" />
          </div>
          <p className="text-foreground/70 font-sans text-lg max-w-md">
            Peer-reviewed conference proceedings focusing on AI, NLP, Machine Learning, and their real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
          {cvData.publications.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              className="bg-background p-4 sm:p-8 md:p-10 hover:bg-accent hover:text-white transition-colors duration-300 group flex flex-col justify-between h-full border-r border-b border-border"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-sans font-bold tracking-widest text-xs uppercase opacity-70 border border-current px-3 py-1">
                    {pub.year}
                  </span>
                  <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-medium mb-4 leading-snug">
                  {pub.title}
                </h3>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/20 group-hover:border-white/30">
                <p className="font-sans text-sm font-semibold mb-2">
                  {pub.authors}
                </p>
                <p className="font-sans text-xs uppercase tracking-wider opacity-80">
                  {pub.conference}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
