import React from 'react';

import {
  ArticlePageStyled, Content, AsideRight, AsideLeft
} from './style';

import NavbarMainPage from '../../components/NavbarMainPage';
import ArticleMain from '../../components/ArticlePageComponents/ArticleMain/index';
import ArticleMoreContainer from '../../components/ArticlePageComponents/MoreFromMediumContainer/index';
import Footer from '../../components/ArticlePageComponents/Footer/index';
import ClapsAside from '../../components/ArticlePageComponents/ClapsContainerAside/index';


const ArticlePage = () => (
  <ArticlePageStyled>
    <NavbarMainPage />
    <Content>
      <AsideLeft>
        <ClapsAside />
      </AsideLeft>
      <ArticleMain />
      <AsideRight />
    </Content>
    <ArticleMoreContainer />
    <Footer />
  </ArticlePageStyled>
);

export default ArticlePage;
