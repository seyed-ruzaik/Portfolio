'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 200);
    const t2 = setTimeout(() => setStage(2), 1800);
    const t3 = setTimeout(() => setStage(3), 3500);
    const t4 = setTimeout(() => onComplete(), 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const customEase = [0.76, 0, 0.24, 1] as const;

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: customEase }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background border-b border-border overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-50" />
          
          <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
            <AnimatePresence mode="wait">
              {stage === 1 && (
                <motion.div
                  key="stage1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: customEase }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="overflow-hidden mb-8">
                    <motion.h1 
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, ease: customEase }}
                      className="text-5xl md:text-8xl font-display uppercase tracking-tight text-foreground text-center"
                    >
                      Seyed Ruzaik
                    </motion.h1>
                  </div>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: customEase }}
                    className="h-px bg-border w-full max-w-md mx-auto"
                  />
                </motion.div>
              )}

              {stage === 2 && (
                <motion.div
                  key="stage2"
                  className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                >
                  {["SOFTWARE ENGINEER", "LECTURER", "RESEARCHER"].map((role, i) => (
                    <div key={role} className="overflow-hidden">
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: customEase }}
                        className="text-lg md:text-2xl font-sans tracking-widest font-bold text-foreground"
                      >
                        {role}
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
