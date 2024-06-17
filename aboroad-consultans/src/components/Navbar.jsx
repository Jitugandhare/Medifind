import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  font-size: 1.5em;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

const NavItem = styled.li`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Brand>E-Commerce</Brand>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Products</NavItem>
          <NavItem>Contact</NavItem>
        </NavList>
      </Container>
    </Nav>
  );
};

export default Navbar;
