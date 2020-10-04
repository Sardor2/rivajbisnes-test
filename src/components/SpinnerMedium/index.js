import React from 'react';

import {
  SpinnerWrapper,
  SpinnerItem
} from './style';

export const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerItem customStyles="" />
    <SpinnerItem customStyles={`
            width:90px;
            height:90px;
            left:50.35%;
            top:50.7%;
            animation-delay:.2s;
        `}
    />
    <SpinnerItem customStyles={`
            width:80px;
            height:80px;
            left:50.70%;
            top:51.4%;
            animation-delay:.4s;
        `}
    />
    <SpinnerItem customStyles={`
            width:70px;
            height:70px;
            left:51.05%;
            top:52.1%;
            animation-delay:.6s;
        `}
    />
    <SpinnerItem customStyles={`
            width:60px;
            height:60px;
            left:51.40%;
            top:52.8%;
            animation-delay:.8s;
        `}
    />
  </SpinnerWrapper>
);
