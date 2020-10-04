import React from 'react';
import { Container, Input, InputBorder } from './style';

export default (props) => (
  <Container>
    <Input {...props} />
    <InputBorder />
  </Container>
);
