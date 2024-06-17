import React from 'react';
import styled from 'styled-components';
import Logo from '../Assets/logo/WhatsApp Image 2024-06-17 at 12.44.23 PM (1).jpeg';

const Nav = styled.nav`
  background-color: #000080;
  color: white;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 80px;
  margin-right: 10px;
  border-radius:15px;
  width: 100px;
`;

const BrandName = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Brand>
          <LogoImage src={Logo} alt="Logo" />
          {/* <BrandName>Brand Name</BrandName> */}
        </Brand>
        {/* <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Products</NavItem>
          <NavItem>Contact</NavItem>
        </NavList> */}
      </Container>
    </Nav>
  );
};

export default Navbar;
