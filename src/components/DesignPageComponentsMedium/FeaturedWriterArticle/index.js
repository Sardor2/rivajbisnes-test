import React from 'react';

import {
    StyledContainer,
    TextWrapper,
    Heading,
    TimeOfReading,
    ImageWrapper
} from './styles';

import Image from '../../../assets/images/cartoon6.jpg';

const FeaturedWriterArticle = () => (
    <StyledContainer>
        <ImageWrapper>
            <img src={Image} alt="article"/>
        </ImageWrapper>
        <TextWrapper>
            <Heading>
                The ultimate guide to proper use of animation in UX
            </Heading>
            <TimeOfReading>
                17min
            </TimeOfReading>
        </TextWrapper>
    </StyledContainer>
);

export default FeaturedWriterArticle;
