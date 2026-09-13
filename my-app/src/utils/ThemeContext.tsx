import { createContext, useContext, useMemo, useState } from "react";

const defaultContext = {};

// 1. Create a Context
const ThemeContext = createContext(defaultContext);

// 2. Create a Provider
export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  const value = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}