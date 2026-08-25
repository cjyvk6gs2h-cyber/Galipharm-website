import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface FloatingElement {
  type: 'formula' | 'benzene' | 'dna' | 'capsule' | 'tablet' | 'caduceus' | 'flask' | 'cross' | 'atom';
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vRot: number;
  opacity: number;
  text?: string;
  colorType: 'emerald' | 'cyan' | 'teal' | 'indigo' | 'amber';
}

export const ScientificBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const formulas = [
      'C₈H₉NO₂ (Paracétamol)',
      'C₉H₈O₄ (Aspirine)',
      'C₁₆H₁₉N₃O₅S (Amoxicilline)',
      'C₂₂H₂₄N₂O₈ (Doxycycline)',
      'C₁₇H₂₁NO₄ (Morphine)',
      'pH = -log[H⁺]',
      'pKa + pKb = 14',
      'ΔG° = -RT ln(K)',
      'IC₅₀ • Cmax / Tmax',
      'AUC • Vd • t½',
      'Kd = [P][L] / [PL]',
      'C₂₁H₃₀O₂',
      'C₈H₁₀N₄O₂ (Caféine)',
      'R-OH + R\'-COOH ⇌ Ester',
      'Cl = Dose / AUC',
      'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
      'C₂₀H₂₄N₂O₂ (Quinine)',
    ];

    const elementTypes: FloatingElement['type'][] = [
      'formula', 'benzene', 'dna', 'capsule', 'tablet', 'caduceus', 'flask', 'cross', 'atom',
      'formula', 'benzene', 'capsule', 'tablet', 'dna', 'cross', 'benzene', 'formula', 'caduceus', 'flask'
    ];

    // High-visibility density
    const elementCount = Math.min(56, Math.max(28, Math.floor((width * height) / 28000)));
    const elements: FloatingElement[] = [];

    for (let i = 0; i < elementCount; i++) {
      const type = elementTypes[i % elementTypes.length];
      const colorTypes: FloatingElement['colorType'][] = ['emerald', 'cyan', 'teal', 'indigo', 'amber'];
      elements.push({
        type,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.08 : 0.42),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.08 : 0.42),
        size: type === 'dna' ? 32 : type === 'formula' ? 17 : type === 'benzene' ? 28 : type === 'capsule' ? 24 : 22,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.012,
        // High opacity for clear visibility
        opacity: Math.random() * 0.35 + 0.45,
        text: type === 'formula' ? formulas[Math.floor(Math.random() * formulas.length)] : undefined,
        colorType: colorTypes[i % colorTypes.length],
      });
    }

    // Molecular bond connection nodes
    const nodeCount = Math.min(42, Math.floor(width / 35));
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.5 + 1.8,
      });
    }

    // High-contrast, vibrant colors tailored for both dark & light modes
    const getColor = (colorType: FloatingElement['colorType'], alpha: number) => {
      if (isDark) {
        switch (colorType) {
          case 'emerald': return `rgba(52, 211, 153, ${Math.min(1, alpha * 1.1)})`; // Bright neon emerald
          case 'cyan': return `rgba(56, 189, 248, ${Math.min(1, alpha * 1.15)})`; // Bright sky cyan
          case 'teal': return `rgba(45, 212, 191, ${Math.min(1, alpha * 1.1)})`; // Mint teal
          case 'indigo': return `rgba(167, 139, 250, ${Math.min(1, alpha * 1.05)})`; // Violet accent
          case 'amber': return `rgba(251, 191, 36, ${Math.min(1, alpha * 1.05)})`; // Golden amber
          default: return `rgba(203, 213, 225, ${alpha})`;
        }
      } else {
        // Light mode: High saturation dark teal/emerald/cyan for deep readability on white/light gray
        switch (colorType) {
          case 'emerald': return `rgba(5, 150, 105, ${Math.min(1, alpha * 1.25)})`; // Rich emerald green
          case 'cyan': return `rgba(2, 132, 199, ${Math.min(1, alpha * 1.25)})`; // Rich medical cyan
          case 'teal': return `rgba(13, 148, 136, ${Math.min(1, alpha * 1.25)})`; // Deep teal
          case 'indigo': return `rgba(109, 40, 217, ${Math.min(1, alpha * 1.2)})`; // Deep violet
          case 'amber': return `rgba(217, 119, 6, ${Math.min(1, alpha * 1.2)})`; // Deep amber
          default: return `rgba(30, 41, 59, ${alpha * 1.2})`;
        }
      }
    };

    const drawBenzene = (ctx: CanvasRenderingContext2D, size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      const r = size;
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Inner aromatic resonance circle
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2);
      ctx.stroke();

      // Functional branches
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(r + 10, -5);
      ctx.moveTo(-r, 0);
      ctx.lineTo(-r - 10, 5);
      ctx.stroke();

      // Mini chemical group tags
      ctx.font = 'bold 11px "Space Grotesk", monospace';
      ctx.fillStyle = color;
      ctx.fillText('OH', r + 11, -3);
      ctx.fillText('NH₂', -r - 28, 8);
    };

    const drawDNA = (ctx: CanvasRenderingContext2D, size: number, color1: string, color2: string) => {
      ctx.lineWidth = 2.0;
      const length = size * 2.2;
      const steps = 8;
      const stepDist = length / steps;

      for (let i = 0; i < steps; i++) {
        const y = -length / 2 + i * stepDist;
        const xOffset = Math.sin(i * 0.85) * 14;

        // Base pair link
        ctx.strokeStyle = color1;
        ctx.beginPath();
        ctx.moveTo(-xOffset, y);
        ctx.lineTo(xOffset, y);
        ctx.stroke();

        // Left base node
        ctx.fillStyle = color1;
        ctx.beginPath();
        ctx.arc(-xOffset, y, 3.2, 0, Math.PI * 2);
        ctx.fill();

        // Right base node
        ctx.fillStyle = color2;
        ctx.beginPath();
        ctx.arc(xOffset, y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCapsule = (ctx: CanvasRenderingContext2D, size: number, color1: string, color2: string) => {
      const w = size * 1.8;
      const h = size * 0.9;
      const r = h / 2;

      ctx.lineWidth = 2.0;

      // Left half
      ctx.strokeStyle = color1;
      ctx.fillStyle = color1.replace(/[\d.]+\)$/, isDark ? '0.22)' : '0.15)');
      ctx.beginPath();
      ctx.arc(-w / 4, 0, r, Math.PI / 2, (Math.PI * 3) / 2);
      ctx.lineTo(0, -r);
      ctx.lineTo(0, r);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Right half
      ctx.strokeStyle = color2;
      ctx.fillStyle = color2.replace(/[\d.]+\)$/, isDark ? '0.22)' : '0.15)');
      ctx.beginPath();
      ctx.arc(w / 4, 0, r, -Math.PI / 2, Math.PI / 2);
      ctx.lineTo(0, r);
      ctx.lineTo(0, -r);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Center division seam
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(15,23,42,0.6)';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.lineTo(0, r);
      ctx.stroke();

      // Micro beads inside right capsule
      ctx.fillStyle = color2;
      ctx.beginPath();
      ctx.arc(w / 4 - 3, -2, 1.8, 0, Math.PI * 2);
      ctx.arc(w / 4 + 4, 2, 1.8, 0, Math.PI * 2);
      ctx.arc(w / 4 - 1, 3, 1.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawTablet = (ctx: CanvasRenderingContext2D, size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.0;
      ctx.fillStyle = color.replace(/[\d.]+\)$/, isDark ? '0.18)' : '0.12)');

      // Outer tablet circle
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.85, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Score line across middle
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(-size * 0.85, 0);
      ctx.lineTo(size * 0.85, 0);
      ctx.stroke();

      // Debossed pharmacy impression dots
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, -size * 0.42, 2.2, 0, Math.PI * 2);
      ctx.arc(0, size * 0.42, 2.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawPharmacyCross = (ctx: CanvasRenderingContext2D, size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.fillStyle = color.replace(/[\d.]+\)$/, isDark ? '0.20)' : '0.14)');
      ctx.lineWidth = 2.2;
      const s = size * 0.8;
      const t = s * 0.38;

      ctx.beginPath();
      ctx.moveTo(-t, -s);
      ctx.lineTo(t, -s);
      ctx.lineTo(t, -t);
      ctx.lineTo(s, -t);
      ctx.lineTo(s, t);
      ctx.lineTo(t, t);
      ctx.lineTo(t, s);
      ctx.lineTo(-t, s);
      ctx.lineTo(-t, t);
      ctx.lineTo(-s, t);
      ctx.lineTo(-s, -t);
      ctx.lineTo(-t, -t);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };

    const drawCaduceusStaff = (ctx: CanvasRenderingContext2D, size: number, color1: string, color2: string) => {
      ctx.strokeStyle = color1;
      ctx.lineWidth = 2.2;

      // Vertical rod of Asclepius
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(0, size);
      ctx.stroke();

      // Top round knob
      ctx.fillStyle = color1;
      ctx.beginPath();
      ctx.arc(0, -size, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Entwined serpent helix
      ctx.strokeStyle = color2;
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      const points = 14;
      for (let i = 0; i <= points; i++) {
        const y = -size + (i * (size * 2)) / points;
        const x = Math.sin(i * 0.9) * (size * 0.42);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const drawFlask = (ctx: CanvasRenderingContext2D, size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.fillStyle = color.replace(/[\d.]+\)$/, isDark ? '0.22)' : '0.16)');
      ctx.lineWidth = 2.0;

      // Erlenmeyer flask body
      ctx.beginPath();
      ctx.moveTo(-size * 0.25, -size * 0.85);
      ctx.lineTo(size * 0.25, -size * 0.85);
      ctx.moveTo(-size * 0.22, -size * 0.85);
      ctx.lineTo(-size * 0.22, -size * 0.3);
      ctx.lineTo(-size * 0.75, size * 0.85);
      ctx.lineTo(size * 0.75, size * 0.85);
      ctx.lineTo(size * 0.22, -size * 0.3);
      ctx.lineTo(size * 0.22, -size * 0.85);
      ctx.stroke();

      // Liquid level inside
      ctx.beginPath();
      ctx.moveTo(-size * 0.5, size * 0.3);
      ctx.lineTo(size * 0.5, size * 0.3);
      ctx.lineTo(size * 0.72, size * 0.82);
      ctx.lineTo(-size * 0.72, size * 0.82);
      ctx.closePath();
      ctx.fill();

      // Effervescing bubbles
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, size * 0.52, 2.0, 0, Math.PI * 2);
      ctx.arc(size * 0.25, size * 0.62, 1.6, 0, Math.PI * 2);
      ctx.arc(-size * 0.2, size * 0.42, 1.4, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawAtom = (ctx: CanvasRenderingContext2D, size: number, color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.8;

      // Nucleus
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // 3 Elliptical atomic orbits
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.85, size * 0.32, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.85, size * 0.32, Math.PI / 3, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.85, size * 0.32, (Math.PI * 2) / 3, 0, Math.PI * 2);
      ctx.stroke();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Molecular Network Bonds
      const maxDistance = 160;
      const lineColor = isDark ? 'rgba(52, 211, 153, 0.28)' : 'rgba(5, 150, 105, 0.25)';
      const nodeColor = isDark ? 'rgba(56, 189, 248, 0.75)' : 'rgba(2, 132, 199, 0.70)';

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1.6 * (1 - dist / maxDistance);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      }

      // 2. Draw Highly Visible Floating Scientific & Pharmacy Motifs
      elements.forEach((el) => {
        el.x += el.vx;
        el.y += el.vy;
        el.rotation += el.vRot;

        // Boundary wrap
        if (el.x < -80) el.x = width + 80;
        if (el.x > width + 80) el.x = -80;
        if (el.y < -80) el.y = height + 80;
        if (el.y > height + 80) el.y = -80;

        ctx.save();
        ctx.translate(el.x, el.y);
        ctx.rotate(el.rotation);

        const mainColor = getColor(el.colorType, el.opacity);
        const altColor = getColor(el.colorType === 'emerald' ? 'cyan' : 'emerald', el.opacity);

        switch (el.type) {
          case 'formula':
            if (el.text) {
              ctx.font = 'bold 13px "Space Grotesk", "Fira Code", monospace';
              ctx.fillStyle = mainColor;
              ctx.textAlign = 'center';
              // Shadow / outline effect for ultra-readability
              ctx.shadowColor = isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)';
              ctx.shadowBlur = 4;
              ctx.fillText(el.text, 0, 0);
            }
            break;
          case 'benzene':
            drawBenzene(ctx, el.size, mainColor);
            break;
          case 'dna':
            drawDNA(ctx, el.size, mainColor, altColor);
            break;
          case 'capsule':
            drawCapsule(ctx, el.size, mainColor, altColor);
            break;
          case 'tablet':
            drawTablet(ctx, el.size, mainColor);
            break;
          case 'cross':
            drawPharmacyCross(ctx, el.size, mainColor);
            break;
          case 'caduceus':
            drawCaduceusStaff(ctx, el.size, mainColor, altColor);
            break;
          case 'flask':
            drawFlask(ctx, el.size, mainColor);
            break;
          case 'atom':
            drawAtom(ctx, el.size, mainColor);
            break;
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Dynamic Interactive Scientific Canvas (Increased Opacity) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90 light:opacity-95"
      />

      {/* 2. Distinct Vector Scientific Watermark Overlay for Rich Scientific Texture */}
      <div
        className="absolute inset-0 bg-repeat opacity-[0.14] dark:opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23059669' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M30 20 l15 -9 l15 9 l0 18 l-15 9 l-15 -9 z'/%3E%3Ccircle cx='45' cy='29' r='9' stroke-width='1.2'/%3E%3Cpath d='M60 29 h12'/%3E%3Ctext x='76' y='33' font-family='monospace' font-size='8' font-weight='bold' fill='%23059669'%3EOH%3C/text%3E%3Cpath d='M135 22 l0 24 M123 34 l24 0' stroke-width='2.6'/%3E%3Crect x='115' y='110' width='30' height='14' rx='7' stroke='%230284C7' fill='%230284C7' fill-opacity='0.15'/%3E%3Cline x1='130' y1='110' x2='130' y2='124' stroke='%230284C7' stroke-width='1.8'/%3E%3Ccircle cx='40' cy='130' r='16' stroke='%23059669' fill='%23059669' fill-opacity='0.12'/%3E%3Cline x1='24' y1='130' x2='56' y2='130' stroke-width='1.8'/%3E%3Ccircle cx='40' cy='122' r='1.5' fill='%23059669'/%3E%3Ccircle cx='40' cy='138' r='1.5' fill='%23059669'/%3E%3Cpath d='M90 90 l10 18 h-20 z' stroke-width='1.5'/%3E%3Ctext x='15' y='85' font-family='monospace' font-size='8.5' font-weight='bold' fill='%230284C7'%3EC8H9NO2%3C/text%3E%3Ctext x='105' y='80' font-family='monospace' font-size='8' font-weight='bold' fill='%23059669'%3EpH = -log[H+]%3C/text%3E%3Cpath d='M150 145 c-5 0 -10 5 -10 10 s5 10 10 10 s10 -5 10 -10' stroke='%230D9488' stroke-width='1.6'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* 3. Ambient Depth Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/[0.04] to-slate-950/[0.08] dark:from-transparent dark:via-emerald-950/[0.10] dark:to-slate-950/30 pointer-events-none" />
    </div>
  );
};
