import React from "react";
import { motion } from "framer-motion";

/**
 * ROYAL WAX SEAL COMPONENT
 * Authentic molten Rajput royal seal with 3D embossed gold foil monogram,
 * metallic bevel ring, liquid gold edge highlights, and dynamic unseal particle physics.
 */
export function WaxSeal({ onClick, monogram = "A & A", isOpening = false }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={isOpening}
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="relative z-50 flex items-center justify-center cursor-pointer select-none focus:outline-none"
      style={{
        width: 86,
        height: 86,
        background: "transparent",
        border: "none",
        padding: 0,
      }}
      aria-label="Click royal wax seal to open wedding invitation"
    >
      {/* 1. Ambient Pulsing Gold Aura & Concentric Shockwaves on Idle */}
      {!isOpening && (
        <>
          <motion.div
            className="absolute inset-[-10px] rounded-full pointer-events-none"
            animate={{
              scale: [1, 1.22, 1],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(229, 195, 120, 0.5) 0%, rgba(197, 160, 89, 0.18) 45%, transparent 72%)",
              filter: "blur(6px)",
            }}
          />
          <motion.div
            className="absolute inset-[-4px] rounded-full pointer-events-none border border-[#E5C378]/40"
            animate={{
              scale: [0.95, 1.35, 1.5],
              opacity: [0.8, 0.2, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </>
      )}

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full filter drop-shadow-[0_12px_22px_rgba(70,8,14,0.55)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
      >
        <defs>
          {/* Deep Multi-stop Royal Crimson Wax Gradient */}
          <radialGradient id="waxCrimson" cx="32%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#C93242" />
            <stop offset="25%" stopColor="#9E1D2B" />
            <stop offset="55%" stopColor="#75121E" />
            <stop offset="85%" stopColor="#4D0811" />
            <stop offset="100%" stopColor="#2A0307" />
          </radialGradient>

          {/* Stamped Center Recess Gradient */}
          <radialGradient id="waxInnerRecess" cx="40%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#801622" />
            <stop offset="45%" stopColor="#5E0D17" />
            <stop offset="80%" stopColor="#43070E" />
            <stop offset="100%" stopColor="#250205" />
          </radialGradient>

          {/* Liquid Gold Foil Gradient */}
          <linearGradient id="liquidGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="20%" stopColor="#F5D78E" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="80%" stopColor="#966D24" />
            <stop offset="100%" stopColor="#F5D78E" />
          </linearGradient>

          {/* Radial Gold Foil Highlight for Embossed Monogram */}
          <radialGradient id="goldMonogram" cx="35%" cy="28%" r="72%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#FFF2D1" />
            <stop offset="55%" stopColor="#E5C378" />
            <stop offset="80%" stopColor="#B38A3A" />
            <stop offset="100%" stopColor="#6E4D12" />
          </radialGradient>

          {/* Rim Specular Light Flare */}
          <linearGradient id="rimSpecular" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="rgba(255, 230, 190, 0.45)" />
            <stop offset="50%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.55)" />
          </linearGradient>
        </defs>

        {/* 1. Organic Molten Wax Rim (Hand-poured royal seal contour) */}
        <path
          d="M50 3 C69 2 85 10 93 23 C101 36 99 54 94 69 C88 84 76 97 59 98 C42 99 26 94 14 82 C4 70 2 52 6 35 C10 19 28 4 50 3 Z"
          fill="url(#waxCrimson)"
        />

        {/* Specular lighting on rim */}
        <path
          d="M50 3 C69 2 85 10 93 23 C101 36 99 54 94 69 C88 84 76 97 59 98 C42 99 26 94 14 82 C4 70 2 52 6 35 C10 19 28 4 50 3 Z"
          fill="url(#rimSpecular)"
        />

        {/* 2. Molten Wax Drops & Natural Asymmetry */}
        <circle cx="88" cy="25" r="4.5" fill="#6A101C" opacity="0.9" />
        <circle cx="12" cy="72" r="5.6" fill="#4B080F" opacity="0.95" />
        <circle cx="73" cy="92" r="5.0" fill="#42060C" opacity="0.9" />
        <circle cx="31" cy="95" r="3.6" fill="#4B080F" opacity="0.85" />
        <circle cx="90" cy="63" r="4.0" fill="#5A0D18" opacity="0.8" />
        <circle cx="20" cy="22" r="3.2" fill="#781421" opacity="0.75" />

        {/* 3. Outer Stamped Bevel Highlight Ring */}
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="rgba(255, 235, 195, 0.28)"
          strokeWidth="1.4"
        />

        {/* 4. Deep Recessed Stamped Center Basin */}
        <circle
          cx="50"
          cy="50"
          r="31.5"
          fill="url(#waxInnerRecess)"
          stroke="rgba(0, 0, 0, 0.55)"
          strokeWidth="1.4"
        />

        {/* 5. Delicate Royal Gold Beaded Border Ring */}
        <circle
          cx="50"
          cy="50"
          r="28.8"
          fill="none"
          stroke="url(#liquidGold)"
          strokeWidth="1"
          strokeDasharray="1.8 1.8"
          opacity="0.9"
        />

        {/* 6. Royal Crown / Crest Above Monogram */}
        <g transform="translate(50, 29.5) scale(0.68)">
          {/* Crown Peak & Fleur-de-lis */}
          <path
            d="M -11 7 L -15 -4 L -6 1 L 0 -8 L 6 1 L 15 -4 L 11 7 Z"
            fill="url(#goldMonogram)"
            opacity="0.98"
          />
          {/* Crown Jewels */}
          <circle cx="-10" cy="9" r="1.3" fill="#FFFFFF" />
          <circle cx="0" cy="9" r="1.6" fill="#FFFFFF" />
          <circle cx="10" cy="9" r="1.3" fill="#FFFFFF" />
          <rect x="-12" y="8" width="24" height="1.8" rx="0.9" fill="url(#goldMonogram)" opacity="0.85" />
        </g>

        {/* 7. Stamped Initials / Monogram */}
        <text
          x="50"
          y="56.5"
          textAnchor="middle"
          fill="url(#goldMonogram)"
          fontFamily="'Cinzel', Georgia, serif"
          fontSize="16.5"
          fontWeight="700"
          letterSpacing="0.08em"
          style={{
            textShadow:
              "0 2px 4px rgba(0, 0, 0, 0.85), 0 -0.5px 1.5px rgba(255, 240, 200, 0.5)",
          }}
        >
          {monogram}
        </text>

        {/* 8. Royal Lotus / Star Flourish Below Monogram */}
        <g transform="translate(50, 66) scale(0.6)">
          <polygon points="0,-4 4,0 0,4 -4,0" fill="url(#goldMonogram)" />
          <path d="M -4 0 Q -11 -2 -15 -7 Q -13 2 -4 3.5" fill="url(#goldMonogram)" opacity="0.9" />
          <path d="M 4 0 Q 11 -2 15 -7 Q 13 2 4 3.5" fill="url(#goldMonogram)" opacity="0.9" />
          <circle cx="-17" cy="-8" r="1.2" fill="#FFFFFF" />
          <circle cx="17" cy="-8" r="1.2" fill="#FFFFFF" />
        </g>
      </svg>
    </motion.button>
  );
}

export default WaxSeal;
