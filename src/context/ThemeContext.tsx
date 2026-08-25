import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '../types';
import { safeStorage } from '../lib/storage';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = safeStorage.getItem('galipharm_theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Defaulting to the deep pharmaceutical dark theme that matches the brand
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      const body = document.body;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
        if (body) {
          body.classList.add('dark');
          body.classList.remove('light');
        }
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        if (body) {
          body.classList.remove('dark');
          body.classList.add('light');
        }
      }
      safeStorage.setItem('galipharm_theme', theme);
    } catch {
      // Safe fallback
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
