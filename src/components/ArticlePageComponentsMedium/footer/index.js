import React from 'react';

import {
  FooterStyled,
  Row1,
  Row2,
  TextWrapper,
  Title,
  P,
  HR,
  Brand,
  NavbarBottom,
  H1
} from './styles';


const Footer = () => (
  <FooterStyled>
    <Row1>
      <TextWrapper>
        <Title>Discover Medium</Title>
        <P>
          Welcome to a place where words matter.
          On Medium, smart voices and original
          ideas take center stage - with no ads in sight.
          <span> Watch</span>
        </P>
      </TextWrapper>
      <TextWrapper>
        <Title>Make Medium Yours</Title>
        <P>
          Follow all the topics you care about,
          and we’ll deliver the best stories
          for you to your homepage and inbox.
          <span> Explore</span>
        </P>
      </TextWrapper>
      <TextWrapper>
        <Title>Become a Member</Title>
        <P>
          Get unlimited access to the best stories on
          Medium — and support writers while you’re at
          it. Just $5/month.
          <span> Upgrade</span>
        </P>
      </TextWrapper>
    </Row1>
    <HR />
    <Row2>
      <Brand>Medium</Brand>
      <NavbarBottom>
        <H1>About</H1>
        <H1>Help</H1>
        <H1>Legal</H1>
      </NavbarBottom>
    </Row2>
  </FooterStyled>
);

export default Footer;
