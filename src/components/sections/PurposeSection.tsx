import React from 'react';
import {
  Compass,
  Sparkles,
  Users,
  Target,
  Activity,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { PURPOSE_PILLARS } from '../../data/clubData';
import { useLanguage } from '../../context/LanguageContext';

interface PurposeSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const PurposeSection: React.FC<PurposeSectionProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const isFr = language === 'fr';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-teal-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-emerald-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-teal-400" />;
      default:
        return <Compass className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section
      id="purpose"
      className="py-20 lg:py-28 relative bg-transparent overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.purpose.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 font-['Montserrat'] tracking-tight">
            {t.purpose.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
            {t.purpose.subtitle}
          </p>
        </div>

        {/* 6 Core Purpose Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PURPOSE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl bg-slate-900/70 light:bg-white border border-slate-800 light:border-slate-200 hover:border-emerald-500/40 light:hover:border-emerald-500/40 transition-all hover:shadow-lg hover:shadow-emerald-950/10 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800 light:bg-emerald-50 border border-slate-700/60 light:border-emerald-100 group-hover:scale-105 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 light:text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white light:text-slate-900 font-['Montserrat'] mb-2 group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                  {isFr ? pillar.titleFr : pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                  {isFr ? pillar.descriptionFr : pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Committees Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 light:from-emerald-50 light:via-slate-100 light:to-teal-50 border border-emerald-500/30 light:border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white light:text-slate-900 font-['Montserrat']">
              {isFr
                ? 'Envie de découvrir nos pôles d’action ?'
                : 'Want to discover our operational wings?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 mt-1">
              {isFr
                ? 'Explorez les comités qui font vivre GaliPharm au quotidien.'
                : 'Explore the committees driving GaliPharm forward.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('committees')}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>{isFr ? 'Voir les Comités' : 'View the Committees'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
