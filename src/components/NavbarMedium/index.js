import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

import ButtonPrimary from '../ButtonPrimaryMedium/index';

import {
  StyledNavbar,
  StyledNav,
  StyledLink,
  ButtonWrapper,
  BrandWrapper
} from './styles';

import BrandLogo from '../../assets/images/asset6.JPG';


const NavbarMain = () => (
  <>
    <StyledNavbar className="navbar">
      <BrandWrapper>
        <Navbar.Brand href="#home">
          {' '}
          <img src={BrandLogo} alt="brand-logo" />
          {' '}
          <span>Medium</span>
          {' '}
        </Navbar.Brand>

      </BrandWrapper>
      <StyledNav className="ml-auto nav-items">
        <StyledLink>
          <Nav.Link href="#home">Subscribe</Nav.Link>
          {' '}
        </StyledLink>
        <StyledLink>
          <Nav.Link href="#features">Write</Nav.Link>
          {' '}
        </StyledLink>
        <StyledLink>
          <Nav.Link href="#pricing">Sign in</Nav.Link>
          {' '}
        </StyledLink>
        <ButtonWrapper>
          <ButtonPrimary>Get started</ButtonPrimary>
        </ButtonWrapper>
      </StyledNav>
    </StyledNavbar>
  </>
);


export default NavbarMain;
