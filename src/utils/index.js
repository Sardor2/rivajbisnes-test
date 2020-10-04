export const getHeaders = (getState) => ({
  Authorization: `Bearer ${getState().authReducer.token}`,
  'Content-type': 'application/json'
});

export const labelToRoute = (name) => name.toLowerCase().split(' ').join('-');

export const createMarkup = (text) => ({ __html: text });
