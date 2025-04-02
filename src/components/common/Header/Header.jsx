import React from 'react';
import { HeaderWrapper, Nav, Logo, NavLinks, StyledNavLink, UserActions } from './Header.styles';
import { screen, setScreen } from '../../../states';

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">BookLog</Logo>
        <NavLinks>
          <StyledNavLink onClick={setScreen(1)} end>
            Home
          </StyledNavLink>
          <StyledNavLink onClick={setScreen(2)}>
            Livros
          </StyledNavLink>
          <StyledNavLink onClick={setScreen(3)}>
            Escreva
          </StyledNavLink>
        </NavLinks>
        <UserActions>
          <StyledNavLink onClick={setScreen(4)}>
            Logar
          </StyledNavLink>
          <StyledNavLink onClick={setScreen(5)}>
            Inscreva-se
          </StyledNavLink>
        </UserActions>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header; 