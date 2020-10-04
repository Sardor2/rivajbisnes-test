import React from 'react';

import {
    HeadingMain,
    SectionFourStyled
} from './styles';

import ButtonPrimary from '../../ButtonPrimaryMedium/index';


const SectionFour = () => (
    <>
    <SectionFourStyled>
        <HeadingMain>
            Expand your reading.<br/>
            Expand your mind.
            </HeadingMain>
        < ButtonPrimary primaryBig>Get started</ButtonPrimary>
    </SectionFourStyled>
    </>
);

export default SectionFour;
