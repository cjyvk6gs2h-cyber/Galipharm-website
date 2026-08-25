import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Microscope,
  HeartPulse,
  Trophy,
  Camera,
  GraduationCap,
  ChevronDown,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { CLUB_INFO, COMMITTEES } from '../../data/clubData';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onSelectCommittee: (committeeId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onSelectCommittee,
}) => {
  const { language, t } = useLanguage();
  const isFr = language === 'fr';

  const committeeIcons: Record<string, React.ReactNode> = {
    scientific: <Microscope className="w-4 h-4 text-emerald-400" />,
    'public-health': <HeartPulse className="w-4 h-4 text-teal-400" />,
    'cultural-sports': <Trophy className="w-4 h-4 text-amber-400" />,
    media: <Camera className="w-4 h-4 text-cyan-400" />,
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Radial Glows */}
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[700px] h-[500px] bg-emerald-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-700/10 rounded-full blur-[120px]" />

        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Institutional Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 animate-fade-in shadow-inner">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>
            {isFr
              ? 'CLUB ESTUDIANTIN DE PHARMACIE • FACULTÉ DE MÉDECINE D’ANNABA : DÉPARTEMENT DE PHARMACIE'
              : 'PHARMACY STUDENT CLUB • FACULTY OF MEDICINE OF ANNABA : PHARMACY DEPARTMENT'}
          </span>
        </div>

        {/* Main Brand Logo & Title */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
            <Logo size="xl" showText={false} />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Montserrat'] tracking-tight text-white light:text-slate-900 leading-tight">
            GaliPharm
          </h1>
        </div>

        {/* Primary Visual Statement */}
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white light:text-slate-900 font-['Montserrat'] tracking-tight leading-tight">
            {isFr ? '« Let’s make pharmacy great again. »' : '“Let’s make pharmacy great again.”'}
          </p>

          {/* Institutional Philosophy Statement */}
          <p className="text-sm sm:text-base md:text-lg font-medium text-emerald-400 light:text-emerald-700 mt-2.5 italic">
            {isFr ? CLUB_INFO.philosophyStatementFr : CLUB_INFO.philosophyStatement}
          </p>
        </div>

        {/* Subtext description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 light:text-slate-600 mb-10 leading-relaxed font-sans">
          {isFr ? CLUB_INFO.heroSubtitleFr : CLUB_INFO.heroSubtitle}
        </p>

        {/* Main Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={() => onNavigate('join')}
            className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/40 border border-emerald-400/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>{t.hero.joinBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 light:text-slate-800 bg-slate-900/80 light:bg-white/80 hover:bg-slate-800 light:hover:bg-slate-100 border border-slate-800 light:border-slate-300 transition-all hover:border-emerald-500/50"
          >
            {t.hero.exploreBtn}
          </button>
        </div>

        {/* Four Committees Showcase Bar */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-slate-800/60 light:border-slate-200">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-4">
            {t.hero.committeesHighlightTitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {COMMITTEES.map((committee) => (
              <button
                key={committee.id}
                type="button"
                onClick={() => onSelectCommittee(committee.id)}
                className="group p-3 rounded-xl bg-slate-900/70 light:bg-white hover:bg-slate-800 light:hover:bg-slate-100 border border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all text-left flex items-center gap-2.5 shadow-sm"
              >
                <div className="p-2 rounded-lg bg-slate-800 light:bg-slate-100 group-hover:bg-emerald-500/20 transition-colors flex-shrink-0">
                  {committeeIcons[committee.id]}
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-bold text-slate-200 light:text-slate-800 group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors block truncate">
                    {isFr ? committee.nameFr : committee.name}
                  </span>
                  <span className="text-[11px] text-slate-400 light:text-slate-400 block truncate">
                    {isFr ? 'Voir détails →' : 'View details →'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onNavigate('about')}
            className="p-2 text-slate-400 hover:text-emerald-400 transition-colors animate-bounce"
            aria-label="Scroll to About Section"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
