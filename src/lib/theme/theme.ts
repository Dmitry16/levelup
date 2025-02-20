import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

// Extend the Theme interface
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // Extend the ThemeOptions interface (for theme creation)
  interface ThemeOptions {
    status?: {
      danger: string;
    };
  }
}

const themeOptions: ThemeOptions = {
  status: {
    danger: '#ff1744',
  },
};

const theme = createTheme(themeOptions);

export default theme;
