import React from 'react';

import { HeadingBig, SecondaryText, AuthorNameBlue } from '../constant.styles';

import {
  StyledContainer,
  Main,
  AsideRight,
  TextWrapper,
  ImageWrapper
} from './styles';

import ArticleMain from '../ArticleMain/index';
import ArticleImage from '../../assets/images/asset-5.jpeg';

const HomePageHeader = () => (
  <StyledContainer>
    <Main>
      <TextWrapper>
        <HeadingBig>How Bad Times Bring Out the Best in People</HeadingBig>
        <SecondaryText>Lessons from one local bank’s response to Hurricane Katrina.</SecondaryText>
        <AuthorNameBlue>By Bill Taylor</AuthorNameBlue>
      </TextWrapper>
      <ImageWrapper>
        <img src={ArticleImage} alt="article" />
      </ImageWrapper>
    </Main>
    <AsideRight>
      <ArticleMain authorNameBlack imageHide />
      <ArticleMain authorNameBlack imageHide />
      <ArticleMain authorNameBlack imageHide />
    </AsideRight>
  </StyledContainer>
);

export default HomePageHeader;
