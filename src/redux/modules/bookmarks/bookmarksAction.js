import axios from 'axios';
import { getHeaders } from '../../../utils/index';
import actionTypes from '../../../constants/action-types';

import { API_URL } from '../../../config';

export const saveBookmark = (userId, articleId) => (dispatch, getState) => {
  const { token } = getState().authReducer;
  if (token) {
    dispatch({
      type: actionTypes.SAVE_BOOKMARK,
      payload: axios({
        method: 'POST',
        url: `${API_URL}/bookmarks`,
        headers: getHeaders(getState),
        data: { userId, articleId }
      })
    });
  }
};

export const getBookmarks = (userId) => (dispatch, getState) => {
  const { token } = getState().authReducer;
  if (token) {
    dispatch({
      type: actionTypes.GET_BOOKMARKS,
      payload: axios({
        method: 'GET',
        url: `${API_URL}/bookmarks?userId=${userId}`,
        headers: getHeaders(getState)
      })
    });
  }
};

export const clearBookmarks = () => (dispatch, getState) => {
  const { token } = getState().authReducer;
  if (token) {
    dispatch({ type: actionTypes.CLEAR_BOOKMARKS });
  }
};
