import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScientificBackground } from './components/common/ScientificBackground';
import { QuickSearchModal } from './components/common/QuickSearchModal';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { PurposeSection } from './components/sections/PurposeSection';
import { CommitteesSection } from './components/sections/CommitteesSection';
import { JoinUsSection } from './components/sections/JoinUsSection';
import { ContactSection } from './components/sections/ContactSection';

function AppContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCommitteeId, setSelectedCommitteeId] = useState<string | null>(null);

  // Smooth Navigation Handler
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handler for selecting and viewing a specific committee
  const handleSelectCommittee = (committeeId: string) => {
    setSelectedCommitteeId(committeeId);
    scrollToSection('committees');
  };

  // Keyboard shortcut listener for Quick Search (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ScrollSpy to update active section in navbar
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'purpose',
      'committees',
      'join',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 light:bg-slate-50 text-slate-100 light:text-slate-900 transition-colors duration-300 relative selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Interactive Scientific Motifs & Molecule Canvas Background */}
      <ScientificBackground />

      {/* Top Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Sections Hierarchy */}
      <main className="relative z-10">
        <HeroSection
          onNavigate={scrollToSection}
          onSelectCommittee={handleSelectCommittee}
        />
        <AboutSection onNavigate={scrollToSection} />
        <PurposeSection onNavigate={scrollToSection} />
        <CommitteesSection
          selectedCommitteeId={selectedCommitteeId}
          onNavigate={scrollToSection}
        />
        <JoinUsSection onSelectCommittee={handleSelectCommittee} />
        <ContactSection />
      </main>

      {/* Official Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectCommittee={handleSelectCommittee}
      />

      {/* Quick Search Modal (Cmd+K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={scrollToSection}
        onSelectCommittee={handleSelectCommittee}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
