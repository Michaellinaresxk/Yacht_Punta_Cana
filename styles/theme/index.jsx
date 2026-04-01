import { createTheme } from '@mui/material/styles';

export const Colors = {
  // Dark luxury maritime — brand blues kept as primary accent
  deep_navy: '#06101e',
  navy: '#0a1829',
  navy_mid: '#0e2040',
  navy_card: '#0d1e38',

  // Brand blues (unchanged)
  primary: '#154875',
  first_blue: '#0c71e0',
  second_blue: '#0859c6',
  soft_blue: '#10a5f5',
  blur_blue: '#2c74bc',

  // Subtle gold — decorative trim only
  gold: '#c9a84c',
  gold_subtle: 'rgba(201, 168, 76, 0.15)',

  // Text
  white: '#ffffff',
  off_white: '#eef2f8',
  text_muted: 'rgba(220, 232, 248, 0.55)',

  // Legacy aliases so existing components work without changes
  secondary: '#10a5f5',
  title: '#eef2f8',
  body: '#06101e',
  alt_color: 'rgba(12, 113, 224, 0.1)',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Colors.first_blue,
      contrastText: Colors.white,
    },
    secondary: {
      main: Colors.soft_blue,
    },
    background: {
      default: Colors.deep_navy,
      paper: Colors.navy_card,
    },
    text: {
      primary: Colors.off_white,
      secondary: Colors.text_muted,
    },
    first_blue: { main: Colors.first_blue },
    second_blue: { main: Colors.second_blue },
    title: { main: Colors.off_white },
    body: { main: Colors.deep_navy },
    white: { main: Colors.white },
    alt: { main: Colors.alt_color },
  },
  typography: {
    fontFamily: '"Raleway", "Roboto", "Helvetica Neue", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 600, letterSpacing: '-0.01em' },
    h3: { fontWeight: 600 },
    button: { letterSpacing: '0.05em' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: Colors.deep_navy,
          color: Colors.off_white,
          '&::-webkit-scrollbar': { width: '5px' },
          '&::-webkit-scrollbar-track': { background: Colors.deep_navy },
          '&::-webkit-scrollbar-thumb': {
            background: Colors.navy_mid,
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': { background: Colors.first_blue },
        },
      },
    },
    MuiButton: {
      styleOverrides: { root: { textTransform: 'none', borderRadius: 8 } },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundColor: Colors.navy_card, backgroundImage: 'none' },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
  },
});
