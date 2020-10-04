import React from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from '../../hooks/use-window-size';
import { StyledContainer } from './style';

import ArticleMainCategory from '../articleMainCategory';
import ArticleMain from '../articleMain';

const CategoryPageBody = ({ articles }) => {
  const { width } = useWindowSize();
  return (
    <StyledContainer>
      {articles.map((article, index) => (
        width > 700 ? (
          <ArticleMainCategory
            key={article.id || index}
            article={article}
            paddingLeft100
          />
        ) : (
          <ArticleMain
            key={article.id}
            article={article}
            categoryPage
          />
        )
      ))}

    </StyledContainer>
  );
};

CategoryPageBody.defaultProps = {
  articles: []
};

CategoryPageBody.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

export default CategoryPageBody;
