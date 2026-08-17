'use client';
import { motion } from 'motion/react';
import { cvData } from '@/lib/data';

export default function TechUniverse() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="skills" className="border-b border-border bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-foreground mb-6">Tech<br/>Taxonomy</h2>
            <div className="w-12 h-1 bg-accent" />
          </div>
          <p className="font-sans text-foreground/70 max-w-md text-lg">
            A structured index of languages, frameworks, and infrastructure utilized across engineering and research domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {cvData.skillsUniverse.map((domain, i) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: customEase }}
              className="bg-surface p-4 sm:p-6 md:p-8 hover:bg-surface-hover transition-colors flex flex-col h-full border-r border-b border-border"
            >
              <h3 className="text-xl font-display text-foreground mb-6 pb-4 border-b border-border">
                {domain.domain}
              </h3>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-background border border-border text-sm font-sans font-medium text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
