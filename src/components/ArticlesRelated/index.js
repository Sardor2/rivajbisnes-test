import React from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import translate from '../../i18n/translate';
import {
  StyledContainer,
  ImageWrapper,
  TextWrapper
} from './styles';

import {
  HeadingSmall,
  AuthorNameGrey,
  ArticleType
} from '../constant.styles';

import ImageArticle from '../../assets/images/Fallback loader.png';


const ArticleRelated = ({ article }) => {
  const { i18n } = useTranslation();
  return (
    <StyledContainer>
      <ImageWrapper>
        <img src={ImageArticle} alt="article" />
      </ImageWrapper>
      <TextWrapper>
        <ArticleType>
          {article.categories.map((item, index) => (
            <Link key={item.id || index} to={item.route}>
              {translate(item.label, '', i18n)}
            </Link>
          ))}

        </ArticleType>
        <HeadingSmall>
          <Link to={article.route}>
            {translate(article.title_uz, article.title_kr, i18n)}
          </Link>
        </HeadingSmall>
      </TextWrapper>
    </StyledContainer>
  );
};

export default ArticleRelated;
