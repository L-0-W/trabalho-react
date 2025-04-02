import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './constants/theme';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import { HeaderWrapper, Nav, Logo, NavLinks, StyledNavLink, UserActions } from '../src/components/common/Header/Header.styles';

function App() {
  const [screen, setScreen] = useState(1);


  const Header = () => {
    return (
      <HeaderWrapper>
        <Nav>
          <Logo to="/">BookLog</Logo>
          <NavLinks>
            <StyledNavLink onClick={() => {setScreen(1)}} end>
              Home
            </StyledNavLink>
            <StyledNavLink onClick={() => {setScreen(2)}}>
              Livros
            </StyledNavLink>
          </NavLinks>
          <UserActions>
            <StyledNavLink onClick={() => {setScreen(4)}}>
              Logar
            </StyledNavLink>
            <StyledNavLink onClick={() => {setScreen(5)}}>
              Inscreva-se
            </StyledNavLink>
          </UserActions>
        </Nav>
      </HeaderWrapper>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        {screen === 1 ? (
        <HomePage />
      ) : screen === 2 ? (
        <BooksPage />
      ) : (
        <HomePage />
      )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
