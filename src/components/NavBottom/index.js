import React from 'react';

import {
  StyledContainer,
  BrandContainer,
  TextWrapper,
  H,
  HR
} from './styles';


const NavBottom = () => (
  <StyledContainer>
    <BrandContainer>
      <span>
        Harvard
        {' '}
        <br />

        Business

        <br />
        {' '}
        Review
        {' '}
      </span>
    </BrandContainer>
    <TextWrapper>
      <H>About Us</H>
      {' '}
      <HR />
      <H>Careers</H>
      {' '}
      <HR />
      <H>Privacy Policy</H>
      {' '}
      <HR />
      <H>Copyright Information</H>
      {' '}
      <HR />
      <H>Trademark Policy</H>
      {' '}
      <HR />
      <br />
      <H>Harvard Business Publishing:  Higher Education</H>
      {' '}
      <HR />
      <H>Corporate Learning</H>
      {' '}
      <HR />
      <H>Harvard Business Review</H>
      {' '}
      <HR />
      <H>Harvard Business School</H>
      <H>Copyright © 2020 Harvard Business School Publishing. All rights reserved. Harvard Business Publishing is an affiliate of Harvard Business School.</H>
    </TextWrapper>
  </StyledContainer>
);

export default NavBottom;
