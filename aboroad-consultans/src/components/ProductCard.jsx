import React from 'react';
import styled from 'styled-components';



const Card = styled.div`
  margin: 20px;
  // border: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // padding: 20px;
  text-align: center;
  flex: 1;
  min-width: 250px;
  border-radius:10px;
  cursor:pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius:10px;
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
      {/* <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        
      </CardBody> */}
    </Card>
  );
};

export default ProductCard;
