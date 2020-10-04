import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  article: null

};

const map = {
  [`${actionTypes.GET_ARTICLE}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_ARTICLE}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    article: payload.data
  }),
  [`${actionTypes.GET_ARTICLE}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function singleArticleReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
