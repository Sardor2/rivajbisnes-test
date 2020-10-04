import React from 'react';

import { Container } from 'react-bootstrap';

import ButtonPrimary from '../../ButtonPrimaryMedium/index';

import {
    SectionTwoStyled,
    HeadingMain2,
    H2,
    ButtonHolder,
    H2Bold3,
    HR,
    P,
    Row1
} from './styles';


const SectionTwo = () => (
    <SectionTwoStyled>
        <Container>
            <HeadingMain2>No ads. No problems.</HeadingMain2>
                <H2>Your privacy stays yours. We don’t sell your data or target you with ads. Ever.</H2>
                    <Row1>
                        <ButtonHolder>< ButtonPrimary primaryBig>Get stated</ButtonPrimary></ButtonHolder>
                            <P>  <H2Bold3>We do things differently.</H2Bold3> Medium is not like any other platform on the internet. <span>Our sole purpose is to help you find compelling ideas, knowledge, and perspectives.</span> We don’t serve ads—we serve you, the curious reader who loves to learn new things. Medium is home to thousands of independent voices, and we combine humans and technology to find the best reading for you—and filter out the rest.</P>
                    </Row1>
                    <HR/>
                        
                    
                            
        </Container>
    </SectionTwoStyled>
);

export default SectionTwo;
