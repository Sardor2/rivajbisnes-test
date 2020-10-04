import React from 'react';

import {
  PopularArticleContainer,
  HR,
  Title
} from './styles';

import ArticlePopular from '../ArticlePopularsMedium/index';
import NavBottom from '../NavBottom/index';


const PopularArticle = () => (
  <PopularArticleContainer>
    <Title>Popular on Medium</Title>
    <HR />
    <ArticlePopular />
    <ArticlePopular />
    <ArticlePopular />
    <ArticlePopular />
    <HR />
  </PopularArticleContainer>

);

export default PopularArticle;
