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
<<<<<<< HEAD
  cart, 
  (cart) => (cart[book.id] ? cart[book.id].quantity : 1)
=======
  cartItems,
  // (items) => items.filter(item => item.id === book.id)[0].quantity
  items => {
    if (items.find(item => item.id === book.id)) {
      return items.filter(item => item.id === book.id)[0].quantity
    }
    return 1;
  }
>>>>>>> cartExperiment
);


export const totalQuantitySelector = createSelector(
  cartItems,
<<<<<<< HEAD
  (items) => items.reduce((prev,curr) => {
    
    console.log(prev,curr);
    return prev + curr.quantity
  },0)
=======
  (items) => items.length
>>>>>>> cartExperiment
);