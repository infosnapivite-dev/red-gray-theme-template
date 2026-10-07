import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PichwaiLotus } from "../Shared/PichwaiMotifs";

/**
 * ROYAL PRELOADER COMPONENT
 * Botanical SVG drawing, auspicious Sanskrit invocation, royal monogram, and luxury gold progress.
 */
export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              onComplete?.();
            }, 500);
          }, 200);
          return 100;
        }
        // Snappy smooth non-linear increment
        const increment = Math.floor(Math.random() * 10) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 38);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center paper-texture select-none"
          style={{
            backgroundColor: "#FAF7EE",
            backgroundImage: "url(/assets/background.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Subtle Royal Inset Frame */}
          <div className="absolute inset-4 md:inset-6 border border-[#C5A059]/40 rounded-sm pointer-events-none" style={{ borderStyle: "dashed" }} />

          {/* Auspicious Invocation */}
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: "0.54rem",
              letterSpacing: "0.26em",
              color: "#801B26",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </motion.span>

          {/* Animated Botanical Lotus */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-4 relative"
          >
            <PichwaiLotus size={76} animate={true} color="#C5A059" />
          </motion.div>

          {/* Royal Monogram */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="royal-heading text-2xl text-[#801B26] tracking-[0.22em] mb-1 font-semibold"
          >
            A & A
          </motion.h2>

          {/* Editorial Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[0.48rem] uppercase tracking-[0.28em] text-[#7A7672] font-semibold mb-5"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            Preparing Your Royal Invitation
          </motion.p>

          {/* Gold Progress Bar */}
          <div className="w-40 h-[1.8px] bg-[#E5DFC9] relative overflow-hidden mb-2 rounded-full">
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#C5A059] via-[#FFE7A8] to-[#C5A059]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <span
            className="text-[0.46rem] tracking-[0.2em] text-[#9A783E] font-bold"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
