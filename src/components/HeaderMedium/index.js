import React from 'react';

import Hashtags from '../HashtagsMedium/index';

import {
    HeaderStyled,
    HeadingMain
} from './styles';


const Header = () => (
    <HeaderStyled>
        <HeadingMain> Get smarter about what matters to you. </HeadingMain>
        <Hashtags />
    </HeaderStyled>
);

export default Header;
