import React from 'react';

import {
  FollowUsStyled,
  Title,
  H1,
  H2,
  Row1,
  Row2
} from './styles';

import ButtonPrimary from '../../ButtonPrimaryMedium/index';

const FollowUsHorizontal = () => (
  <FollowUsStyled>
    <Row1>
      <Title>
        Design
      </Title>
      <ButtonPrimary btnFollowGreen>Follow</ButtonPrimary>
    </Row1>
    <Row2>
      <H2>
        Below the surface.
      </H2>
      <H1>
        Follow to get great stories about Design in your inbox and on your homepage
      </H1>
    </Row2>
  </FollowUsStyled>
);

export default FollowUsHorizontal;
