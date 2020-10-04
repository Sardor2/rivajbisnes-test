import React from 'react';
import {
  Container, Image, Title, Caption, Details
} from './style';

const Item = ({ image, title, duration }) => (
  <Container>
    <Image src={image || 'https://static.frontendmasters.com/thumb/savage-a/2020/05/12/3-90.jpg'} />
    <Details>
      <Title>{title}</Title>
      <Caption>{duration}</Caption>
    </Details>
  </Container>
);

export default Item;
