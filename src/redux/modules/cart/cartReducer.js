import actionTypes from '../../../constants/action-types';
import {
  addItemToCart,
  decreaseQuantity
} from './cart.utils';

const {
  CART_ADD, CART_REMOVE, INC_QUANTITY, DEC_QUANTITY
} = actionTypes;

const initialState = {
  cartItems:[]
}; 

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
  case CART_ADD:
    return {
      ...state,
      cartItems: addItemToCart(state.cartItems,action.book)
    };
  case CART_REMOVE: {
    return {
      ...state,
<<<<<<< HEAD
      [action.book.id]: {
        ...state[action.book.id],
        quantity: state[action.book.id] ? state[action.book.id].quantity + 1 : 2 
      }
    };
=======
      cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.book.id)
    }
>>>>>>> cartExperiment
  }
  // case INC_QUANTITY: {
  //   return {
  //     ...state,
  //     [action.book.id]: {
  //       ...state[action.book.id],
  //       quantity: state[action.book.id] ? state[action.book.id].quantity + 1 : 2
  //     }
  //   };
  // }
  case DEC_QUANTITY: {
    return {
      ...state,
      cartItems: decreaseQuantity(state.cartItems,action.book)
    };
  }
  default:
    return state;
  }
}
