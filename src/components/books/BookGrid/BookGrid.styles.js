import styled from 'styled-components';

export const GridContainer = styled.div`
  gap: 14px 16px;
  padding: 16px 0;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
`; 