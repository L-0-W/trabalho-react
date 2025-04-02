import React, { useState } from 'react';
import styled from 'styled-components';
import BookGrid from '../components/books/BookGrid/BookGrid';

const BooksContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px ${({ theme }) => theme.spacing.large};
`;

const SearchSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 950px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};
`;

// Mock data for books
const MOCK_BOOKS = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverUrl: 'https://via.placeholder.com/150x220?text=The+Great+Gatsby',
    rating: '4.5'
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    coverUrl: 'https://via.placeholder.com/150x220?text=1984',
    rating: '4.8'
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverUrl: 'https://via.placeholder.com/150x220?text=To+Kill+a+Mockingbird',
    rating: '4.7'
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverUrl: 'https://via.placeholder.com/150x220?text=Pride+and+Prejudice',
    rating: '4.6'
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    coverUrl: 'https://via.placeholder.com/150x220?text=The+Catcher+in+the+Rye',
    rating: '4.3'
  },
  {
    id: '6',
    title: 'Animal Farm',
    author: 'George Orwell',
    coverUrl: 'https://via.placeholder.com/150x220?text=Animal+Farm',
    rating: '4.4'
  }
];

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books] = useState(MOCK_BOOKS);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BooksContainer>
      <Title>Browse Books</Title>
      <SearchSection>
        <SearchInput
          type="text"
          placeholder="Search books by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchSection>
      <BookGrid books={filteredBooks} />
    </BooksContainer>
  );
};

export default BooksPage; 