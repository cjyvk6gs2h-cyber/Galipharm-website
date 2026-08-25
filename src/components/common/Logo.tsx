import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  showText?: boolean;
  className?: string;
  variant?: 'emblem' | 'horizontal' | 'minimal';
  autoFlip?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
  variant = 'emblem',
  autoFlip = true,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sizeDimensions = {
    xs: { px: 36, text: 'text-sm' },
    sm: { px: 46, text: 'text-base' },
    md: { px: 62, text: 'text-lg' },
    lg: { px: 84, text: 'text-xl' },
    xl: { px: 114, text: 'text-2xl' },
    '2xl': { px: 154, text: 'text-3xl' },
    hero: { px: 220, text: 'text-4xl' },
  };

  const currentSize = sizeDimensions[size];

  const handleManualFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const logoGraphic = (
    <div
      style={{
        width: currentSize.px,
        height: currentSize.px,
        perspective: 1200,
      }}
      className="relative flex-shrink-0 flex items-center justify-center cursor-pointer select-none group"
      onClick={handleManualFlip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Logo 3D interactif - Cliquez pour flipper !"
    >
      {/* Electronic Cyber Halo with dynamic 3D depth */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/25 via-cyan-500/25 to-teal-400/25 blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 3D Flipping Electronic Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={
          autoFlip
            ? {
                rotateY: isFlipped ? [0, 180, 360, 540, 720] : isHovered ? [0, 180, 360] : [0, 360],
                rotateX: isHovered ? [0, 12, -12, 0] : 0,
                scale: isHovered ? 1.08 : 1,
              }
            : {
                rotateY: isFlipped ? 360 : isHovered ? 180 : 0,
                scale: isHovered ? 1.08 : 1,
              }
        }
        transition={
          autoFlip
            ? {
                rotateY: isHovered
                  ? { duration: 1.2, ease: 'easeInOut' }
                  : { duration: 7, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.5 },
                rotateX: { duration: 1.2, ease: 'easeInOut' },
                scale: { duration: 0.3 },
              }
            : {
                rotateY: { duration: 0.8, ease: 'backOut' },
                scale: { duration: 0.3 },
              }
        }
        whileTap={{ scale: 0.92, rotateY: isFlipped ? 720 : 360 }}
      >
        {/* PURE ELECTRONIC 3D REALISTIC VECTOR DRAWING - NO FRAME/BACKGROUND CONTAINER */}
        <svg
          viewBox="0 0 500 500"
          width="100%"
          height="100%"
          className="w-full h-full select-none overflow-visible filter drop-shadow-[0_10px_25px_rgba(6,182,212,0.35)] transition-all duration-300 group-hover:drop-shadow-[0_15px_35px_rgba(34,197,94,0.55)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Precise text paths for the two lateral GALIPHARM inscriptions */}
            <path id="leftArcText" d="M 108,370 A 188,188 0 0,1 108,130" fill="none" />
            <path id="rightArcText" d="M 392,130 A 188,188 0 0,1 392,370" fill="none" />

            {/* 3D Realistic Shader Gradients */}
            {/* Staff metallic gradient */}
            <linearGradient id="metallicStaff" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="35%" stopColor="#475569" />
              <stop offset="50%" stopColor="#64748B" />
              <stop offset="70%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Sphere 3D radial shine */}
            <radialGradient id="sphere3D" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="45%" stopColor="#334155" />
              <stop offset="85%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>

            {/* Green Serpent 3D Cylinder Shader */}
            <linearGradient id="greenSnake3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ADE80" />
              <stop offset="40%" stopColor="#22C55E" />
              <stop offset="75%" stopColor="#16A34A" />
              <stop offset="100%" stopColor="#14532D" />
            </linearGradient>

            {/* Cyan Serpent 3D Cylinder Shader */}
            <linearGradient id="cyanSnake3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="40%" stopColor="#06B6D4" />
              <stop offset="75%" stopColor="#0891B2" />
              <stop offset="100%" stopColor="#164E63" />
            </linearGradient>

            {/* 3D Orbital Swirl Ring Gradients */}
            <linearGradient id="swirlRingGradient" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="30%" stopColor="#475569" />
              <stop offset="60%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* 3D Capsule Left (Green) */}
            <linearGradient id="capsuleGreenBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ADE80" />
              <stop offset="35%" stopColor="#22C55E" />
              <stop offset="80%" stopColor="#15803D" />
              <stop offset="100%" stopColor="#14532D" />
            </linearGradient>
            <radialGradient id="capsuleGreenInside" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#14532D" />
              <stop offset="70%" stopColor="#166534" />
              <stop offset="100%" stopColor="#15803D" />
            </radialGradient>

            {/* 3D Capsule Right (Cyan) */}
            <linearGradient id="capsuleCyanBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="35%" stopColor="#06B6D4" />
              <stop offset="80%" stopColor="#0E7490" />
              <stop offset="100%" stopColor="#155E75" />
            </linearGradient>
            <radialGradient id="capsuleCyanInside" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#155E75" />
              <stop offset="70%" stopColor="#0E7490" />
              <stop offset="100%" stopColor="#0891B2" />
            </radialGradient>

            {/* Glow Filter for electronic nodes */}
            <filter id="electronicGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ========================================================= */}
          {/* 1. OUTER CIRCULAR EMBLEM FRAME & SEGMENTS                */}
          {/* ========================================================= */}
          <circle
            cx="250"
            cy="250"
            r="234"
            fill="none"
            stroke="#2B2B2B"
            strokeWidth="13"
          />

          {/* Accent Segments on Perimeter */}
          <path d="M 225,16 A 234,234 0 0,0 115,48" fill="none" stroke="#2B2B2B" strokeWidth="7" strokeLinecap="round" />
          <path d="M 385,48 A 234,234 0 0,0 275,16" fill="none" stroke="#2B2B2B" strokeWidth="7" strokeLinecap="round" />
          <path d="M 130,448 A 234,234 0 0,0 215,484" fill="none" stroke="#2B2B2B" strokeWidth="7" strokeLinecap="round" />
          <path d="M 285,484 A 234,234 0 0,0 370,448" fill="none" stroke="#2B2B2B" strokeWidth="7" strokeLinecap="round" />

          {/* ========================================================= */}
          {/* 2. THE TWO SIDE "• GALIPHARM •" TEXTS (LEFT & RIGHT ONLY) */}
          {/* ========================================================= */}
          <text
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontSize="33"
            fontWeight="900"
            fill="#2B2B2B"
            letterSpacing="6.5"
          >
            <textPath href="#leftArcText" startOffset="50%" textAnchor="middle">
              • GALIPHARM •
            </textPath>
          </text>
          <text
            fontFamily="'Montserrat', 'Arial Black', sans-serif"
            fontSize="33"
            fontWeight="900"
            fill="#2B2B2B"
            letterSpacing="6.5"
          >
            <textPath href="#rightArcText" startOffset="50%" textAnchor="middle">
              • GALIPHARM •
            </textPath>
          </text>

          {/* ========================================================= */}
          {/* 3. CENTRAL METALLIC STAFF OF ASCLEPIUS                   */}
          {/* ========================================================= */}
          {/* 3D Top Sphere with specular highlight */}
          <circle cx="250" cy="52" r="22" fill="url(#sphere3D)" />
          <circle cx="244" cy="46" r="6" fill="#FFFFFF" opacity="0.4" />
          {/* Vertical 3D Cylinder Staff */}
          <rect x="242" y="66" width="16" height="236" rx="8" fill="url(#metallicStaff)" />

          {/* ========================================================= */}
          {/* 4. DUAL 3D ENTWINED SERPENTS (GREEN & CYAN)               */}
          {/* ========================================================= */}
          {/* Green Serpent (Left Side Body & Head) */}
          <g>
            <path
              d="M 235,74 C 185,74 165,108 178,128 C 194,148 250,154 250,188 C 250,218 194,218 198,248 C 204,272 234,288 242,312 L 216,326 C 230,302 216,282 210,262 C 204,232 230,218 226,198 C 216,168 152,154 152,116 C 152,84 195,58 235,58 Z"
              fill="url(#greenSnake3D)"
            />
            {/* Green Head with 3D Specular curve */}
            <circle cx="218" cy="88" r="14" fill="url(#greenSnake3D)" />
            <circle cx="214" cy="84" r="4" fill="#86EFAC" opacity="0.6" />
          </g>

          {/* Cyan Serpent (Right Side Body & Head) */}
          <g>
            <path
              d="M 265,74 C 315,74 335,108 322,128 C 306,148 250,154 250,188 C 250,218 306,218 302,248 C 296,272 266,288 258,312 L 284,326 C 270,302 284,282 290,262 C 296,232 270,218 274,198 C 284,168 348,154 348,116 C 348,84 305,58 265,58 Z"
              fill="url(#cyanSnake3D)"
            />
            {/* Cyan Head with 3D Specular curve */}
            <circle cx="282" cy="88" r="14" fill="url(#cyanSnake3D)" />
            <circle cx="286" cy="84" r="4" fill="#7DD3FC" opacity="0.6" />
          </g>

          {/* ========================================================= */}
          {/* 5. 3D SUPERPOSED ORBITAL PERSPECTIVE SWIRL RINGS         */}
          {/* ========================================================= */}
          <g fill="none" stroke="url(#swirlRingGradient)" strokeLinecap="round">
            {/* Outer largest orbital ring */}
            <path
              d="M 125,248 C 125,215 190,190 270,192 C 345,195 385,222 375,250 C 365,276 300,294 225,290 C 160,286 130,268 140,248"
              strokeWidth="13"
            />
            {/* Middle orbital ring */}
            <path
              d="M 148,244 C 148,220 200,202 262,204 C 322,206 354,226 348,248 C 340,268 288,282 230,278 C 178,275 152,260 160,244"
              strokeWidth="10"
            />
            {/* Inner orbital ring */}
            <path
              d="M 172,240 C 172,224 212,212 255,214 C 298,216 322,230 318,246 C 312,260 275,270 232,268 C 195,265 176,252 182,240"
              strokeWidth="7.5"
            />
          </g>

          {/* ========================================================= */}
          {/* 6. ASCENDING 3D PHARMACEUTICAL PARTICLES & MICRO-ORBS    */}
          {/* ========================================================= */}
          <g filter="url(#electronicGlow)">
            <circle cx="250" cy="318" r="5" fill="#38BDF8" />
            <circle cx="238" cy="330" r="6" fill="#4ADE80" />
            <circle cx="258" cy="334" r="5" fill="#06B6D4" />
            <circle cx="232" cy="345" r="4.5" fill="#22C55E" />
            <circle cx="250" cy="348" r="7.5" fill="#0EA5E9" />
            <circle cx="268" cy="352" r="5.5" fill="#38BDF8" />
            <circle cx="224" cy="360" r="4" fill="#4ADE80" />
            <circle cx="242" cy="365" r="6" fill="#06B6D4" />
            <circle cx="260" cy="368" r="5" fill="#22C55E" />
            <circle cx="274" cy="362" r="5.5" fill="#0284C7" />
            <circle cx="250" cy="378" r="6.5" fill="#38BDF8" />
          </g>

          {/* ========================================================= */}
          {/* 7. OPEN 3D PHARMACEUTICAL CAPSULES (ANGLED HALVES)        */}
          {/* ========================================================= */}
          {/* Left Half: 3D Emerald Green Capsule */}
          <g transform="translate(192, 404) rotate(-42)">
            {/* Capsule Body */}
            <rect x="-34" y="-18" width="78" height="46" rx="23" fill="url(#capsuleGreenBody)" />
            {/* Inner Hollow Hole (3D Depth) */}
            <ellipse cx="42" cy="5" rx="12" ry="23" fill="url(#capsuleGreenInside)" />
            <ellipse cx="42" cy="5" rx="7" ry="17" fill="#052e16" />
            {/* 3D Specular lighting */}
            <path d="M -20,-10 L 20,-10" stroke="#86EFAC" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Right Half: 3D Cyan Blue Capsule */}
          <g transform="translate(308, 404) rotate(42)">
            {/* Capsule Body */}
            <rect x="-44" y="-18" width="78" height="46" rx="23" fill="url(#capsuleCyanBody)" />
            {/* Inner Hollow Hole (3D Depth) */}
            <ellipse cx="-42" cy="5" rx="12" ry="23" fill="url(#capsuleCyanInside)" />
            <ellipse cx="-42" cy="5" rx="7" ry="17" fill="#082f49" />
            {/* 3D Specular lighting */}
            <path d="M -20,-10 L 20,-10" stroke="#7DD3FC" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          </g>
        </svg>
      </motion.div>
    </div>
  );

  if (variant === 'horizontal' || showText) {
    return (
      <div className={`inline-flex items-center gap-4 group cursor-pointer ${className}`}>
        {logoGraphic}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className={`font-black tracking-tight font-['Montserrat'] leading-none text-slate-900 dark:text-white ${currentSize.text}`}>
              Gali<span className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">Pharm</span>
            </span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 animate-pulse">
              3D
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            CLUB DE PHARMACIE
          </span>
        </div>
      </div>
    );
  }

  return <div className={`inline-block group ${className}`}>{logoGraphic}</div>;
};
