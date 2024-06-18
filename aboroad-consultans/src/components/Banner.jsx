// Banner.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { slideData } from './SlideData';

const BannerWrapper = styled.div`
  text-align: center;
  margin: 2px;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  // background-color: rgba(0, 0, 0, 0.5); /* Optional: For better text visibility */
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2a635c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d473f;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
  color: black;
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${props => (props.active ? '#333' : '#bbb')};
  border-radius: 50%;
  display: inline-block;
`;

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, buttonText, paragraphText } = slideData[currentImage];

  return (
    <BannerWrapper>
      <BannerImage src={image} alt="Banner" />
      <ContentWrapper>
        <Paragraph>{paragraphText}</Paragraph>
        <Button>{buttonText}</Button>

      </ContentWrapper>
      <DotsWrapper>
        {slideData.map((_, index) => (
          <Dot key={index} active={index === currentImage} />
        ))}
      </DotsWrapper>
    </BannerWrapper>
  );
};

export default Banner;
