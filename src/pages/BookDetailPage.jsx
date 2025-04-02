import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large} 0;
`;

const BookHeader = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CoverImage = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const BookInfo = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Author = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.link};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Rating = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const BookDetailPage = () => {
  const { id } = useParams();
  
  // Mock data - replace with actual API call later
  const book = {
    id,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverUrl: 'https://via.placeholder.com/300x450?text=The+Great+Gatsby',
    rating: '4.5',
    description: 'The story of decadence and excess, Gatsby explores darker aspects of the Jazz Age, including decadence, idealism, social upheaval, and excess. It creates a portrait of the Roaring Twenties that has been described as a cautionary tale regarding the American Dream.'
  };

  return (
    <DetailContainer>
      <BookHeader>
        <CoverImage src={book.coverUrl} alt={book.title} />
        <BookInfo>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
          <Rating>★ {book.rating}</Rating>
          <Description>{book.description}</Description>
        </BookInfo>
      </BookHeader>
    </DetailContainer>
  );
};

export default BookDetailPage;
