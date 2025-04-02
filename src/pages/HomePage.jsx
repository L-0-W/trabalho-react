import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookGrid from '../components/books/BookGrid/BookGrid';
import BookDetailPage from './BookDetailPage';
import { data } from 'react-router-dom';

const HomeContainer = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.large};
`;

const WelcomeSection = styled.section`
  text-align: center;
  margin: 60px auto;
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
  text-align: center;
`;

// Mock data for featured books


const HomePage = () => {
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

  return (
    <HomeContainer>
      <WelcomeSection>
        <Title>Bem Vindo a BookLog</Title>
        <Subtitle>
          Rastreie sua jornada de leituras, descubra novos livros, e compartilhe seus pensamentos para os amigos leitores 
        </Subtitle>
      </WelcomeSection>
      
      <BooksSection>
        <SectionTitle>Novos Livros</SectionTitle>
        <BookGrid books={featuredBooks} />
      </BooksSection>
    </HomeContainer>
  );
};

export default HomePage; 