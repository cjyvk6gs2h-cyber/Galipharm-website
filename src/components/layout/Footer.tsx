import React from 'react';
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  ArrowUp,
  MapPin,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { CLUB_INFO, COMMITTEES } from '../../data/clubData';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCommittee?: (committeeId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCommittee,
}) => {
  const { language, t } = useLanguage();
  const isFr = language === 'fr';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'purpose', label: t.nav.purpose },
    { id: 'committees', label: t.nav.committees },
    { id: 'join', label: t.nav.joinUs },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="relative bg-slate-950 light:bg-slate-100 text-slate-400 light:text-slate-600 border-t border-slate-800/80 light:border-slate-300 overflow-hidden transition-colors duration-300">
      {/* Subtle background ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800 light:border-slate-300">
          {/* Brand & Statements Column */}
          <div className="lg:col-span-2 space-y-4">
            <div onClick={() => onNavigate('hero')} className="cursor-pointer inline-block">
              <Logo size="md" showText={true} />
            </div>

            {/* Primary Visual Statement */}
            <div className="pt-2">
              <p className="text-lg sm:text-xl font-extrabold text-white light:text-slate-900 font-['Montserrat'] tracking-tight">
                {isFr ? '« Let’s make pharmacy great again. »' : '“Let’s make pharmacy great again.”'}
              </p>
              <p className="text-sm font-medium text-emerald-400 mt-1 italic">
                {isFr ? CLUB_INFO.philosophyStatementFr : CLUB_INFO.philosophyStatement}
              </p>
            </div>

            <p className="text-xs text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              {isFr ? CLUB_INFO.heroSubtitleFr : CLUB_INFO.heroSubtitle}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700 pt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>{CLUB_INFO.facultyName}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white light:text-slate-900 mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-emerald-400 light:hover:text-emerald-600 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* The Four Committees */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white light:text-slate-900 mb-4">
              {t.footer.committees}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {COMMITTEES.map((committee) => (
                <li key={committee.id}>
                  <button
                    onClick={() => {
                      if (onSelectCommittee) {
                        onSelectCommittee(committee.id);
                      } else {
                        onNavigate('committees');
                      }
                    }}
                    className="hover:text-emerald-400 light:hover:text-emerald-600 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                    <span>{isFr ? committee.nameFr : committee.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Channels & Email */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white light:text-slate-900 mb-4">
              {t.footer.officialLinks}
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <a
                href={CLUB_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 light:text-slate-700 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 text-pink-400">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span>Instagram</span>
              </a>
              <a
                href={CLUB_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 light:text-slate-700 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 text-blue-400">
                  <Facebook className="w-3.5 h-3.5" />
                </div>
                <span>Facebook</span>
              </a>
              <a
                href={CLUB_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 light:text-slate-700 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 text-cyan-400">
                  <Linkedin className="w-3.5 h-3.5" />
                </div>
                <span>LinkedIn</span>
              </a>
              <a
                href={CLUB_INFO.socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 light:text-slate-700 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 text-slate-100 light:text-slate-800">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.33a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.6a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.48V8.71a8.21 8.21 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
                  </svg>
                </div>
                <span>TikTok</span>
              </a>

              {/* Direct email display & clickable mailto */}
              <a
                href={`mailto:${CLUB_INFO.socialLinks.email}`}
                className="flex items-center gap-2 text-slate-300 light:text-slate-700 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors pt-1 group"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 text-emerald-400 flex-shrink-0 group-hover:border-emerald-500/40">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] text-slate-400 light:text-slate-500 font-medium">Club email :</span>
                  <span className="font-mono text-emerald-400 font-bold select-all text-xs group-hover:underline">{CLUB_INFO.socialLinks.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 light:text-slate-600">
          <div className="flex items-center gap-2 font-mono">
            <span>© {new Date().getFullYear()} GaliPharm.</span>
            <span>•</span>
            <span>{t.footer.established}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 light:bg-white hover:bg-slate-800 light:hover:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 border border-slate-800 light:border-slate-300 transition-colors text-xs font-medium"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
