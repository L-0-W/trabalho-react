import React, { useState } from 'react';
import styled from 'styled-components';
import BookGrid from '../components/books/BookGrid/BookGrid';

const HomeContainer = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.large};
`;

const WelcomeSection = styled.section`
  text-align: center;
  margin: 60px auto;
  max-width: 950px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const BooksSection = styled.section`
  width: 100%;
  margin: 0;
  padding: 0;
`;

// Mock data for featured books
const MOCK_BOOKS = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverUrl: 'https://via.placeholder.com/130x195?text=The+Great+Gatsby',
    rating: '4.5'
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    coverUrl: 'https://via.placeholder.com/130x195?text=1984',
    rating: '4.8'
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverUrl: 'https://via.placeholder.com/130x195?text=To+Kill+a+Mockingbird',
    rating: '4.7'
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverUrl: 'https://via.placeholder.com/130x195?text=Pride+and+Prejudice',
    rating: '4.6'
  }
];

const HomePage = () => {
  const [featuredBooks] = useState(MOCK_BOOKS);

  return (
    <HomeContainer>
      <WelcomeSection>
        <Title>Welcome to BookLog</Title>
        <Subtitle>
          Track your reading journey, discover new books, and share your thoughts with fellow readers.
        </Subtitle>
      </WelcomeSection>

      <BooksSection>
        <SectionTitle>Featured Books</SectionTitle>
        <BookGrid books={featuredBooks} />
      </BooksSection>
    </HomeContainer>
  );
};

export default HomePage; 