import { combineReducers } from 'redux';

import {
  authReducer,
  navReducer,
  articlesReducer,
  singleArticleReducer,
  homeReducer,
  userReducer,
  forgotPasswordReducer,
  bookmarksReducer,
  booksReducer,
  cartReducer,
  orderReducer
} from '../modules';

export default combineReducers({
  authReducer,
  navReducer,
  articlesReducer,
  singleArticleReducer,
  homeReducer,
  userReducer,
  forgetPassword: forgotPasswordReducer,
  bookmarksReducer,
  booksReducer,
  cartReducer,
  orderReducer
});
