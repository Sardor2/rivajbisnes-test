import React from 'react';

import ButtonCustom from '../buttons/ButtonCustom';
import NavBottom from '../NavBottom';

import {
  StyledContainer,
  BrandContainer,
  Row1,
  ColTop1,
  ColTop2,
  Row2,
  ColBottom1,
  ColBottom2,
  HR,
  HrVertical,
  Section,
  Body,
  Title,
  H1,
  H2,
  Wrapper
} from './style';

import IconBrand from '../../assets/images/logo.png';
import IconFacebook from '../../assets/icons/facebook.svg';
import IconTwitter from '../../assets/icons/twitter.svg';
import IconInstagram from '../../assets/icons/instagram.svg';
import IconLinkedin from '../../assets/icons/linkedin.svg';
import IconWiFi from '../../assets/icons/wifi.svg';
import IconArrow from '../../assets/icons/next.svg';

const Footer = () => (
  <StyledContainer>
    <Row1>
      <ColTop1>
        <BrandContainer>
          <img src={IconBrand} alt="icon-brand" />
        </BrandContainer>
      </ColTop1>
    </Row1>
    <Row2>
      <Section>
        <HrVertical />
        <Body>
          <Title>
            Explore  BiznesRivoj
            <img src={IconArrow} alt="icon-arrow" />
          </Title>
          <H1>Yangiliklar</H1>
          <H1>Most Popular</H1>
          <H1>All Topics</H1>
          <H1>Magazine Archive</H1>
          <H1>The Big Idea</H1>
          <H1>Reading Lists</H1>
          <H1>Case Selections</H1>
          <H1>Video</H1>
          <H1>Podcasts</H1>
          <H1>Webinars</H1>
          <H1>Visual Library</H1>
          <H1>My Library</H1>
          <H1>Newsletters</H1>
          <H1>HBR Ascend</H1>
        </Body>
      </Section>
      <Section>
        <HrVertical />
        <Body>
          <Title>
            About BiznesRivoj
            <img src={IconArrow} alt="icon-arrow" />
          </Title>
          <H1>Contact Us</H1>
          <H1>Advertise With Us</H1>
        </Body>
      </Section>
      <Section>
        <HrVertical />
        <Body>
          <Title>
            BiznesRivoj Customer Assistance
            <img src={IconArrow} alt="icon-arrow" />
          </Title>
          <H1>Contact Center</H1>
          <H1>
            International:
            <br />
            phone number
          </H1>
          <H1>
            Email:
            <br />
            customerservice@harvard.com
          </H1>
          <H1>Copyright Permissions</H1>
        </Body>
      </Section>
      <Section>
        <HrVertical />
        <Body>
          <Title>
            Follow BiznesRivoj
          </Title>
          <Wrapper>
            <H2>
              <img src={IconFacebook} alt="icon-facebook" />
              Facebook
            </H2>
            <H2>
              <img src={IconTwitter} alt="icon-twitter" />
              Twitter
            </H2>
            <H2>
              <img src={IconLinkedin} alt="icon-linkedin" />
              LinkedIn
            </H2>
            <H2>
              <img src={IconInstagram} alt="icon-instagram" />
              Instagram
            </H2>
            <H2>
              <img src={IconWiFi} alt="icon-wifi" />
              Your Newsreader
            </H2>
          </Wrapper>
        </Body>
      </Section>
    </Row2>
  </StyledContainer>
);

export default Footer;
