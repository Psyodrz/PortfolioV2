// src/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const isDark = theme === 'dark';
  
  const colors = {
    bg: isDark ? '#070707' : '#F0EBE0',
    fg: isDark ? '#F0EBE0' : '#070707',
    accent: '#FF3D00',
    accentB: isDark ? '#FFD600' : '#E6A800',
    border: isDark ? 'rgba(240,235,224,0.10)' : 'rgba(7,7,7,0.12)',
    muted: isDark ? 'rgba(240,235,224,0.38)' : 'rgba(7,7,7,0.42)',
    card: isDark ? 'rgba(240,235,224,0.03)' : 'rgba(7,7,7,0.05)'
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
