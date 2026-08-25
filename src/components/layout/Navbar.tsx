import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Search,
  Globe,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
}) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'purpose', label: t.nav.purpose },
    { id: 'committees', label: t.nav.committees },
    { id: 'join', label: t.nav.joinUs },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 light:bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-emerald-950/20 border-b border-slate-800/80 light:border-slate-200 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <Logo size="sm" showText={true} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-all duration-150 relative ${
                      isActive
                        ? 'text-emerald-400 font-semibold bg-emerald-500/10'
                        : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/50 light:hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-emerald-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Utility Controls (Search, Language, Theme, CTA) */}
            <div className="hidden sm:flex items-center space-x-2">
              {/* Quick Search */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 rounded-xl text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 light:hover:bg-slate-100 border border-slate-800 light:border-slate-200 transition-colors group flex items-center gap-1.5 text-xs"
                title="Quick Search (Ctrl+K / Cmd+K)"
              >
                <Search className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="hidden lg:inline text-slate-400 font-mono text-[11px]">⌘K</span>
              </button>

              {/* Language Switcher Button */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold text-slate-300 light:text-slate-700 hover:text-emerald-400 hover:bg-slate-800/60 light:hover:bg-slate-100 border border-slate-800 light:border-slate-200 transition-colors"
                title="Switch Language (EN / FR)"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span className="uppercase">{language}</span>
              </button>

              {/* Dark/Light Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-300 light:text-slate-600 hover:text-amber-400 light:hover:text-amber-600 hover:bg-slate-800/60 light:hover:bg-slate-100 border border-slate-800 light:border-slate-200 transition-colors"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              {/* Join CTA Button */}
              <button
                type="button"
                onClick={() => handleNavClick('join')}
                className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-950/30 border border-emerald-400/30 transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-200 group-hover:rotate-12 transition-transform" />
                <span>{t.nav.joinUs}</span>
              </button>
            </div>

            {/* Mobile Controls Hamburger & Language */}
            <div className="flex items-center space-x-1.5 md:hidden">
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:bg-slate-800 light:hover:bg-slate-100"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-emerald-400" />
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:bg-slate-800 light:hover:bg-slate-100"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-200 light:text-slate-800 hover:bg-slate-800 light:hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-slate-900 light:bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-800 light:border-slate-200">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 light:border-slate-200">
                <Logo size="xs" showText={true} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 light:hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Language Switcher Pill */}
              <div className="flex items-center justify-between my-4 p-2.5 rounded-xl bg-slate-800/60 light:bg-slate-100">
                <span className="text-xs text-slate-400 light:text-slate-600 font-medium">
                  {language === 'fr' ? 'Langue / Language' : 'Language / Langue'}
                </span>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {language === 'en' ? 'FRANÇAIS (FR)' : 'ENGLISH (EN)'}
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1 mt-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30'
                          : 'text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-100'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-6 border-t border-slate-800 light:border-slate-200 space-y-3">
              <button
                onClick={() => handleNavClick('join')}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.nav.joinUs}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400 font-mono">
                GaliPharm • Club de Pharmacie
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
