import { createTheme } from '@mui/material/styles';

export const Colors = {
  dark: '#0a0a0a',
  accent: '#3C948B',
  light: '#fff',
  yellow: '#faaf00'
};

const theme = createTheme({
  palette: {
    primary: { main: Colors.accent }
  },
  typography: {
    fontFamily: 'open sans',
    h1: {
      fontWeight: 500,
      fontSize: '42px'
    },
    h2: {
      fontWeight: 500,
      fontSize: '18px',
      textAlign: 'center'
    },
  }
});

export default theme;