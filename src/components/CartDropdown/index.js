import React from 'react';
import {connect} from 'react-redux';

import {cartItems} from '../../redux/selectors/cartSelector';

import {
  StyledContainer,
  CartItemsContainer
} from './style';

const CartDropdown = ({cartItems}) => (
  <StyledContainer>
    <CartItemsContainer>
      <div>
        Hello world
      </div>
    </CartItemsContainer>

    <button>Go to Checkout</button>
  </StyledContainer>
);

const mapStateToProps = state => ({
  cartItems: cartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);