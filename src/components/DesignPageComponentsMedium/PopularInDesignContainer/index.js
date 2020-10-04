import React from 'react';

import {
    PopularInDesignStyled,
    Title,
    HR
} from './styles';

import ArticlePopular from '../ArticlePopularComponent/index';

const PopularInDesign = () => (
    <PopularInDesignStyled>
        <Title>Popular in Design</Title>
        <HR/>
        <ArticlePopular/>
        <ArticlePopular/>
        <ArticlePopular/>
        <ArticlePopular/>
        <ArticlePopular/>
    </PopularInDesignStyled>
);

export default PopularInDesign;
