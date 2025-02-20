import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import theme from "../../lib/theme/theme";

interface UIServiceProviderProps {
  children: ReactNode;
}

export const UIServiceProvider = ({ children }: UIServiceProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
