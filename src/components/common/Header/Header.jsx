import React from 'react';
import { HeaderWrapper, Nav, Logo, NavLinks, StyledNavLink, UserActions } from './Header.styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">BookLog</Logo>
        <NavLinks>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/books">
            Books
          </StyledNavLink>
          <StyledNavLink to="/diary">
            Diary
          </StyledNavLink>
        </NavLinks>
        <UserActions>
          <StyledNavLink to="/login">
            Login
          </StyledNavLink>
          <StyledNavLink to="/signup">
            Sign Up
          </StyledNavLink>
        </UserActions>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header; 