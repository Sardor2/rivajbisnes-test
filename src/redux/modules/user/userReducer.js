import actionTypes from '../../../constants/action-types';

const localUser = localStorage.getItem('user');

const defaultState = {
  loading: false,
  error: false,
  user: JSON.parse(localUser)
};

const map = {
  [`${actionTypes.GET_USER}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_USER}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    user: payload.data
  }),
  [`${actionTypes.GET_USER}${actionTypes.REJECTED}`]: (state, action) => ({
    ...state,
    loading: false,
    error: true
  }),
  [`${actionTypes.UPDATE_USER}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.UPDATE_USER}${actionTypes.FULFILLED}`]: (state, { payload }) => ({
    ...state,
    loading: false,
    user: payload.data
  }),
  [`${actionTypes.UPDATE_USER}${actionTypes.REJECTED}`]: (state, action) => ({
    ...state,
    loading: false,
    error: true
  }),
  [actionTypes.SET_USER]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: false,
    user: payload
  })

};

export default function userReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
