import React from "react";
import { PichwaiLotus, PalaceArch } from "../Shared/PichwaiMotifs";

/**
 * ROYAL INVITATION CARD COMPONENT
 * Physical luxury handmade deckle-edge card emerging from the royal envelope,
 * featuring gold foil embossed filigree, Sanskrit invocation,
 * and Pinyon Script calligraphy.
 */
export function InvitationCard({ data, isExpanded = false }) {
  const { identity } = data;

  return (
    <div
      className="invitation-card-content relative w-full h-full p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between text-center select-none overflow-hidden rounded-[3px]"
      style={{
        backgroundColor: "#FAF7EE",
        backgroundImage: `
          radial-gradient(circle at 50% 20%, #FFFDF9 0%, #FAF6ED 55%, #F0E8D8 100%)
        `,
        border: "1.5px solid #C5A059",
        boxShadow:
          "0 16px 36px rgba(50, 6, 12, 0.28), 0 4px 10px rgba(0, 0, 0, 0.12), inset 0 0 28px rgba(197, 160, 89, 0.18)",
      }}
    >
      {/* 1. Subtle Handmade Cotton Fiber Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#C5A059 0.75px, transparent 0.75px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* 2. Outer Delicate Gold Beaded Border */}
      <div
        className="absolute inset-2 sm:inset-2.5 border border-[#C5A059]/45 pointer-events-none rounded-[2px]"
        style={{
          borderStyle: "dashed",
          borderWidth: "0.85px",
        }}
      />

      {/* 3. Inner Fine Gold Inset Frame with Deckle Edge Effect */}
      <div className="absolute inset-3 sm:inset-4 border border-[#C5A059]/75 pointer-events-none rounded-[1px]" />

      {/* 4. Ornate Royal Crimson & Gold Corner Filigree Accents */}
      <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#801B26] opacity-90" />
      <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#801B26] opacity-90" />
      <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#801B26] opacity-90" />
      <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#801B26] opacity-90" />

      {/* 5. Top Auspicious Invocation & Lotus Motif */}
      <div className="relative z-10 flex flex-col items-center pt-1 sm:pt-2">
        <span
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: "0.52rem",
            letterSpacing: "0.28em",
            color: "#801B26",
            fontWeight: 700,
            textShadow: "0 0.5px 1px rgba(128, 27, 38, 0.2)",
          }}
        >
          ॥ श्री गणेशाय नमः ॥
        </span>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="w-7 h-[0.5px] bg-[#C5A059]" />
          <PichwaiLotus size={24} color="#C5A059" animate={true} />
          <div className="w-7 h-[0.5px] bg-[#C5A059]" />
        </div>
        <span
          className="text-[0.44rem] sm:text-[0.48rem] uppercase tracking-[0.24em] text-[#A4313B] font-semibold mt-1"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          {identity.invitationHeadline || "REQUEST THE HONOUR OF YOUR PRESENCE"}
        </span>
      </div>

      {/* 6. Grand Couple Names in Royal Cursive Calligraphy */}
      <div className="relative z-10 my-auto py-1 flex flex-col items-center">
        <h1
          style={{
            fontFamily: "'Pinyon Script', 'Alex Brush', cursive",
            fontSize: "2.45rem",
            lineHeight: 1.05,
            color: "#801B26",
            fontWeight: 400,
            letterSpacing: "0.02em",
            textShadow: "0 1px 3px rgba(128, 27, 38, 0.2), 0 0 12px rgba(197, 160, 89, 0.15)",
            margin: 0,
          }}
        >
          {identity.coupleNames}
        </h1>
        {/* Royal Gold Divider Line with Diamond Center */}
        <div className="flex items-center justify-center gap-1.5 my-1.5 w-32">
          <div className="flex-1 h-[0.5px] bg-[#C5A059]" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#801B26] bg-[#E5C378]" />
          <div className="flex-1 h-[0.5px] bg-[#C5A059]" />
        </div>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.66rem",
            fontStyle: "italic",
            color: "#5C5652",
            letterSpacing: "0.08em",
          }}
        >
          To celebrate their holy union in eternal love
        </span>
      </div>

      {/* 7. Palace Arch, Date & Venue */}
      <div className="relative z-10 flex flex-col items-center pb-1 sm:pb-2">
        <PalaceArch width={78} height={26} color="#C5A059" />
        <p
          className="text-[0.54rem] sm:text-[0.58rem] uppercase tracking-[0.26em] text-[#801B26] font-bold mt-1"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          {identity.displayDate} · UDAIPUR
        </p>
        <p
          className="text-[0.42rem] sm:text-[0.46rem] text-[#7A7672] uppercase tracking-[0.18em] mt-0.5"
          style={{ fontFamily: "'Cinzel', Georgia, serif" }}
        >
          {identity.venueName}
        </p>
      </div>
    </div>
  );
}

export default InvitationCard;
