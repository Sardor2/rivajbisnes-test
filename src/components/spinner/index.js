import React from 'react';

import {
  SpinnerOverlay,
  SpinnerContainer
} from './style';


const Spinner = (props) => (
  <SpinnerOverlay>
    <SpinnerContainer {...props}/>
  </SpinnerOverlay>
);

export default Spinner;
