// src/GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.main};
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.main};
  }

  h1 {
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing.large};
  }
`;

export default GlobalStyle;
