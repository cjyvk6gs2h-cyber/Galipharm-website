import React, { useState, useMemo } from 'react';
import { Search, Layers, Compass, Sparkles, MessageSquare, ArrowRight, X, Building2 } from 'lucide-react';
import { Modal } from './Modal';
import { useLanguage } from '../../context/LanguageContext';
import { COMMITTEES, PURPOSE_PILLARS, JOIN_CONTRIBUTION_AREAS } from '../../data/clubData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string, itemId?: string) => void;
  onSelectCommittee: (committeeId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectCommittee,
}) => {
  const [query, setQuery] = useState('');
  const { language } = useLanguage();
  const isFr = language === 'fr';

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const found: {
      id: string;
      title: string;
      category: string;
      type: 'committee' | 'purpose' | 'join' | 'about' | 'contact';
      sectionId: string;
      desc: string;
      committeeId?: string;
    }[] = [];

    // Search Committees
    COMMITTEES.forEach((c) => {
      const name = isFr ? c.nameFr : c.name;
      const desc = isFr ? c.shortDescriptionFr : c.shortDescription;
      const acts = (isFr ? c.activitiesFr : c.activities).join(' ');
      const skills = (isFr ? c.skillsDevelopedFr : c.skillsDeveloped).join(' ');
      if (
        name.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        acts.toLowerCase().includes(q) ||
        skills.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q)
      ) {
        found.push({
          id: c.id,
          title: name,
          category: isFr ? 'Comité' : 'Committee',
          type: 'committee',
          sectionId: 'committees',
          committeeId: c.id,
          desc: desc.slice(0, 100) + '...',
        });
      }
    });

    // Search Purpose Pillars
    PURPOSE_PILLARS.forEach((p) => {
      const title = isFr ? p.titleFr : p.title;
      const desc = isFr ? p.descriptionFr : p.description;
      if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)) {
        found.push({
          id: p.id,
          title,
          category: isFr ? 'Objectif' : 'Purpose',
          type: 'purpose',
          sectionId: 'purpose',
          desc: desc.slice(0, 100) + '...',
        });
      }
    });

    // Search Join Areas
    JOIN_CONTRIBUTION_AREAS.forEach((a) => {
      const title = isFr ? a.titleFr : a.title;
      const desc = isFr ? a.descriptionFr : a.description;
      if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)) {
        found.push({
          id: a.id,
          title,
          category: isFr ? 'Rejoindre' : 'Join',
          type: 'join',
          sectionId: 'join',
          committeeId: a.committeeId,
          desc: desc.slice(0, 100) + '...',
        });
      }
    });

    // About GaliPharm
    if (
      'about'.includes(q) ||
      'propos'.includes(q) ||
      'annaba'.includes(q) ||
      'pharmacie'.includes(q) ||
      'pharmacy'.includes(q) ||
      'faculté'.includes(q) ||
      'faculty'.includes(q)
    ) {
      found.push({
        id: 'about-galipharm',
        title: isFr ? 'À Propos de GaliPharm (Club de Pharmacie)' : 'About GaliPharm (Pharmacy Club)',
        category: isFr ? 'Institution' : 'About',
        type: 'about',
        sectionId: 'about',
        desc: isFr
          ? 'Club estudiantin de pharmacie de la Faculté de Médecine d’Annaba — Département de Pharmacie.'
          : 'Pharmacy student club of the Faculty of Medicine of Annaba — Pharmacy Department.',
      });
    }

    // Contact
    if (
      'contact'.includes(q) ||
      'email'.includes(q) ||
      'instagram'.includes(q) ||
      'tiktok'.includes(q) ||
      'facebook'.includes(q) ||
      'linkedin'.includes(q)
    ) {
      found.push({
        id: 'contact-galipharm',
        title: isFr ? 'Contact & Réseaux Sociaux' : 'Contact & Official Channels',
        category: 'Contact',
        type: 'contact',
        sectionId: 'contact',
        desc: isFr
          ? 'Instagram, TikTok, Facebook, LinkedIn et email de contact de GaliPharm.'
          : 'Instagram, TikTok, Facebook, LinkedIn, and official contact email for GaliPharm.',
      });
    }

    return found;
  }, [query, isFr]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'committee':
        return <Layers className="w-4 h-4 text-emerald-400" />;
      case 'purpose':
        return <Compass className="w-4 h-4 text-teal-400" />;
      case 'join':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'about':
        return <Building2 className="w-4 h-4 text-cyan-400" />;
      default:
        return <MessageSquare className="w-4 h-4 text-slate-400" />;
    }
  };

  const handleSelect = (item: typeof results[0]) => {
    onClose();
    if (item.type === 'committee' && item.committeeId) {
      onSelectCommittee(item.committeeId);
    } else {
      onNavigate(item.sectionId);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" showCloseButton={false}>
      <div className="flex flex-col gap-4">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-slate-800 light:border-slate-200 pb-3">
          <Search className="w-5 h-5 text-emerald-400 absolute left-1" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isFr
                ? 'Rechercher un comité, objectif, ou information sur GaliPharm...'
                : 'Search committees, purpose, or information on GaliPharm...'
            }
            className="w-full pl-9 pr-8 py-2 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[55vh] overflow-y-auto space-y-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              {isFr
                ? 'Tapez pour rechercher dans les comités, objectifs et informations de GaliPharm...'
                : 'Type to search across GaliPharm committees, purpose, and information...'}
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              {isFr
                ? `Aucun résultat trouvé pour « ${query} »`
                : `No results found for "${query}"`}
            </div>
          ) : (
            results.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                onClick={() => handleSelect(item)}
                className="group flex items-start justify-between p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 light:bg-slate-50 light:hover:bg-slate-100 border border-slate-700/40 light:border-slate-200 cursor-pointer transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-slate-900 light:bg-white border border-slate-700 light:border-slate-200">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all mt-2 ml-2 flex-shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </Modal>
  );
};
