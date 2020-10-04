import React from 'react';

import {
  StyledContainer,
  Row,
  Heading
} from './styles';

import PopularTopicsCards from '../PopularTopicsCards/index';


const PopularTopicsSection = () => (
  <StyledContainer>
    <Heading>
      Popular
      <span>Topics</span>
    </Heading>
    <Row>
      <PopularTopicsCards />
    </Row>
  </StyledContainer>
);

export default PopularTopicsSection;
