import React from 'react';

import {
    NavBottomStyled,
    Row1,
    Row2,
    H1
} from './styles';

const NavBottom = () => (
    <NavBottomStyled>
        <Row1>
            <H1>Help</H1>
            <H1>Status</H1>
            <H1>Writers</H1>
            <H1>Blog</H1>
            <H1>Careers</H1>
        </Row1>
        <Row2>
            <H1>Privacy</H1>
            <H1>Terms</H1>
            <H1>About</H1>
        </Row2>
    </NavBottomStyled>

);


export default NavBottom;
