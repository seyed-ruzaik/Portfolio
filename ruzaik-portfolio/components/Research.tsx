'use client';
import { motion } from 'motion/react';
import { Database, Network, BrainCircuit } from 'lucide-react';

export default function Research() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="research" className="border-b border-border bg-background overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-border p-4 sm:p-8 md:p-16 bg-surface flex flex-col justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="w-12 h-1 bg-accent mb-8" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-foreground mb-6 leading-none">
              Researching<br/>Intelligence
            </h2>
            <p className="text-foreground/70 font-sans text-lg">
              Exploring the intersection of Big Data Analytics, Natural Language Processing, and Machine Learning.
            </p>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 bg-border gap-px">
          <ResearchCard 
            icon={<Database strokeWidth={1.5} className="w-10 h-10 text-accent" />}
            title="Big Data Analytics"
            desc="Architecting data pipelines, processing large-scale datasets, and applying analytical models to extract meaning."
            delay={0}
          />
          <ResearchCard 
            icon={<BrainCircuit strokeWidth={1.5} className="w-10 h-10 text-accent" />}
            title="Natural Language Processing"
            desc="Developing systems utilizing classical ML and BERT embeddings for sentiment analysis and aspect-based classification."
            delay={0.1}
          />
          <ResearchCard 
            icon={<Network strokeWidth={1.5} className="w-10 h-10 text-accent" />}
            title="Machine Learning"
            desc="Implementing predictive models, full preprocessing pipelines, and robust performance evaluation frameworks."
            delay={0.2}
            className="md:col-span-2"
          />
        </div>

      </div>
    </section>
  );
}

function ResearchCard({ icon, title, desc, delay, className = "" }: { icon: React.ReactNode, title: string, desc: string, delay: number, className?: string }) {
  const customEase = [0.76, 0, 0.24, 1] as const;
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: customEase }}
      className={`bg-background p-4 sm:p-8 md:p-12 hover:bg-surface-hover transition-colors flex flex-col justify-between ${className}`}
    >
      <div className="mb-12">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-display text-foreground mb-4">{title}</h3>
        <p className="text-foreground/70 font-sans leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
