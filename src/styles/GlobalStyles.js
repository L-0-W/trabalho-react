import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 500;
    line-height: 1.2;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    padding: 0;

    &:focus {
      outline: none;
    }
  }

  input {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyles; 