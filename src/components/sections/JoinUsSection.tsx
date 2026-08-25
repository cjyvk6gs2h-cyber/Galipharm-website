import React, { useState } from 'react';
import {
  Sparkles,
  Microscope,
  HeartPulse,
  Trophy,
  Camera,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { JOIN_CONTRIBUTION_AREAS, RECRUITMENT_CONFIG } from '../../data/clubData';
import { useLanguage } from '../../context/LanguageContext';
import { Modal } from '../common/Modal';

interface JoinUsSectionProps {
  onSelectCommittee: (committeeId: string) => void;
}

export const JoinUsSection: React.FC<JoinUsSectionProps> = ({
  onSelectCommittee,
}) => {
  const { language, t } = useLanguage();
  const isFr = language === 'fr';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAreaIcon = (id: string) => {
    switch (id) {
      case 'scientific':
        return <Microscope className="w-5 h-5 text-emerald-400" />;
      case 'public-health':
        return <HeartPulse className="w-5 h-5 text-teal-400" />;
      case 'cultural-sports':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'media':
        return <Camera className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const handleJoinClick = () => {
    if (RECRUITMENT_CONFIG.hasLiveFormUrl) {
      window.open(RECRUITMENT_CONFIG.googleFormUrl, '_blank', 'noopener,noreferrer');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section
      id="join"
      className="py-20 lg:py-28 relative bg-transparent overflow-hidden border-t border-slate-800/60 light:border-slate-200"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.join.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 font-['Montserrat'] tracking-tight">
            {t.join.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
            {t.join.subtitle}
          </p>
        </div>

        {/* 4 Contribution Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {JOIN_CONTRIBUTION_AREAS.map((area) => (
            <div
              key={area.id}
              onClick={() => onSelectCommittee(area.committeeId)}
              className="p-6 rounded-2xl bg-slate-900/70 light:bg-white border border-slate-800 light:border-slate-200 hover:border-emerald-500/40 light:hover:border-emerald-500/40 transition-all hover:shadow-lg hover:shadow-emerald-950/20 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-800 light:bg-slate-100 w-fit mb-4 group-hover:scale-105 transition-transform">
                  {getAreaIcon(area.committeeId)}
                </div>

                <h3 className="text-base font-bold text-white light:text-slate-900 font-['Montserrat'] mb-2 group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                  {isFr ? area.titleFr : area.title}
                </h3>

                <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                  {isFr ? area.descriptionFr : area.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-800/60 light:border-slate-100">
                  {(isFr ? area.highlightsFr : area.highlights).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[11px] text-slate-400 light:text-slate-500"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 light:border-slate-100 text-xs font-semibold text-emerald-400 light:text-emerald-600 flex items-center gap-1 group-hover:underline">
                <span>{isFr ? 'Explorer le pôle' : 'Explore wing'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Central Join CTA Card (Single Clear Button) */}
        <div className="max-w-2xl mx-auto text-center p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 light:from-white light:to-slate-100 border border-emerald-500/30 light:border-emerald-200 shadow-xl shadow-emerald-950/20">
          <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/20">
            <Sparkles className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 font-['Montserrat'] mb-2">
            {t.join.ctaText}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 mb-8 max-w-lg mx-auto">
            {isFr
              ? 'Rejoignez une communauté bienveillante et ambitieuse d’étudiants en pharmacie de la Faculté de Médecine d’Annaba — Département de Pharmacie.'
              : 'Join a dynamic, ambitious community of pharmacy students at the Faculty of Medicine of Annaba — Pharmacy Department.'}
          </p>

          <button
            type="button"
            onClick={handleJoinClick}
            className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/40 border border-emerald-400/30 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>{t.join.joinButton}</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-slate-400 light:text-slate-400 mt-4 font-mono">
            {t.join.formNotice}
          </p>
        </div>
      </div>

      {/* Recruitment Form Modal Notice */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isFr ? 'Formulaire de Recrutement GaliPharm' : 'GaliPharm Recruitment Form'}
        size="md"
      >
        <div className="space-y-4 text-center py-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Info className="w-6 h-6" />
          </div>

          <h4 className="text-base font-bold text-white light:text-slate-900 font-['Montserrat']">
            {isFr ? 'Candidature Officielle' : 'Official Application'}
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
            {isFr
              ? 'Le lien officiel Google Form de recrutement sera branché ici dès son ouverture par le Bureau de GaliPharm.'
              : 'The official recruitment Google Form link will be connected here upon opening by the GaliPharm Board.'}
          </p>

          <div className="p-3 rounded-xl bg-slate-800/60 light:bg-slate-100 border border-slate-700/60 light:border-slate-200 text-xs font-mono text-emerald-400">
            [Official Google Form link placeholder]
          </div>

          <div className="pt-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              {isFr ? 'Fermer' : 'Close'}
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
