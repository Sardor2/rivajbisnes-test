import React from 'react';

import { Container } from 'react-bootstrap';

import BrandImage from '../../assets/images/asset7.JPG';
import IphoneButton from '../../assets/images/iPhone.png';
import GooglePlay from '../../assets/images/GooglePlay.png';

import {
  FooterMain,
  H1,
  H2,
  H6,
  Row1,
  Row2,
  Wrapper,
  Image1,
  Image2,
  H2Light
} from './styles';


const Footer = () => (
  <FooterMain>
    <Container>
      <img src={BrandImage} alt="brand" />
      <Row1>
        <H1>Get Started</H1>
        <H1>Subscribe</H1>
        <H2>Have an account?</H2>
        <H1>Sign in</H1>
      </Row1>
      <Row2>
        <H1>About Medium</H1>
        <H1>Write</H1>
        <H1>Gift</H1>
        <H1>Help</H1>
        <H1>Press Contacts</H1>
        <H1>Careers</H1>
        <H1>Legal</H1>
      </Row2>
      <H6>© 2019, A Medium Corporation</H6>

      <Wrapper>
        <H2Light>Get the Medium app</H2Light>
        <Image1><img src={IphoneButton} alt="iPhone" /></Image1>
        <Image2><img src={GooglePlay} alt="iPhone" /></Image2>
      </Wrapper>
    </Container>
  </FooterMain>
);

export default Footer;
