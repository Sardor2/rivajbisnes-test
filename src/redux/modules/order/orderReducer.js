import actionTypes from '../../../constants/action-types';

const defaultState = {
  loading: false,
  error: false
};

const map = {
  [`${actionTypes.SAVE_ORDER}${actionTypes.PENDING}`]: (state) => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.SAVE_ORDER}${actionTypes.FULFILLED}`]: (state) => ({
    ...state,
    loading: false
  }),
  [`${actionTypes.SAVE_ORDER}${actionTypes.REJECTED}`]: (state, { payload }) => {
    console.log('error data', payload);
    return ({
      ...state,
      loading: false,
      error: true
    });
  }
};

export default function orderReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}
