import React from 'react';
import { formatPrice } from '../../utils/string';
import { useTranslation } from 'react-i18next';
import translate from '../../i18n/translate';
//styles
import {
  DropdownItemContainer,
  CartImageContainer,
  DetailsContainer
} from './style';



const CartDropdownItem = ({cartItem:{image,title_kr,quantity,price,route},closeDropdown}) => {
  const { i18n } = useTranslation();
  return (
  <DropdownItemContainer to={`/${route}`} onClick={closeDropdown} >
    <CartImageContainer>
      <img src={image} />
    </CartImageContainer>

    <DetailsContainer>
      <h3 className="book-title">{title_kr}</h3>
      <div className="book-details">
        <span className="quantity">{quantity} ta</span>
        <span className="price">{translate(price, '', i18n)}</span>
      </div>
    </DetailsContainer>
  </DropdownItemContainer>
)};

export default CartDropdownItem;