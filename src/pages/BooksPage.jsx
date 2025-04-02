import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookGrid from '../components/books/BookGrid/BookGrid';

const BooksContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 950px;
`;

const SearchInput = styled.input`
  width: 50vw;
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

const BooksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [featuredBooks, setFet] = useState([
    {id: '1', title: '1998', author: 'Luiz'}
  ]);
  const [ids, setIds] = useState(2);



  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&orderBy=relevance&maxResults=10')
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          console.log(data.items.length)
          for(let i = 0; i < data.items.length; i++){
            let skip = false;
            for (let i = 0; i < featuredBooks.length; i++){
              if (featuredBooks[i].title == data.items[i].volumeInfo.title){
                skip = true;
              }
              
            }

            if (skip){
              continue;
            }
            
            const newBook = {
              id: Math.floor(Math.random() * 10000), 
              title: data.items[i].volumeInfo.title, 
              author: data.items[i].volumeInfo.authors[0], 
              coverUrl: data.items[i].volumeInfo.imageLinks?.smallThumbnail || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fno-thumbnail-image-vector-graphic-vector-id1147544810%3Fk%3D6%26m%3D1147544810%26s%3D612x612%26w%3D0%26h%3DLLdG9L4tfdum-uXqfrsw6VGkmQkw2Y_BnL9bYGczsfk%3D&f=1&nofb=1&ipt=05b0afa9a0a60aad45b5e2915971dfef517794ec69ae08c3f92216d630ba82f1&ipo=images", 
              rating: String(data.items[i].volumeInfo.averageRating)
            }

            setFet((prevBooks) => [...prevBooks, newBook]); 
            setIds((prev) => prev + 1)
          }

      })
      .catch((err) => {
          console.log(err.message);
      });
}, []);

  const filteredBooks = featuredBooks.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BooksContainer>
      <Title>Pesquisar Livros</Title>
      <SearchSection>
        <SearchInput
          type="text"
          placeholder="Pesquisar livros por autor ou titulo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchSection>
      <BookGrid books={filteredBooks} />
    </BooksContainer>
  );
};

export default BooksPage; 