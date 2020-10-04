import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import logger from 'redux-logger'; // Logger middleware
// Reducers
import reducer from './rootReducers';

// Apply middleware to redux
const middleware = [
  logger,
  promiseMiddleware,
  save({ states: ['cartReducer'] }),
  thunk
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

/* eslint-disable no-underscore-dangle */
const configureStore = () => createStoreWithMiddleware(
  reducer,
  load({ states: ['cartReducer'] }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default configureStore();
