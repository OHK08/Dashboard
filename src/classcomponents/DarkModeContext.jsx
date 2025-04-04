import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
