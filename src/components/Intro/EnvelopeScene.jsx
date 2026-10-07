import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WaxSeal } from "./WaxSeal";
import { InvitationCard } from "./InvitationCard";
import { PichwaiLotus, PalaceArch } from "../Shared/PichwaiMotifs";
import { playUnsealSound, ambientSound } from "../../audio/ambientSoundscape";

const luxuryEase = [0.19, 1, 0.22, 1];

// Ambient floating golden aura specks
const GLOW_ORBS = [
  { id: 1, x: "10%", y: "22%", size: 3.5, delay: 0, duration: 4.5 },
  { id: 2, x: "88%", y: "30%", size: 4.2, delay: 0.7, duration: 5.2 },
  { id: 3, x: "20%", y: "78%", size: 3.0, delay: 1.2, duration: 4.8 },
  { id: 4, x: "82%", y: "85%", size: 3.8, delay: 0.3, duration: 5.4 },
  { id: 5, x: "48%", y: "12%", size: 3.2, delay: 1.6, duration: 4.6 },
  { id: 6, x: "6%", y: "58%", size: 2.8, delay: 2.0, duration: 5.0 },
  { id: 7, x: "94%", y: "65%", size: 3.0, delay: 0.9, duration: 4.3 },
];

/**
 * BESPOKE ROYAL RAJPUT COUTURE ENVELOPE SCENE
 * Features authentic Mewari scalloped arch flap kinematics, shimmering gold damask lining,
 * embossed velvet textures, silk belly band, synthesized acoustic unseal audio,
 * and a majestic rising invitation card sequence.
 */
