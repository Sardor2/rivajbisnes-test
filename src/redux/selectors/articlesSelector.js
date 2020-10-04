import { createSelector } from 'reselect';
import moment from 'moment';
import { labelToRoute } from '../../utils';

export const articlesList = (state) => state.articlesReducer.articles;
export const bookmarksList = (state) => state.bookmarksReducer.bookmarks;
export const recommendedArticlesList = (state) => state.articlesReducer.recommendedArticles;

const createFormattedArticle = (item) => ({
  id: item.id,
  route: `/articles/${item.slug}`,
  title_uz: item.title_uz,
  title_ru: item.title_ru,
  description_ru: item.description_ru,
  description_uz: item.description_uz,
  createdAt: moment(item.createdAt).format('MMM Do YYYY'),
  metaFields: item.metaFields,
  image: item.image,
  categories: item.categories.map((i) => ({
    label: i.name,
    route: labelToRoute(`/category/${i.name}`)
  }))
});

const createFormattedBookmark = (item) => ({
  id: item.article.id,
  route: `/articles/${item.article.slug}`,
  title_uz: item.article.title_uz,
  title_ru: item.article.title_ru,
  description_ru: item.article.description_ru,
  description_uz: item.article.description_uz,
  createdAt: moment(item.article.createdAt).format('MMM Do YYYY'),
  metaFields: item.article.metaFields,
  categories: item.article.categories.map((i) => ({
    label: i.name,
    route: labelToRoute(`/category/${i.name}`)
  }))
});

export const articlesSelector = createSelector(
  articlesList,
  (list) => list.map(createFormattedArticle)
);

export const recommendedArticlesSelector = createSelector(
  recommendedArticlesList,
  (list) => list.map(createFormattedArticle)
);

export const bookmarksSelector = createSelector(
  bookmarksList,
  (list) => list.map(createFormattedBookmark)
);
