import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import product1Image from './Assets/image-1.jpeg';
import product2Image from './Assets/image-2.jpeg';
import product3Image from './Assets/image-3.jpeg';
import product4Image from './Assets/image-4.jpeg';
import product5Image from './Assets/image-5.jpeg';
import product6Image from './Assets/image-6.jpeg';

const products = [
  {
    image: product1Image,

  }, {
    image: product2Image,

  }, {
    image: product3Image,

  }, {
    image: product4Image,

  }, {
    image: product5Image,

  }, {
    image: product6Image,

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
  max-width: 1200px;
  margin: 0 auto;
`;


const App = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const handleEnquiryFormToggle = () => {
    setShowEnquiryForm((prev) => !prev);
  };
  return (
    <AppWrapper>
      <Navbar onEnquiryFormToggle={handleEnquiryFormToggle} />
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
      {/* <CssBaseline /> */}
      <EnquiryForm />
      <CssBaseline />

      <Footer />
    </AppWrapper>
  );
};

export default App;
