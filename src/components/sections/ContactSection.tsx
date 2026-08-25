import React from 'react';
import {
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { CLUB_INFO } from '../../data/clubData';
import { useLanguage } from '../../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isFr = language === 'fr';

  const officialSocialLinks = [
    {
      name: 'Instagram',
      handle: '@galipharm__',
      url: CLUB_INFO.socialLinks.instagram,
      icon: <Instagram className="w-5 h-5 text-pink-400" />,
      highlight: true,
      description: isFr
        ? 'Plateforme principale pour les actualités, événements et photos'
        : 'Main platform for ongoing updates, events, and photos',
    },
    {
      name: 'TikTok',
      handle: '@galipharm',
      url: CLUB_INFO.socialLinks.tiktok,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-slate-100 light:text-slate-800"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.33a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3.14 15.6a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.48V8.71a8.21 8.21 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
        </svg>
      ),
      highlight: false,
      description: isFr
        ? 'Vidéos courtes, coulisses et moments forts du club'
        : 'Short videos, behind-the-scenes and club highlights',
    },
    {
      name: 'Facebook',
      handle: 'GaliPharm',
      url: CLUB_INFO.socialLinks.facebook,
      icon: <Facebook className="w-5 h-5 text-blue-400" />,
      highlight: false,
      description: isFr ? 'Page officielle' : 'Official Page',
    },
    {
      name: 'LinkedIn',
      handle: 'GaliPharm',
      url: CLUB_INFO.socialLinks.linkedin,
      icon: <Linkedin className="w-5 h-5 text-cyan-400" />,
      highlight: false,
      description: isFr ? 'Réseau professionnel' : 'Professional Network',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 relative bg-slate-900/40 light:bg-white/70 backdrop-blur-[2px] border-t border-slate-800/60 light:border-slate-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 font-['Montserrat'] tracking-tight">
            {t.contact.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: Campus Location Card & Club Email Card */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Campus Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white light:text-slate-900 font-['Montserrat']">
                    {t.contact.facultyTitle}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">Faculté de Médecine — Département de Pharmacie</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                {CLUB_INFO.location}
                <br />
                {CLUB_INFO.universityName}
              </p>
            </div>

            {/* Direct Club Email Display Card with Mailto link */}
            <a
              href={`mailto:${CLUB_INFO.socialLinks.email}`}
              className="p-6 rounded-2xl flex items-center justify-between border bg-slate-900/80 light:bg-slate-50 border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all group cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800 light:bg-white border border-slate-700 light:border-slate-200 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400 light:text-slate-500 mb-0.5">
                    {isFr ? 'Club email (cliquez pour écrire) :' : 'Club email (click to compose) :'}
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold text-emerald-400 select-all group-hover:underline">
                    {CLUB_INFO.socialLinks.email}
                  </div>
                  <p className="text-[11px] text-slate-400 light:text-slate-500 mt-1">
                    {isFr ? 'Adresse électronique officielle du club GaliPharm' : 'Official GaliPharm club email address'}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
            </a>
          </div>

          {/* Right Column: Official Social Media Channels */}
          <div className="space-y-3.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 px-1">
              {t.contact.channelsTitle}
            </div>

            {officialSocialLinks.map((channel, idx) => (
              <a
                key={idx}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl flex items-center justify-between border transition-all ${
                  channel.highlight
                    ? 'bg-gradient-to-r from-emerald-950/40 to-slate-900 light:from-emerald-50 light:to-white border-emerald-500/30 hover:border-emerald-400 shadow-sm'
                    : 'bg-slate-900/70 light:bg-slate-50 border-slate-800 light:border-slate-200 hover:border-slate-700 hover:bg-slate-900/90 light:hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-800 light:bg-white border border-slate-700 light:border-slate-200">
                    {channel.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-white light:text-slate-900">
                        {channel.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {channel.handle}
                      </span>
                      {channel.highlight && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {isFr ? 'Principal' : 'Primary'}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 light:text-slate-500 mt-0.5">
                      {channel.description}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
