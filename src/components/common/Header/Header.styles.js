import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  height: 72px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.large};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.large};
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.small} 0;
  margin-right: ${({ theme }) => theme.spacing.large};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;
  flex: 1;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  padding: ${({ theme }) => theme.spacing.small} 0;
  position: relative;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-left: auto;
`; 