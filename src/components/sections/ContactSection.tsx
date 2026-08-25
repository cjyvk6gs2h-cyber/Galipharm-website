import React, { useState } from 'react';
import {
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { CLUB_INFO } from '../../data/clubData';
import { useLanguage } from '../../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isFr = language === 'fr';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-3">
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

            {/* Official Channels */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 px-1">
                {t.contact.channelsTitle}
              </div>

              {/* Direct Club Email Display (Not a link) */}
              <div className="p-4 rounded-xl flex items-center justify-between border bg-slate-900/80 light:bg-slate-50 border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-800 light:bg-white border border-slate-700 light:border-slate-200">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                      <span className="text-xs font-bold text-white light:text-slate-900">
                        Club email :
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 select-all">
                        {CLUB_INFO.socialLinks.email}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 light:text-slate-500 mt-0.5">
                      {isFr ? 'Adresse électronique officielle du club' : 'Official club email address'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels Links */}
              {officialSocialLinks.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-xl flex items-center justify-between border transition-all ${
                    channel.highlight
                      ? 'bg-gradient-to-r from-emerald-950/40 to-slate-900 light:from-emerald-50 light:to-white border-emerald-500/30 hover:border-emerald-400'
                      : 'bg-slate-900/70 light:bg-slate-50 border-slate-800 light:border-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-slate-800 light:bg-white border border-slate-700 light:border-slate-200">
                      {channel.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white light:text-slate-900">
                          {channel.name}
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

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/90 light:bg-slate-50 border border-slate-800 light:border-slate-200 shadow-xl">
              <h3 className="text-lg font-bold text-white light:text-slate-900 font-['Montserrat'] mb-1">
                {t.contact.sendMessageTitle}
              </h3>
              <p className="text-xs text-slate-400 light:text-slate-600 mb-6">
                {isFr
                  ? 'Posez vos questions ou partagez vos propositions avec l’équipe de GaliPharm.'
                  : 'Send your questions or share suggestions with the GaliPharm team.'}
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white light:text-slate-900 font-['Montserrat']">
                    {t.contact.successTitle}
                  </h4>
                  <p className="text-xs text-slate-300 light:text-slate-600">
                    {t.contact.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 light:text-slate-700 mb-1.5">
                        {t.contact.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isFr ? 'Ex: Sarah Mansouri' : 'e.g., Sarah Mansouri'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 light:bg-white border border-slate-700 light:border-slate-300 text-xs text-white light:text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 light:text-slate-700 mb-1.5">
                        {t.contact.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 light:bg-white border border-slate-700 light:border-slate-300 text-xs text-white light:text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 light:text-slate-700 mb-1.5">
                      {t.contact.subject}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isFr ? 'Ex: Question sur le club ou les comités' : 'e.g., Inquiry regarding committees'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 light:bg-white border border-slate-700 light:border-slate-300 text-xs text-white light:text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 light:text-slate-700 mb-1.5">
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isFr ? 'Votre message ici...' : 'Your message here...'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 light:bg-white border border-slate-700 light:border-slate-300 text-xs text-white light:text-slate-900 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-950/30 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.sending}</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{t.contact.sendButton}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
