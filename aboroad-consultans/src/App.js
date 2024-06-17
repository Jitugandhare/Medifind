import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

const products = [
  {
    image: 'https://via.placeholder.com/200',
    title: 'Product 1',
    description: 'This is a description of product 1.'
  },
  {
    image: 'https://via.placeholder.com/200',
    title: 'Product 2',
    description: 'This is a description of product 2.'
  },
  {
    image: 'https://via.placeholder.com/200',
    title: 'Product 3',
    description: 'This is a description of product 3.'
  }
];

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ProductsSection = styled.div`
  padding: 20px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Banner />
      <ProductsSection>
        <Container>
          <h2>Products</h2>
          <CardDeck>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ))}
          </CardDeck>
        </Container>
      </ProductsSection>
      <EnquiryForm />
      <Footer />
    </AppWrapper>
  );
};

export default App;
