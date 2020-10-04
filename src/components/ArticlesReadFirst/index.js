import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import translate from '../../i18n/translate';
import { StyledContainer, TextWrapper, ArticlesContainer } from './style';
import ArticleMain from '../articleMain';

const ArticlesReadFirst = ({ articles }) => {
  const { i18n } = useTranslation();

  return (
    <StyledContainer>
      <TextWrapper>
        <h3>
          {translate('Buni birinchi o\'qing', '', i18n)}
        </h3>
      </TextWrapper>
      <ArticlesContainer>
        {articles.slice(0, 3).map((article, index) => (
          <ArticleMain
            key={article.id || index}
            article={article}
            noImage
            noPadding
          />
        ))}
      </ArticlesContainer>
    </StyledContainer>
  );
};

ArticlesReadFirst.defaultProps = {
  articles: []
};

ArticlesReadFirst.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.any)
};

export default ArticlesReadFirst;
