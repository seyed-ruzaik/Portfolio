'use client';
import { motion } from 'motion/react';
import { cvData } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <section id="projects" className="bg-surface border-b border-border scroll-mt-24">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <div className="p-4 sm:p-8 md:p-16 border-b border-border">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-foreground"
          >
            Featured Case Studies
          </motion.h2>
        </div>

        <div className="grid grid-cols-1">
          {cvData.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof cvData.projects[0], index: number }) {
  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: customEase }}
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-border last:border-b-0 group"
    >
      <div className="lg:col-span-5 p-4 sm:p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between bg-surface-hover/50 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
        <div>
          <div className="font-sans text-xs font-bold tracking-widest uppercase mb-4 opacity-70">
            Client / Context
          </div>
          <div className="font-sans text-2xl md:text-3xl font-medium mb-8">
            {project.company}
          </div>
        </div>
        <div>
          <div className="font-sans text-xs font-bold tracking-widest uppercase mb-2 opacity-70">Role</div>
          <div className="font-display text-xl">{project.role}</div>
        </div>
      </div>
      
      <div className="lg:col-span-7 p-4 sm:p-8 md:p-16 bg-background">
        <h3 className="text-3xl md:text-5xl font-display text-foreground mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-foreground/80 font-sans text-lg leading-relaxed mb-8 max-w-2xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-surface border border-border text-foreground text-xs font-sans font-bold uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
