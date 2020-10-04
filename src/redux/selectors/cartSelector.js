import { createSelector } from 'reselect';
import { formatPrice } from '../../utils/string';

const cart = (state) => state.cartReducer;

export const cartItems = createSelector(
  cart,
  (cart) => Object.values(cart)
);

export const totalIntSelector = createSelector(
  cartItems,
  (items) => items.reduce((prev, curr) => prev + curr.priceInt * curr.quantity, 0)
);

export const totalSelector = createSelector(
  totalIntSelector,
  (total) => formatPrice(total) 
);

export const quantitySelector = (book) => createSelector(
  cart,
  (cart) => (cart[book.id] ? cart[book.id].quantity : 1)
);


export const totalQuantitySelector = createSelector(
  cartItems,
  (items) => items.reduce((prev,curr) => {
  
    console.log(prev,curr);
    return prev + curr.quantity
  },0)
);