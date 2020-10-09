import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {cartItems} from '../../redux/selectors/cartSelector';
import {totalSelector} from '../../redux/selectors/cartSelector';
import translate from '../../i18n/translate';
import { useTranslation } from 'react-i18next';


//components
import CartDropdownItem from '../CartDropdownItem';

import {
  DropdownContainer,
  CartItemsContainer,
  CheckoutButtonContainer
} from './style';


const CartDropdown = ({cartItems,totalPrice,clickHandler}) => {
  const { i18n } = useTranslation();
  
  return (
  <DropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ?
          cartItems.map(
            item => <CartDropdownItem key={item.id} cartItem={item} closeDropdown={clickHandler}/>
          ):
          (
            <span className="empty-message" >{translate("Savat bo'sh", '', i18n)}</span>
          )
        }
      </CartItemsContainer>
      
      <CheckoutButtonContainer >
        <div className="total-price">
          <div>{translate("Jami", '', i18n)}: {translate(totalPrice, '', i18n)}</div>
        </div>
        <Link to='/korzina' className="cart-button" onClick={clickHandler}>
            {translate("Savatga",'',i18n)}
        </Link>
      </CheckoutButtonContainer>
  </DropdownContainer>
  );
}

const mapStateToProps = state => ({
  cartItems: cartItems(state),
  totalPrice: totalSelector(state)
});

export default connect(mapStateToProps)(CartDropdown);