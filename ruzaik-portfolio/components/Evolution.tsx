'use client';

import { motion } from 'motion/react';
import { cvData } from '@/lib/data';

export default function Evolution() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="evolution" className="border-b border-border bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
              className="relative md:sticky md:top-32"
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-foreground mb-6">
                The<br/>Evolution
              </h2>
              <div className="w-12 h-1 bg-accent mb-6" />
              <p className="font-sans text-foreground/70 text-lg leading-relaxed">
                A continuous progression from theoretical computer science foundations to building scalable architecture and organizational intelligence.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-8 flex flex-col">
            {cvData.evolution.map((stage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: customEase }}
                className="group flex flex-col md:flex-row gap-4 md:gap-12 py-10 border-b border-border/30 last:border-b-0 hover:bg-surface-hover transition-colors px-4 -mx-4 sm:px-6 sm:-mx-6 md:mx-0 md:px-8"
              >
                <div className="md:w-32 shrink-0">
                  <div className="font-sans font-bold text-accent tracking-widest">{stage.year}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-display text-foreground mb-3 group-hover:translate-x-2 transition-transform duration-300 ease-out">
                    {stage.role}
                  </h3>
                  <p className="font-sans text-foreground/70 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
