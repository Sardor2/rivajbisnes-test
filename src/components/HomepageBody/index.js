import React from 'react';
import PropTypes from 'prop-types';
import Ad from '../Ad';
import { StyledContainer } from './styles';
import ArticleMainLarge from '../ArticleMainLarge';
import ArticlesGrid from '../ArticlesGrid';

const HomepageBody = ({ articles }) => (
  <StyledContainer>
    <>
      <ArticleMainLarge
        key={articles[0].id}
        article={articles[0]}
      />
      <ArticlesGrid articles={articles} start={1} end={5} />
      <Ad priority={2} key="1" />
      <ArticlesGrid articles={articles} start={5} end={9} />
      <ArticleMainLarge
        key={articles[9].id}
        article={articles[9]}
      />
      <ArticlesGrid articles={articles} start={10} end={13} ad />
      <ArticleMainLarge
        key={articles[13].id}
        article={articles[13]}
      />
      <ArticlesGrid articles={articles} start={14} end={18} />
      <Ad priority={2} key="2" />
    </>
  </StyledContainer>
);

HomepageBody.defaultProps = {
  articles: []
};

HomepageBody.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

export default HomepageBody;
