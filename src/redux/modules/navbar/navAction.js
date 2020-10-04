import axios from 'axios';

import { getHeaders } from '../../../utils/index';
import actionTypes from '../../../constants/action-types';

import { API_URL } from '../../../config';

export const getNav = () => (dispatch, getState) => {
  const { token } = getState().authReducer;
  if (token) {
    dispatch({
      type: actionTypes.GET_NAVBAR,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/categories`,
        headers: getHeaders(getState)
      })
    });
  }
};
