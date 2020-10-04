import React from 'react';
import PropTypes from 'prop-types';

import {
  Articles, ArticleMainPreview, ArticleSecondPreview, TopArticlesStyled
} from './styles';

import Article from '../ArticlesComponentMedium';
import ArticleRowTwo from '../ArticleRowTwoMedium';
import Ad from '../Ad';
import { useWindowSize } from '../../hooks/use-window-size';

const TopArticlesContainer = ({ articles }) => {
  const { width } = useWindowSize();
  return (
    <TopArticlesStyled>
      <Articles>
        <ArticleMainPreview>
          <Article article={articles.slice(0, 1)[0]} />
        </ArticleMainPreview>

        <ArticleSecondPreview>
          {articles.slice(1, 4).map((article) => (
            <ArticleRowTwo key={article.id} article={article} />
          ))}
        </ArticleSecondPreview>
      </Articles>

      {width > 1220 && <Ad priority={1} />}

    </TopArticlesStyled>
  );
};

TopArticlesContainer.defaultProps = {
  articles: []
};

TopArticlesContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

export default TopArticlesContainer;
