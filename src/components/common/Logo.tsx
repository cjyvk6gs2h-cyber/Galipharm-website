import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  showText?: boolean;
  className?: string;
  variant?: 'emblem' | 'horizontal' | 'minimal';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
  variant = 'emblem',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sizeDimensions = {
    xs: { px: 28, text: 'text-sm' },
    sm: { px: 36, text: 'text-base' },
    md: { px: 48, text: 'text-lg' },
    lg: { px: 64, text: 'text-xl' },
    xl: { px: 84, text: 'text-2xl' },
    '2xl': { px: 120, text: 'text-3xl' },
    hero: { px: 200, text: 'text-4xl' },
  };

  const currentSize = sizeDimensions[size];
  const strokeColor = isDark ? '#E2E8F0' : '#1E293B';
  const ringColor = isDark ? '#334155' : '#475569';

  const svgContent = (
    <svg
      viewBox="0 0 500 500"
      width={currentSize.px}
      height={currentSize.px}
      className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GaliPharm Official Emblem"
    >
      <defs>
        <path id="leftArc" d="M 120,380 A 185,185 0 0,1 120,120" fill="none" />
        <path id="rightArc" d="M 380,120 A 185,185 0 0,1 380,380" fill="none" />
      </defs>

      {/* Outer Double Circular Ring Frame */}
      <circle cx="250" cy="250" r="235" fill="none" stroke={strokeColor} strokeWidth="12" />
      <circle cx="250" cy="250" r="208" fill="none" stroke={ringColor} strokeWidth="3" strokeDasharray="6 4" opacity="0.8" />

      {/* Circular Arc Typography: GALIPHARM */}
      <text
        fontFamily="'Montserrat', 'Arial Black', sans-serif"
        fontSize="34"
        fontWeight="900"
        fill={strokeColor}
        letterSpacing="7"
      >
        <textPath href="#leftArc" startOffset="50%" textAnchor="middle">
          • GALIPHARM •
        </textPath>
      </text>
      <text
        fontFamily="'Montserrat', 'Arial Black', sans-serif"
        fontSize="34"
        fontWeight="900"
        fill={strokeColor}
        letterSpacing="7"
      >
        <textPath href="#rightArc" startOffset="50%" textAnchor="middle">
          • GALIPHARM •
        </textPath>
      </text>

      {/* Central Staff of Asclepius */}
      <circle cx="250" cy="52" r="18" fill={strokeColor} />
      <rect x="243" y="66" width="14" height="230" rx="7" fill={strokeColor} />

      {/* Left Serpent (Pharmacy Green) */}
      <path
        d="M 235,75 C 190,75 170,105 180,125 C 192,145 250,150 250,185 C 250,215 200,215 205,245 C 210,270 240,285 245,310 L 220,320 C 235,300 220,280 215,260 C 210,230 235,215 230,195 C 220,165 160,150 160,115 C 160,85 195,60 235,60 Z"
        fill="#22C55E"
      />
      <circle cx="218" cy="85" r="3" fill="#FFFFFF" />

      {/* Right Serpent (Medical Cyan / Turquoise) */}
      <path
        d="M 265,75 C 310,75 330,105 320,125 C 308,145 250,150 250,185 C 250,215 300,215 295,245 C 290,270 260,285 255,310 L 280,320 C 265,300 280,280 285,260 C 290,230 265,215 270,195 C 280,165 340,150 340,115 C 340,85 305,60 265,60 Z"
        fill="#06B6D4"
      />
      <circle cx="282" cy="85" r="3" fill="#FFFFFF" />

      {/* Central Planetary / Molecular Orbital Rings */}
      <g fill="none" stroke={ringColor} strokeLinecap="round">
        <ellipse cx="250" cy="240" rx="75" ry="30" strokeWidth="6" transform="rotate(-15 250 240)" />
        <ellipse cx="250" cy="240" rx="98" ry="38" strokeWidth="7" transform="rotate(-15 250 240)" />
        <ellipse cx="250" cy="240" rx="120" ry="46" strokeWidth="8" transform="rotate(-15 250 240)" />
        <ellipse cx="250" cy="240" rx="142" ry="54" strokeWidth="9" transform="rotate(-15 250 240)" strokeDasharray="320 200" />
      </g>

      {/* Ascending Molecular Micro-Beads */}
      <g fill="#06B6D4">
        <circle cx="250" cy="320" r="5" />
        <circle cx="242" cy="332" r="6" />
        <circle cx="258" cy="336" r="4.5" />
        <circle cx="236" cy="346" r="4" />
        <circle cx="250" cy="350" r="7" />
        <circle cx="264" cy="352" r="5" />
        <circle cx="228" cy="362" r="3.5" />
        <circle cx="242" cy="366" r="6" />
        <circle cx="256" cy="368" r="4" />
        <circle cx="270" cy="364" r="5.5" />
        <circle cx="250" cy="378" r="6.5" />
      </g>

      {/* Open Capsule Half Left (Pharmacy Green) */}
      <g transform="translate(195, 400) rotate(-45)">
        <rect x="-30" y="-15" width="70" height="42" rx="21" fill="#22C55E" />
        <ellipse cx="38" cy="6" rx="12" ry="21" fill="#15803D" />
        <ellipse cx="38" cy="6" rx="8" ry="16" fill="#14532D" />
      </g>

      {/* Open Capsule Half Right (Cyan Blue) */}
      <g transform="translate(305, 400) rotate(45)">
        <rect x="-40" y="-15" width="70" height="42" rx="21" fill="#06B6D4" />
        <ellipse cx="-38" cy="6" rx="12" ry="21" fill="#0E7490" />
        <ellipse cx="-38" cy="6" rx="8" ry="16" fill="#164E63" />
      </g>
    </svg>
  );

  if (variant === 'horizontal' || showText) {
    return (
      <div className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}>
        {svgContent}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight font-['Montserrat'] leading-none text-slate-900 dark:text-white ${currentSize.text}`}>
              Gali<span className="text-emerald-500">Pharm</span>
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-1">
            CLUB DE PHARMACIE
          </span>
        </div>
      </div>
    );
  }

  return <div className={`inline-block group ${className}`}>{svgContent}</div>;
};
