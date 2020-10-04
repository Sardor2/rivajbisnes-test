import axios from 'axios';

import actionTypes from '../../../constants/action-types';

import { API_URL } from '../../../config';

export const getBooks = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_BOOKS,
    payload: axios({
      method: 'GET',
      url: `${API_URL}/books`
    })
  });
};
