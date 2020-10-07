import React,{useRef, useEffect} from 'react';
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
  
  // Custom Hook to listen to clicks outside the component dropdown
  function useOutsideClick(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // click handler from Navbar hook that controls hidden for dropdown
                clickHandler(); 
            }
        }
  
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
  }
  const { i18n } = useTranslation();
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  return (
  <DropdownContainer ref={wrapperRef} >
      <CartItemsContainer>
        {
          cartItems.length ?
          cartItems.map(
            item => <CartDropdownItem key={item.id} cartItem={item} />
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