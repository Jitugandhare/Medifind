// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 40px;
  }
`;

const FooterSection = styled.div`
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <p>&copy; 2024 My Company</p>
      </FooterSection>
      <FooterSection>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
        <FooterLink href="#">Contact Us</FooterLink>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
