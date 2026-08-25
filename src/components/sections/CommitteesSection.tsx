import React, { useState } from 'react';
import {
  Microscope,
  HeartPulse,
  Trophy,
  Camera,
  Layers,
  ArrowRight,
  CheckCircle2,
  User,
  Sparkles,
  Target,
} from 'lucide-react';
import { COMMITTEES } from '../../data/clubData';
import { Committee } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Modal } from '../common/Modal';

interface CommitteesSectionProps {
  selectedCommitteeId?: string | null;
  onNavigate: (sectionId: string) => void;
}

export const CommitteesSection: React.FC<CommitteesSectionProps> = ({
  selectedCommitteeId,
  onNavigate,
}) => {
  const { language, t } = useLanguage();
  const isFr = language === 'fr';

  const [activeModalCommittee, setActiveModalCommittee] = useState<Committee | null>(() => {
    if (selectedCommitteeId) {
      return COMMITTEES.find((c) => c.id === selectedCommitteeId) || null;
    }
    return null;
  });

  const getCommitteeIcon = (id: string, className = 'w-6 h-6') => {
    switch (id) {
      case 'scientific':
        return <Microscope className={className} />;
      case 'public-health':
        return <HeartPulse className={className} />;
      case 'cultural-sports':
        return <Trophy className={className} />;
      case 'media':
        return <Camera className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <section
      id="committees"
      className="py-20 lg:py-28 relative bg-slate-900/30 light:bg-white/60 backdrop-blur-[2px] border-t border-slate-800/60 light:border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.committees.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 font-['Montserrat'] tracking-tight">
            {t.committees.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
            {t.committees.subtitle}
          </p>
        </div>

        {/* Four Committees Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMITTEES.map((committee) => (
            <div
              key={committee.id}
              onClick={() => setActiveModalCommittee(committee)}
              className="group p-7 rounded-2xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-emerald-500/50 light:hover:border-emerald-500/50 transition-all duration-200 hover:shadow-xl hover:shadow-emerald-950/20 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Committee Header & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`p-3.5 rounded-xl bg-gradient-to-br ${committee.color} text-white shadow-md group-hover:scale-105 transition-transform`}
                  >
                    {getCommitteeIcon(committee.id, 'w-6 h-6 text-white')}
                  </div>

                  <span
                    className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${committee.badgeColor}`}
                  >
                    {committee.shortName}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white light:text-slate-900 font-['Montserrat'] mb-2.5 group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                  {isFr ? committee.nameFr : committee.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  {isFr ? committee.shortDescriptionFr : committee.shortDescription}
                </p>

                {/* Main Activities Teaser */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono font-bold uppercase text-slate-400 light:text-slate-500 tracking-wider">
                    {t.committees.activitiesTitle}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(isFr ? committee.activitiesFr : committee.activities)
                      .slice(0, 3)
                      .map((act, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/70 light:bg-white text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-200"
                        >
                          {act}
                        </span>
                      ))}
                    {(isFr ? committee.activitiesFr : committee.activities).length > 3 && (
                      <span className="text-[11px] px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono">
                        +{(isFr ? committee.activitiesFr : committee.activities).length - 3} {isFr ? 'autres' : 'more'}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 light:text-emerald-600 group-hover:underline flex items-center gap-1.5">
                  <span>{t.committees.viewDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <User className="w-3.5 h-3.5" />
                  <span>{isFr ? 'Bureau & Pôle' : 'Wing Info'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Committee Detailed Modal */}
      {activeModalCommittee && (
        <Modal
          isOpen={true}
          onClose={() => setActiveModalCommittee(null)}
          title={isFr ? activeModalCommittee.nameFr : activeModalCommittee.name}
          size="lg"
        >
          <div className="space-y-6">
            {/* Committee Header Banner */}
            <div className="p-4 rounded-xl bg-slate-800/60 light:bg-slate-100 border border-slate-700/60 light:border-slate-200 flex items-start gap-4">
              <div
                className={`p-3.5 rounded-xl bg-gradient-to-br ${activeModalCommittee.color} text-white shadow-md flex-shrink-0`}
              >
                {getCommitteeIcon(activeModalCommittee.id, 'w-6 h-6 text-white')}
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white light:text-slate-900 font-['Montserrat']">
                  {isFr ? activeModalCommittee.nameFr : activeModalCommittee.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                  {isFr
                    ? activeModalCommittee.shortDescriptionFr
                    : activeModalCommittee.shortDescription}
                </p>
              </div>
            </div>

            {/* Objective */}
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <Target className="w-3.5 h-3.5" />
                <span>{isFr ? 'Objectif du Comité' : 'Committee Objective'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 light:text-slate-800 leading-relaxed">
                {isFr ? activeModalCommittee.objectiveFr : activeModalCommittee.objective}
              </p>
            </div>

            {/* Activities List */}
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.committees.activitiesTitle}</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(isFr
                  ? activeModalCommittee.activitiesFr
                  : activeModalCommittee.activities
                ).map((activity, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-800/40 light:bg-slate-50 border border-slate-700/40 light:border-slate-200 flex items-start gap-2.5 text-xs text-slate-200 light:text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Developed */}
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 light:text-slate-600 mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-teal-400" />
                <span>{t.committees.skillsTitle}</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(isFr
                  ? activeModalCommittee.skillsDevelopedFr
                  : activeModalCommittee.skillsDeveloped
                ).map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-800/40 light:bg-slate-50 border border-slate-700/40 light:border-slate-200 flex items-start gap-2.5 text-xs text-slate-200 light:text-slate-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 mt-1.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chef de Comité */}
            <div className="pt-2 border-t border-slate-800 light:border-slate-200">
              <div className="p-4 rounded-xl bg-slate-800/50 light:bg-slate-100 border border-slate-700/50 light:border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-semibold text-slate-400">
                      {t.committees.presidentTitle}
                    </div>
                    <div className="text-sm font-bold text-slate-200 light:text-slate-800">
                      {activeModalCommittee.presidentName}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA inside Modal */}
            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveModalCommittee(null);
                  onNavigate('join');
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md transition-all flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isFr ? 'Rejoindre GaliPharm' : 'Join GaliPharm'}</span>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
