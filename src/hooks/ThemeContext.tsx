import React, { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getValue, setValue } = useLocalStorage<Theme>("theme", "light");
  const [theme, setTheme] = useState<Theme>(getValue());

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setValue(theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, setValue]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
};
