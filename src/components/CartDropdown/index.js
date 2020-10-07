import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '../Button/index';
import {cartItems} from '../../redux/selectors/cartSelector';
import {totalSelector} from '../../redux/selectors/cartSelector';

//components
import CartDropdownItem from '../CartDropdownItem';

import {
  DropdownContainer,
  CartItemsContainer,
  CheckoutButtonContainer
} from './style';

const CartDropdown = ({cartItems,totalPrice,clickHandler}) => (
  <DropdownContainer >

      <CartItemsContainer>
        {
          cartItems.length ?
          cartItems.map(
            item => <CartDropdownItem cartItem={item} />
          ):
          (
            <span className="empty-message" >Savat Bo'sh</span>
          )
        }
      </CartItemsContainer>

      <CheckoutButtonContainer >
        <div className="total-price">
          <div>Total: {totalPrice}</div>
        </div>
        <Link to='/korzina' className="cart-button" onClick={clickHandler}>
            Savatga
        </Link>
      </CheckoutButtonContainer>
  </DropdownContainer>
);

const mapStateToProps = state => ({
  cartItems: cartItems(state),
  totalPrice: totalSelector(state)
});

export default connect(mapStateToProps,)(CartDropdown);