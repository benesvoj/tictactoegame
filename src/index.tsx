import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-size: cover;
    background-image: ${(p) => p.theme.background};
    font-family: ${(p) => p.theme.fontFamily};
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
