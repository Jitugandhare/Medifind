import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const images = [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',

];

const BannerWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const BannerImage = styled.img`
  width: 30%;
  max-height: 2%;
  object-fit: cover;
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
