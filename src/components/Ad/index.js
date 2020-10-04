/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyledContainer, TextWrapper } from './style';

const Ad = (props) => (
  <StyledContainer {...props}>
    <TextWrapper>
      <span>reklama</span>
    </TextWrapper>
  </StyledContainer>
);

export default Ad;
