import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider, GlobalStyles } from '@mui/material';
import theme from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: { margin: 0 },
          }} />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

