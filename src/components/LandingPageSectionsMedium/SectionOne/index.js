import React from 'react';

import {
    SectionOneStyled,
    H2Bold,
    H1,
    H2,
    HeadingWrapper,
    Sqr,
    H2Bold2
} from './styles';

import ButtonPrimary from '../../ButtonPrimaryMedium/index';

import TickIcon from '../../../assets/icons/check-mark-32.png';


const SectionOne = () => (
    <>
        <SectionOneStyled>
            <H2Bold>
                Select what you're into. We'll help you find great things to read.
            </H2Bold>
            < ButtonPrimary primaryBig>Get started</ButtonPrimary>
            <H1>Already have an account? <span>Sign in.</span> </H1>
            <HeadingWrapper>
                <H2><Sqr> <img src={TickIcon} alt="tick-icon"/> </Sqr>World-class publications.</H2>
                <H2><Sqr> <img src={TickIcon} alt="tick-icon"/> </Sqr>Undiscovered voices.</H2>
                <H2><Sqr> <img src={TickIcon} alt="tick-icon"/> </Sqr>Topics you love.</H2>
                <H2Bold2>All on Medium, all for you.</H2Bold2>
            </HeadingWrapper>
        </SectionOneStyled>
    </>
);


export default SectionOne;
