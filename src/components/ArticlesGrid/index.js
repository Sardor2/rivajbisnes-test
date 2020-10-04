import React from 'react';
import PropTypes from 'prop-types';
import Ad from '../Ad';
import ArticleMain from '../articleMain';
import { StyledContainer } from './style';

const ArticlesGrid = ({
  articles, start, end, ad
}) => (
  <StyledContainer>
    {ad && <Ad priority={3} />}
    {articles.slice(start, end).map((article) => (
      <ArticleMain
        key={article.id}
        article={article}
      />
    ))}
  </StyledContainer>
);

ArticlesGrid.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  start: PropTypes.number,
  end: PropTypes.number,
  ad: PropTypes.bool
};

ArticlesGrid.defaultProps = {
  articles: [],
  start: 0,
  end: 0,
  ad: false
};

export default ArticlesGrid;
