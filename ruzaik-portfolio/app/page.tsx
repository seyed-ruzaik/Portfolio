'use client';

import Navbar from '@/components/Navbar';
import SplashScreen from '@/components/SplashScreen';
import Hero from '@/components/Hero';
import Evolution from '@/components/Evolution';
import Experience from '@/components/Experience';
import TechUniverse from '@/components/TechUniverse';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import Education from '@/components/Education';
import Teaching from '@/components/Teaching';
import Contact from '@/components/Contact';
import { useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="min-h-screen relative selection:bg-accent/30 selection:text-white bg-background">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <Hero />
          <Evolution />
          <Experience />
          <TechUniverse />
          <Projects />
          <Research />
          <Publications />
          <Education />
          <Teaching />
          <Contact />
        </div>
      )}
    </main>
  );
}
