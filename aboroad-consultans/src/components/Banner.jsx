import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const images = [
  'https://via.placeholder.com/800x300?text=Image+1',
  'https://via.placeholder.com/800x300?text=Image+2',
  'https://via.placeholder.com/800x300?text=Image+3'
];

const BannerWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BannerWrapper>
      <BannerImage src={images[currentImage]} alt="Banner" />
    </BannerWrapper>
  );
};

export default Banner;
