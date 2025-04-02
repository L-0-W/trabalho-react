import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 130px;
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.02);
  }
`;

export const CoverImage = styled.img`
  width: 130px;
  height: 195px;
  object-fit: cover;
  border-radius: 3px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const BookInfo = styled.div`
  text-align: left;
  padding: 0;
`;

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`;

export const Author = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`;

export const Rating = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: ${({ theme }) => theme.colors.rating};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 4px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.6;
`; 