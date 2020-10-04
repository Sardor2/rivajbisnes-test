import axios from 'axios';
import actionTypes from '../../../constants/action-types';
import { getHeaders } from '../../../utils';
import { API_URL } from '../../../config';

export const saveOrder = (order) => (dispatch, getState) => {
  const { token } = getState().authReducer;
  if (token) {
    dispatch({
      type: actionTypes.SAVE_ORDER,
      payload: axios({
        method: 'POST',
        url: `${API_URL}/orders`,
        headers: getHeaders(getState),
        data: order
      })
    });
  }
};
