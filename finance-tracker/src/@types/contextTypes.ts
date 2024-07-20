import { ReactNode } from "react";

export type TThemeContext = {
  theme: boolean;
  toggleTheme: () => void;
};

export type TContextProps = {
  children: ReactNode;
};
