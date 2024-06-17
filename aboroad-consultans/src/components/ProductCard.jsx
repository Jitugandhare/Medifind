import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  flex: 1;
  min-width: 200px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardBody = styled.div`
  padding: 10px 0;
`;

const CardTitle = styled.h5`
  font-size: 1.2em;
`;

const CardText = styled.p`
  font-size: 0.9em;
`;

const ProductCard = ({ image, title, description }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
