import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false,
  bookmarks: []
};

const map = {
  [`${actionTypes.SAVE_BOOKMARK}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.SAVE_BOOKMARK}${actionTypes.REJECTED}`]: (state) => ({
    ...state,
    loading: false,
    error: true
  }),
  [`${actionTypes.GET_BOOKMARKS}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    bookmarks: state.bookmarks.concat(payload.data.data)
  }),
  [`${actionTypes.CLEAR_BOOKMARKS}`]: (state) => ({
    ...state,
    bookmarks: []
  })
};

export default function bookmarksReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
