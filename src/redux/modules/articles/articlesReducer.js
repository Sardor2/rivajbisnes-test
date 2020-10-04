import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  articles: [],
  params: null,
  totalItems: 0,
  recommendedArticles: []
//   categoryId: undefined
};


const handleConcat = (state, payload) => state.concat(payload);

const map = {
  [`${actionTypes.GET_CATEGORY}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_CATEGORY}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    articles: handleConcat(state.articles, payload.data.data),
    totalItems: payload.data.total
  }),
  [`${actionTypes.GET_CATEGORY}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  }),
  [`${actionTypes.GET_CATEGORY_RECOMMENDED}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_CATEGORY_RECOMMENDED}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    recommendedArticles: payload.data.data,
    loading: false
  }),
  [`${actionTypes.GET_CATEGORY_RECOMMENDED}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    error: true,
    loading: false
  }),
  [`${actionTypes.CATEGORY_PARAMS}`]: (state, { payload }) => ({
    ...state,
    params: payload
  }),
  [`${actionTypes.CLEAR_DATA}`]: (state) => ({
    ...state,
    articles: [],
    totalItems: 0
  })
};

export default function articlesReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
