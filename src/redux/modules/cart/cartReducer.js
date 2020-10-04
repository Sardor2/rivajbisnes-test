import actionTypes from '../../../constants/action-types';

const {
  CART_ADD, CART_REMOVE, INC_QUANTITY, DEC_QUANTITY
} = actionTypes;

const initialState = {
  
}; 

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
  case CART_ADD:
    return {
      ...state,
      [action.book.id]: {
        ...action.book,
        quantity: state[action.book.id] ? state[action.book.id].quantity : 1
      }
    };
  case CART_REMOVE: {
    const { [action.book.id]: value, ...restState } = state;
    return restState;
  }
  case INC_QUANTITY: {
    return {
      ...state,
      [action.book.id]: {
        ...state[action.book.id],
        quantity: state[action.book.id] ? state[action.book.id].quantity + 1 : 2 
      }
    };
  }
  case DEC_QUANTITY: {
    return {
      ...state,
      [action.book.id]: {
        ...state[action.book.id],
        quantity: state[action.book.id].quantity - 1 >= 1 ? state[action.book.id].quantity - 1 : 1
      }
    };
  }
  default:
    return state;
  }
}
