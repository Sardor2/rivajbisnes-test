import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getArticle } from '../../redux/modules/singleArticle/singleArticleAction';
import { getRecommendedArticles } from '../../redux/modules/articles/articlesAction';
import { singleArticleSelector } from '../../redux/selectors/singleArticleSelector';
import { recommendedArticlesSelector } from '../../redux/selectors/articlesSelector';

import { StyledContainer, Body } from './style';
import MainFullArticle from '../../components/MainFullArticle/index';
import ArticlePageAside from '../../components/ArticlePageAside/index';
import ArticleRelatedPreview from '../../components/ArticleRelatedPreview/index';


const ArticlePage = ({
  getArticle,
  article,
  getRecommendedArticles,
  articles,
  loading,
  articleLoader
}) => {
  const { slug } = useParams();

  const [recommended, setRecommended] = useState(articles);

  useEffect(() => {
    if (slug) {
      getArticle(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (article && article.categories && article.categories.length) {
      getRecommendedArticles({
        categoryId: article.categories[0].categoryId,
        sortDr: 'ASC',
        filter: 'createAt',
        page: 1,
        limit: 10
      });
    }
  }, [slug, article]);

  useEffect(() => {
    if (articles.length) {
      setRecommended(articles.filter((item) => item.id !== article.id));
    }
  }, [articles]);

  return (
    <StyledContainer>
      <Body>
        <MainFullArticle
          loading={articleLoader}
          article={article}
        />
        <ArticlePageAside
          loading={loading}
          article={recommended.slice(0, 1)}
        />
      </Body>
      <ArticleRelatedPreview
        loading={loading}
        articles={recommended.slice(1, 4)}
      />
    </StyledContainer>
  );
};

ArticlePage.propTypes = {
  article: PropTypes.objectOf(PropTypes.any),
  articleLoader: PropTypes.bool,
  loading: PropTypes.bool,
  articles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  getArticle: PropTypes.func,
  getRecommendedArticles: PropTypes.func
};

ArticlePage.defaultProps = {
  article: {},
  articleLoader: false,
  loading: false,
  articles: [],
  getArticle: () => {},
  getRecommendedArticles: () => {}
};

const mapStateToProps = (state) => ({
  article: singleArticleSelector(state),
  articleLoader: state.singleArticleReducer.loading,
  loading: state.articlesReducer.loading,
  articles: recommendedArticlesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getArticle: (slug) => dispatch(getArticle(slug)),
  getRecommendedArticles: (query) => dispatch(getRecommendedArticles(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
