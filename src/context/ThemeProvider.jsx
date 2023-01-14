import React, { useContext, useState } from 'react';
import { changeCssVariables } from 'services/changeCssVariables';
// import style from './ThemeProvider.module.css'
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEUTRAL = 'neutral';

export const ThemeContext = React.createContext(THEME_NEUTRAL);
export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState();
  const change = (name) => {
    setTheme(name);
    changeCssVariables(name);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
