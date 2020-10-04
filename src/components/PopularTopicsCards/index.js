import React from 'react';

import {
  StyledContainer,
  TextWrapper,
  Heading,
  Cards,
  CardsHide,
  P,
  BtnWrapper
} from './styles';


import ButtonString from '../buttons/ButtonString/index';


const PopularTopicsCards = () => (
  <StyledContainer>
    <Cards>
      <BtnWrapper right>
        <ButtonString homePageBtn exchangeBtn />
      </BtnWrapper>
      <TextWrapper>
        <Heading>MARKETING</Heading>
        <P>How well do you know your customers?</P>
      </TextWrapper>
      <BtnWrapper center>
        <ButtonString homePageBtn />
      </BtnWrapper>
    </Cards>
    <CardsHide>
      <BtnWrapper right>
        <ButtonString homePageBtn exchangeBtn />
      </BtnWrapper>
      <TextWrapper>
        <Heading>DECISION MAKING</Heading>
        <P>Balancing data, experience, and intuition.</P>
      </TextWrapper>
      <BtnWrapper center>
        <ButtonString homePageBtn />
      </BtnWrapper>
    </CardsHide>
    <CardsHide>
      <BtnWrapper right>
        <ButtonString homePageBtn exchangeBtn />
      </BtnWrapper>
      <TextWrapper>
        <Heading>ENTREPRENEURSHIP</Heading>
        <P>In start-ups and established companies.</P>
      </TextWrapper>
      <BtnWrapper center>
        <ButtonString homePageBtn />
      </BtnWrapper>
    </CardsHide>
  </StyledContainer>
);

export default PopularTopicsCards;
