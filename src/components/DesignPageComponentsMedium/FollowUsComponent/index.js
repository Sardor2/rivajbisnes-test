import React from 'react';

import {
  FollowUsStyled,
  Title,
  H1,
  H2
} from './styles';

import ButtonPrimary from '../../ButtonPrimaryMedium/index';

const FollowUs = () => (
  <FollowUsStyled>
    <Title>
      Design
    </Title>
    <H2>
      Below the surface.
    </H2>
    <ButtonPrimary btnFollowGreen>Follow</ButtonPrimary>
    <H1>
      Follow to get great stories about Design in your inbox and on your homepage
    </H1>
  </FollowUsStyled>
);

export default FollowUs;
