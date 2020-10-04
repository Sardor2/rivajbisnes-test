import React from 'react';
import { Container } from './style';

// eslint-disable-next-line react/jsx-props-no-spreading, react/prop-types
export default ({ children, ...other }) => <Container {...other}>{children}</Container>;
