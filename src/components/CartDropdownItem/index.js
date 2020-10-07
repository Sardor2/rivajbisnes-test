import React from 'react';

//styles
import {
  DropdownItemContainer,
  CartImageContainer,
  DetailsContainer
} from './style';

const CartDropdownItem = ({cartItem:{image,title_kr,quantity,price}}) => (
  <DropdownItemContainer>
    <CartImageContainer>
      <img src={image} />
    </CartImageContainer>

    <DetailsContainer>
      <h3 className="book-title">{title_kr}</h3>
      <div className="book-details">
        <span className="quantity">{quantity} ta</span>
        <span className="price">{price}</span>
      </div>
    </DetailsContainer>
  </DropdownItemContainer>
);

export default CartDropdownItem;