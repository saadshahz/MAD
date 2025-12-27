import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

/* -----------------------------
   Context Type
----------------------------- */
interface ThemeContextType {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

/* -----------------------------
   Create Context
----------------------------- */
export const ThemeContext = createContext<ThemeContextType | null>(null);

/* -----------------------------
   Provider Props
----------------------------- */
interface ThemeProviderProps {
  children: ReactNode;
}

/* -----------------------------
   Provider
----------------------------- */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
