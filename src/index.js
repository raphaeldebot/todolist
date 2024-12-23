// src/index.js

import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