export function EnvelopeScene({ data, onOpenComplete }) {
  // Stage state:
  // 0 = idle (sealed envelope floating with pulsing gold aura)
  // 1 = unseal initiated / seal fractures / flap folds open in 3D
  // 2 = card glides up out of the gold-lined pocket
  // 3 = card blooms into full screen and transitions to Home
  const [stage, setStage] = useState(0);

  const handleOpenEnvelope = () => {
    if (stage > 0) return;

    // 1. Play crystal chime + paper unseal sound effect
    playUnsealSound();

    // 2. Start gentle ambient soundscape
    try {
      ambientSound.start();
    } catch {}

    setStage(1); // Flap unfolds in 3D

    // Step 2: Rising invitation card emerges
    setTimeout(() => {
      setStage(2);
    }, 1100);

    // Step 3: Card expands, envelope fades into home view
    setTimeout(() => {
      setStage(3);
    }, 2500);

    // Complete transition to Home view
    setTimeout(() => {
      onOpenComplete?.();
    }, 3400);
  };

  return (
    <div
      className="absolute inset-0 z-40 flex flex-col items-center justify-between overflow-hidden select-none"
      style={{
        backgroundColor: "#E6E5DE",
        backgroundImage: "url(/assets/background.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        paddingTop: "38px",
        paddingBottom: "22px",
        paddingLeft: "16px",
        paddingRight: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* ====================================================================
          BACKGROUND ORNAMENTS & AMBIENT ROYAL GLOW
          ==================================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Floating Golden Dust Particles */}
        {GLOW_ORBS.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              backgroundColor: "#FFE7A8",
              boxShadow: "0 0 10px #FFF2D1, 0 0 16px rgba(229, 195, 120, 0.7)",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.25, 0.9, 0.25],
              scale: [0.8, 1.35, 0.8],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Top Pearl Arch */}
        <div
          style={{
            position: "absolute",
            top: "-255px",
            left: "-30px",
            transform: "rotate(2deg)",
            opacity: 0.94,
          }}
        >
          <img
            src="/assets/pearl_clean.png"
            alt=""
            style={{ width: "340px", height: "auto", display: "block" }}
            draggable="false"
          />
        </div>

        {/* Top-Right Floral Bouquet */}
        <div
          style={{
            position: "absolute",
            top: "-52px",
            right: "-65px",
            transform: "rotate(335deg)",
            opacity: 0.9,
          }}
        >
          <img
            src="/assets/flower_clean.png"
            alt=""
            style={{ width: "160px", height: "auto", display: "block" }}
            draggable="false"
          />
        </div>

        {/* Bottom-Left Floral Blossom */}
        <div
          style={{
            position: "absolute",
            bottom: "-115px",
            left: "-125px",
            transform: "rotate(25deg)",
            opacity: 0.9,
          }}
        >
          <img
            src="/assets/flower_clean.png"
            alt=""
            style={{ width: "215px", height: "auto", display: "block" }}
            draggable="false"
          />
        </div>

        {/* Bottom-Right Pearl Garland */}
        <div
          style={{
            position: "absolute",
            bottom: "-12px",
            right: "-35px",
            transform: "rotate(16deg)",
            opacity: 0.92,
          }}
        >
          <img
            src="/assets/pearl_clean.png"
            alt=""
            style={{ width: "230px", height: "auto", display: "block" }}
            draggable="false"
          />
        </div>
      </div>

      {/* ====================================================================
          1. TOP INVOCATION & ROYAL CALLIGRAPHIC TITLE
          ==================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: stage >= 3 ? 0 : 1, y: 0 }}
        transition={{ duration: 0.7, ease: luxuryEase }}
        className="relative z-10 flex flex-col items-center text-center mt-1"
      >
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-8 h-[0.5px] bg-[#C5A059]" />
          <span
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              color: "#801B26",
              fontWeight: 700,
              textShadow: "0 0.5px 1px rgba(128, 27, 38, 0.18)",
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </span>
          <div className="w-8 h-[0.5px] bg-[#C5A059]" />
        </div>

        <h2
          style={{
            fontFamily: "'Pinyon Script', 'Alex Brush', cursive",
            fontSize: "2.4rem",
            lineHeight: 1.05,
            color: "#801B26",
            fontWeight: 400,
            letterSpacing: "0.02em",
            textShadow: "0 1px 3px rgba(128, 27, 38, 0.18)",
            margin: "2px 0 0 0",
          }}
        >
          The Royal Invitation
        </h2>

        <p
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: "0.48rem",
            fontWeight: 700,
            letterSpacing: "0.26em",
            color: "#A4313B",
            margin: "1px 0 0 0",
            textTransform: "uppercase",
          }}
        >
          {data.identity.city || "Udaipur, Rajasthan"} · 2026
        </p>
      </motion.div>

      {/* ====================================================================
          2. THE COUTURE MEWARI ENVELOPE (3D MECHANICAL CONTAINER)
          ==================================================================== */}
      <motion.div
        className="relative my-auto z-20"
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        animate={
          stage === 3
            ? { opacity: 0, scale: 1.1, pointerEvents: "none" }
            : stage === 0
            ? {
                opacity: 1,
                y: [0, -6, 0],
                rotateZ: [-0.3, 0.3, -0.3],
                scale: 1,
                transition: {
                  y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.8 },
                },
              }
            : { opacity: 1, y: 0, rotateZ: 0, scale: 1 }
        }
        transition={{ duration: 0.85, ease: luxuryEase }}
        style={{
          perspective: 1400,
          width: "min(92vw, 360px)",
          height: "min(62vw, 245px)",
        }}
      >
        {/* ENVELOPE 3D CHASSIS */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            filter: "drop-shadow(0 26px 45px rgba(55, 6, 14, 0.48)) drop-shadow(0 10px 18px rgba(0,0,0,0.22))",
          }}
        >

          {/* ==================================================================
              LAYER 1: ENVELOPE BACK CASING & GOLD FOIL PICHWAI LINER
              ================================================================== */}
          <div
            className="absolute inset-0 rounded-[6px] overflow-hidden"
            style={{
              zIndex: 10,
              backgroundColor: "#3B050B",
              border: "1px solid rgba(197, 160, 89, 0.6)",
              boxShadow: "inset 0 0 40px rgba(0,0,0,0.75)",
            }}
          >
            {/* Gleaming Antique Gold Foil Damask Pattern */}
            <div
              className="w-full h-full relative"
              style={{
                backgroundColor: "#2E0307",
                backgroundImage: `
                  radial-gradient(#FFE7A8 1.4px, transparent 1.4px),
                  radial-gradient(#C5A059 0.9px, transparent 0.9px)
                `,
                backgroundSize: "16px 16px, 8px 8px",
                backgroundPosition: "0 0, 4px 4px",
              }}
            >
              {/* Gold Inset Framing on Liner */}
              <div
                className="absolute inset-2.5 border border-[#FFE7A8]/45 rounded-sm pointer-events-none"
                style={{ borderStyle: "dashed" }}
              />
              <div className="absolute inset-4 border border-[#C5A059]/30 rounded-sm pointer-events-none" />

              {/* Watermark Pichwai Lotus in Liner */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <PichwaiLotus size={88} color="#FFE7A8" />
              </div>
            </div>
          </div>

          {/* ==================================================================
              LAYER 2: ROYAL INVITATION CARD (Sliding smoothly out of pocket)
              ================================================================== */}
          <motion.div
            layoutId="invitation-surface"
            className="absolute rounded-[4px] overflow-hidden"
            initial={{ y: "2%", scale: 0.94 }}
            animate={
              stage >= 2
                ? {
                    y: stage === 3 ? "-10%" : "-60%",
                    scale: stage === 3 ? 1.08 : 1.02,
                    zIndex: 35, // Elevates in front of pocket once rising
                  }
                : { y: "2%", scale: 0.94, zIndex: 20 }
            }
            transition={{
              duration: 1.25,
              ease: luxuryEase,
            }}
            style={{
              width: "92%",
              height: "90%",
              left: "4%",
              top: "5%",
              boxShadow:
                stage >= 2
                  ? "0 32px 64px rgba(35, 3, 7, 0.5), 0 10px 20px rgba(0,0,0,0.25)"
                  : "none",
            }}
          >
            <InvitationCard data={data} isExpanded={stage === 3} />
          </motion.div>

          {/* ==================================================================
              LAYER 3: SOLID LOWER & SIDE POCKET FLAPS (100% Solid Envelope Seal)
              ================================================================== */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[6px]"
            style={{ zIndex: 30 }}
          >
            <svg
              viewBox="0 0 360 245"
              className="w-full h-full filter drop-shadow-[0_-2px_6px_rgba(0,0,0,0.22)]"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Velvet Darker Gradients for Side Folds */}
                <linearGradient id="pocketLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#550D15" />
                  <stop offset="60%" stopColor="#6C121D" />
                  <stop offset="100%" stopColor="#7E1824" />
                </linearGradient>

                <linearGradient id="pocketRight" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#550D15" />
                  <stop offset="60%" stopColor="#6C121D" />
                  <stop offset="100%" stopColor="#7E1824" />
                </linearGradient>

                {/* Velvet Crimson Shading for Bottom Fold */}
                <linearGradient id="pocketBottom" x1="50%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#8A1B27" />
                  <stop offset="45%" stopColor="#781520" />
                  <stop offset="100%" stopColor="#580D16" />
                </linearGradient>

                {/* Shimmering Gold Foil Edge */}
                <linearGradient id="pocketGoldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4" />
                  <stop offset="30%" stopColor="#FFF2D1" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#E5C378" stopOpacity="1" />
                  <stop offset="70%" stopColor="#FFF2D1" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#C5A059" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* 1. Left Wing Fold (Full Left Edge 0,0 to 0,245) */}
              <polygon
                points="0,0 180,126 0,245"
                fill="url(#pocketLeft)"
                stroke="rgba(197, 160, 89, 0.35)"
                strokeWidth="0.7"
              />

              {/* 2. Right Wing Fold (Full Right Edge 360,0 to 360,245) */}
              <polygon
                points="360,0 180,126 360,245"
                fill="url(#pocketRight)"
                stroke="rgba(197, 160, 89, 0.35)"
                strokeWidth="0.7"
              />

              {/* 3. Bottom Front Fold (Full Base 0,245 to 360,245 up to 180,112) */}
              <polygon
                points="0,245 180,112 360,245"
                fill="url(#pocketBottom)"
                stroke="rgba(197, 160, 89, 0.45)"
                strokeWidth="0.8"
              />

              {/* Gold Filigree Seam Line on Bottom Flap */}
              <path
                d="M 0,245 L 180,112 L 360,245"
                stroke="url(#pocketGoldTrim)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Inner Dashed Gold Stitched Accent on Bottom Flap */}
              <path
                d="M 12,236 L 180,120 L 348,236"
                stroke="#FFE7A8"
                strokeWidth="0.8"
                strokeDasharray="3 2"
                fill="none"
                opacity="0.75"
              />

              {/* Auspicious Sanskrit Blessing on Pocket */}
              <text
                x="180"
                y="190"
                textAnchor="middle"
                fill="#FFE7A8"
                fontFamily="'Cinzel', serif"
                fontSize="8"
                fontWeight="700"
                letterSpacing="0.28em"
                opacity="0.9"
              >
                ॥ शुभ विवाह ॥
              </text>

              <text
                x="180"
                y="205"
                textAnchor="middle"
                fill="#F7DF9B"
                fontFamily="'Cinzel', serif"
                fontSize="5.8"
                fontWeight="600"
                letterSpacing="0.22em"
                opacity="0.8"
              >
                ROYAL WEDDING INVITATION
              </text>

              {/* Vintage Royal Postmark Stamp on Bottom Right */}
              <g transform="translate(305, 196) rotate(-10) scale(0.62)">
                <circle cx="0" cy="0" r="30" fill="none" stroke="#FFE7A8" strokeWidth="1" strokeDasharray="3 1.5" opacity="0.65" />
                <circle cx="0" cy="0" r="26" fill="none" stroke="#FFE7A8" strokeWidth="0.75" opacity="0.5" />
                <text x="0" y="-10" textAnchor="middle" fill="#FFE7A8" fontFamily="'Cinzel', serif" fontSize="6.5" fontWeight="700" letterSpacing="0.18em" opacity="0.85">ROYAL MAIL</text>
                <text x="0" y="3" textAnchor="middle" fill="#FFE7A8" fontFamily="'Cinzel', serif" fontSize="7" fontWeight="700" letterSpacing="0.14em" opacity="0.9">UDAIPUR</text>
                <text x="0" y="15" textAnchor="middle" fill="#FFE7A8" fontFamily="'Cinzel', serif" fontSize="6" fontWeight="600" letterSpacing="0.22em" opacity="0.75">2026</text>
              </g>
            </svg>
          </div>

          {/* ==================================================================
              LAYER 4: 3D TOP FLAP & WAX MEDALLION SEAL (Full Coverage, Zero Gap)
              ================================================================== */}
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{
              height: "60%",
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
              zIndex: stage >= 1 ? 15 : 40, // Falls behind the rising card once unfolded
            }}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: stage >= 1 ? 176 : 0 }}
            transition={{ duration: 1.15, ease: luxuryEase }}
          >
            {/* 4A. FRONT FACE OF FLAP (Crimson Velvet with Full Coverage Flap) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <svg
                viewBox="0 0 360 148"
                className="w-full h-full filter drop-shadow-[0_14px_22px_rgba(45,5,11,0.55)]"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="flapVelvet" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#550C14" />
                    <stop offset="35%" stopColor="#75131F" />
                    <stop offset="75%" stopColor="#8E1C29" />
                    <stop offset="100%" stopColor="#A02230" />
                  </linearGradient>

                  <linearGradient id="flapGoldRidge" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#FFF2D1" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#C5A059" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Full Coverage Flap Polygon (Covers 0,0 to 360,0 down to 180,146) */}
                <polygon
                  points="0,0 180,146 360,0"
                  fill="url(#flapVelvet)"
                  stroke="rgba(197, 160, 89, 0.6)"
                  strokeWidth="1"
                />

                {/* Outer Gold Hairline Ridge */}
                <path
                  d="M 0,0 L 180,146 L 360,0"
                  stroke="url(#flapGoldRidge)"
                  strokeWidth="1.4"
                  fill="none"
                />

                {/* Inner Dashed Gold Stitched Line */}
                <path
                  d="M 18,0 L 180,132 L 342,0"
                  stroke="#FFE7A8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                  fill="none"
                  opacity="0.8"
                />

                {/* Subtle Palace Arch Emblem on Flap */}
                <g transform="translate(180, 52) scale(0.48)" opacity="0.45">
                  <PalaceArch width={60} height={20} color="#FFE7A8" />
                </g>
              </svg>

              {/* ROYAL WAX SEAL (Centered at the apex of the flap) */}
              <div
                className="absolute left-1/2 pointer-events-auto"
                style={{
                  top: "146px",
                  transform: "translate(-50%, -50%)",
                  zIndex: 50,
                }}
              >
                <motion.div
                  animate={
                    stage >= 1
                      ? { opacity: 0, scale: 1.45, filter: "blur(6px)" }
                      : { opacity: 1, scale: 1, filter: "blur(0px)" }
                  }
                  transition={{ duration: 0.45 }}
                >
                  <WaxSeal
                    onClick={handleOpenEnvelope}
                    monogram={data.intro.sealMonogram || "A & A"}
                    isOpening={stage > 0}
                  />
                </motion.div>

                {/* Golden Particle Shockwave on Unseal */}
                {stage === 1 && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none flex items-center justify-center"
                    initial={{ scale: 0.3, opacity: 1 }}
                    animate={{ scale: 2.6, opacity: 0 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                  >
                    <div className="w-22 h-22 rounded-full border-2 border-[#FFE7A8] bg-radial from-[#FFE7A8]/70 via-[#E5C378]/35 to-transparent shadow-[0_0_30px_#FFE7A8]" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* 4B. BACK FACE OF FLAP (Revealed as flap flips backward: Rich Gold Foil Damask Lining) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <svg
                viewBox="0 0 360 148"
                className="w-full h-full filter drop-shadow-[0_-8px_16px_rgba(0,0,0,0.4)]"
                preserveAspectRatio="none"
              >
                <defs>
                  <radialGradient id="flapLinerGold" cx="50%" cy="50%" r="65%">
                    <stop offset="0%" stopColor="#FFF2D1" />
                    <stop offset="35%" stopColor="#E5C378" />
                    <stop offset="75%" stopColor="#C5A059" />
                    <stop offset="100%" stopColor="#8A651E" />
                  </radialGradient>
                </defs>

                {/* Gold Liner Triangle */}
                <polygon
                  points="0,0 180,146 360,0"
                  fill="url(#flapLinerGold)"
                  stroke="#FFF2D1"
                  strokeWidth="0.9"
                />

                {/* Inner Damask Floral Pattern */}
                <path
                  d="M 18,0 L 180,132 L 342,0"
                  stroke="#5A0D15"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ====================================================================
          3. BOTTOM INTERACTIVE CALL-TO-ACTION BUTTON & INSTRUCTION
          ==================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{
          opacity: stage === 0 ? 1 : 0,
          y: stage === 0 ? [0, -4, 0] : 14,
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.35 },
          y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-30 flex flex-col items-center cursor-pointer mb-1"
        onClick={handleOpenEnvelope}
      >
        <div
          className="luxury-btn flex items-center justify-center gap-2"
          style={{
            padding: "8px 24px",
            fontSize: "0.56rem",
            letterSpacing: "0.24em",
            color: "#801B26",
            borderColor: "rgba(128, 27, 38, 0.45)",
            background: "rgba(255, 255, 255, 0.95)",
            boxShadow: "0 6px 18px rgba(128, 27, 38, 0.18)",
            cursor: "pointer",
            textTransform: "uppercase",
            borderRadius: "3px",
            backdropFilter: "blur(6px)",
          }}
        >
          <span className="text-[#C5A059]">✦</span>
          <span className="font-bold">{data.intro.ctaText || "CLICK WAX SEAL TO OPEN"}</span>
          <span className="text-[#C5A059]">✦</span>
        </div>

        <p
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: "0.50rem",
            letterSpacing: "0.16em",
            color: "#6E6864",
            margin: "6px 0 0 0",
            textTransform: "uppercase",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {data.intro.instruction || "Tap the royal wax seal to unveil your personal invitation"}
        </p>
      </motion.div>
    </div>
  );
}

export default EnvelopeScene;
