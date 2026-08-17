'use client';
import { motion } from 'motion/react';
import { cvData } from '@/lib/data';

export default function Education() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="education" className="border-b border-border bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: customEase }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-foreground mb-6 md:sticky md:top-32"
             >
                Academic<br/>Foundation
             </motion.h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">
            {cvData.education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: customEase }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-border/30 last:border-b-0 last:pb-0"
              >
                <div className="md:w-32 shrink-0">
                  <div className="font-sans font-bold text-accent tracking-widest text-sm uppercase">{edu.period}</div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display text-foreground mb-2">{edu.degree}</h3>
                  <div className="font-sans text-foreground/70 font-semibold mb-4">{edu.institution}</div>
                  <p className="text-foreground/80 font-sans leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: customEase }}
              className="mt-8 pt-12 border-t border-border"
            >
              <h3 className="font-sans font-bold tracking-widest uppercase text-foreground mb-8">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cvData.certifications.map(cert => (
                  <div key={cert.title} className="p-4 sm:p-6 border border-border bg-surface flex flex-col gap-1 hover:border-accent transition-colors">
                    <span className="font-display text-lg text-foreground">{cert.title}</span>
                    <span className="font-sans text-sm text-foreground/60">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
