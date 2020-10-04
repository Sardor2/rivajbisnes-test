import { createSelector } from 'reselect';
import moment from 'moment';
import { labelToRoute } from '../../utils';

export const getArticle = (state) => state.singleArticleReducer.article;

const createFormattedArticle = (item) => item && ({
  id: item.id,
  route: `/articles/${item.slug}`,
  title_uz: item.title_uz,
  title_kr: item.title_kr,
  description_kr: item.description_kr,
  description_uz: item.description_uz,
  body_uz: item.body_uz,
  body_kr: item.body_kr,
  createdAt: moment(item.createdAt).format('MMM Do YYYY'),
  metaFields: item.metaFields,
  categories: item.categories.map((i) => ({
    categoryId: i.id,
    label: i.name,
    route: labelToRoute(`/category/${i.name}`)
  }))
});

export const singleArticleSelector = createSelector(
  getArticle,
  (article) => createFormattedArticle(article)
);
