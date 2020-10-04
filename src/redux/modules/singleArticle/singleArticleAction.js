import axios from 'axios';

import actionTypes from '../../../constants/action-types';
import { getHeaders } from '../../../utils';

import { API_URL } from '../../../config';

export const getArticle = (slug) => (dispatch, getState) => {
  const { token } = getState().authReducer;
  if (token) {
    dispatch({
      type: actionTypes.GET_ARTICLE,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/articles/${slug}`,
        headers: getHeaders(getState)
      })
    });
  }
};
