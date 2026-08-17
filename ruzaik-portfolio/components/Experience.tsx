'use client';
import { motion } from 'motion/react';
import { cvData } from '@/lib/data';

export default function Experience() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="experience" className="border-b border-border bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Title Side */}
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-border p-4 sm:p-8 md:p-16 flex flex-col justify-between">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: customEase }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-foreground mb-6">
              Professional<br/>Experience
            </h2>
            <p className="font-sans text-foreground/70">
              Industry applications spanning healthcare, e-commerce, and enterprise integration.
            </p>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-2/3">
          {cvData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-border last:border-b-0 p-4 sm:p-8 md:p-12 hover:bg-surface-hover transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h3 className="text-2xl md:text-3xl font-display text-foreground">{exp.role}</h3>
                <span className="font-sans font-bold text-accent tracking-widest text-sm shrink-0">{exp.period}</span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-6">
                <h4 className="font-sans font-semibold text-foreground">{exp.company}</h4>
                <span className="hidden md:block text-border">•</span>
                <span className="font-sans text-foreground/60 text-sm uppercase tracking-widest">{exp.type}</span>
              </div>
              <p className="font-sans text-foreground/80 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
