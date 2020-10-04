import { getHeaders } from '../utils/index';
import { API_URL } from '../config/index';

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // eslint-disable-next-line no-use-before-define
        logout();
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function login({ phone, password }) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, password })
  };

  return fetch(`${API_URL}/auth/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // storing user details and token to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function logout() {
  // removes  user from localStorage once logs out
  localStorage.removeItem('user');
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: getHeaders()
  };

  return fetch(`${API_URL}/auth/details/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${API_URL}/auth/register`, requestOptions).then(handleResponse);
}

export const userService = {
  login,
  logout,
  getById,
  register
};
