import React from 'react';
import BookCard from '../BookCard/BookCard';
import { GridContainer, EmptyState } from './Book.styles';

const BookGrid = ({ books }) => {
  if (!books || books.length === 0) {
    return (
      <EmptyState>
        <p>No books found.</p>
      </EmptyState>
    );
  }

  return (
    <GridContainer>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </GridContainer>
  );
};

export default BookGrid; 