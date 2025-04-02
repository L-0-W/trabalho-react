import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, CoverImage, BookInfo, Title, Author, Rating } from './BookCard.styles';

const BookCard = ({ book }) => {
  const { id, title, author, coverUrl, rating } = book;

  return (
    <Link to={`/book/${id}`} style={{ textDecoration: 'none' }}>
      <CardWrapper>
        <CoverImage 
          src={coverUrl} 
          alt={`Cover for ${title}`}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150x220?text=No+Cover';
          }}
        />
        {rating && <Rating>{rating}</Rating>}
        <BookInfo>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </BookInfo>
      </CardWrapper>
    </Link>
  );
};

export default BookCard; 