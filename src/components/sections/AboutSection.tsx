import React from 'react';
import {
  Building2,
  Users2,
  Target,
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { CLUB_INFO } from '../../data/clubData';
import { useLanguage } from '../../context/LanguageContext';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const isFr = language === 'fr';

  const pillars = [
    {
      icon: <Users2 className="w-5 h-5 text-emerald-400" />,
      title: t.about.whoWeAreTitle,
      text: t.about.whoWeAreText,
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5',
    },
    {
      icon: <Target className="w-5 h-5 text-teal-400" />,
      title: t.about.whatWeDoTitle,
      text: t.about.whatWeDoText,
      border: 'border-teal-500/20',
      bg: 'bg-teal-500/5',
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      title: t.about.whatWeAimTitle,
      text: t.about.whatWeAimText,
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-500/5',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: t.about.whyInvolveTitle,
      text: t.about.whyInvolveText,
      border: 'border-amber-500/20',
      bg: 'bg-amber-500/5',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 relative bg-slate-900/40 light:bg-white/70 backdrop-blur-[2px] border-t border-b border-slate-800/60 light:border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 font-['Montserrat'] tracking-tight">
            {t.about.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Institutional Official Statement Card */}
        <div className="relative rounded-2xl p-6 sm:p-8 md:p-10 mb-16 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-teal-950/30 light:from-emerald-50 light:via-slate-50 light:to-teal-50 border border-emerald-500/30 light:border-emerald-200 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>{t.about.foundedIn}</span>
              </div>

              {/* Official Quote */}
              <blockquote className="text-base sm:text-lg text-slate-200 light:text-slate-800 font-medium leading-relaxed italic border-l-2 border-emerald-500 pl-4">
                {isFr ? CLUB_INFO.officialDescriptionFr : CLUB_INFO.officialDescriptionEn}
              </blockquote>

              {/* Institutional Philosophy Highlight */}
              <div className="pt-2">
                <p className="text-sm font-semibold text-emerald-400 light:text-emerald-700">
                  {isFr ? CLUB_INFO.philosophyStatementFr : CLUB_INFO.philosophyStatement}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-center lg:text-right border-t lg:border-t-0 lg:border-l border-slate-800 light:border-slate-200 pt-6 lg:pt-0 lg:pl-8 space-y-4">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black font-['Montserrat'] text-emerald-400">
                  {isFr ? 'Club de Pharmacie' : 'Pharmacy Club'}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {isFr ? 'Club estudiantin officiel depuis 2017' : 'Official student club since 2017'}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-bold text-white light:text-slate-900">
                  Faculté de Médecine
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Département de Pharmacie • Annaba
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('purpose')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
              >
                <span>{isFr ? 'Notre Mission →' : 'Our Purpose →'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Overview Cards: Who We Are, What We Do, What We Aim, Why Involve */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-slate-900/80 light:bg-slate-50 border ${pillar.border} transition-all hover:translate-y-[-2px] hover:shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${pillar.bg} border ${pillar.border} flex-shrink-0 mt-1`}>
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white light:text-slate-900 font-['Montserrat']">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
