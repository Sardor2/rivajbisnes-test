import { createSelector } from 'reselect';
import { formatPrice } from '../../utils/string';

const cart = (state) => state.cartReducer;

export const cartItems = createSelector(
  cart,
  (cart) => cart.cartItems
);

export const totalIntSelector = createSelector(
  cartItems,
  (items) => items.reduce((prev, curr) => prev + curr.priceInt * curr.quantity, 0)
);

export const totalSelector = createSelector(
  totalIntSelector,
  (total) => formatPrice(total) 
);
// ??? 
export const quantitySelector = (book) => createSelector(
  cartItems,
  // (items) => items.filter(item => item.id === book.id)[0].quantity
  items => {
    
    if (items.length !== 0) {
      return items.filter(item => item.id === book.id)[0].quantity
    }
    return 0;
  }
);


export const totalQuantitySelector = createSelector(
  cartItems,
  (items) => items.reduce((prev,curr) => {
    return prev + curr.quantity
  },0)
);