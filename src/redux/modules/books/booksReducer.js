import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  books: []
};

const map = {
  [`${actionTypes.GET_BOOKS}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_BOOKS}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    books: payload.data
  }),
  [`${actionTypes.GET_BOOKS}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  })
};

export default function booksReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
