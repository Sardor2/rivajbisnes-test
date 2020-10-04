import React from 'react';

import {
    StyledContainer,
    ImageWrapper,
    TextWrapper,
    P
} from './styles';

import {
    AuthorNameBlue,
    ArticleType
} from '../constant.styles';

import ImageWriter from '../../assets/images/writer.image.jpg';

const WritersProfile = () => (
    <StyledContainer>
        <ImageWrapper>
            <img src={ImageWriter} alt="writer"/>
        </ImageWrapper>
        <TextWrapper>
            <P>
                <AuthorNameBlue><span>Thomas Y. Choi </span></AuthorNameBlue>
                is executive director of <ArticleType lowercase >CAPS Research</ArticleType> and Fearon 
                chaired professor of supply chain management at 
                Arizona State University’s W. P. Carey School of 
                Business.
            </P>
        </TextWrapper>
    </StyledContainer>
);

export default WritersProfile;
