import actionTypes from '../../../constants/action-types';


const addItem = (book, quantity) => ({
  type: actionTypes.CART_ADD,
  book: { ...book, quantity }
});

const removeItem = (book) => ({
  type: actionTypes.CART_REMOVE,
  book
});

const incQuantity = (book) => ({
  type: actionTypes.INC_QUANTITY,
  book
});
const decQuantity = (book) => ({
  type: actionTypes.DEC_QUANTITY,
  book
});
export {
  addItem, removeItem, incQuantity, decQuantity
};
