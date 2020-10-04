import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem } from '../../redux/modules/cart/cartActions';
import {
  StyledContainer,
  Left,
  ImageContainer,
  TitleContainer,
  Right,
  StyledTrash,
  PriceText
} from './style';
import ProductCounter from '../ProductCounter';
import TrashIcon from '../../assets/icons/trash.svg';
import { formatPrice } from '../../utils/string';

const CartItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(book));
    sessionStorage.removeItem(book.id);
  };

  return (
    <>
      <StyledContainer>
        <Left>
          <ImageContainer>
            <img src={book.image} alt="book" />
          </ImageContainer>
          <TitleContainer>
            <h1>{book.title_lat}</h1>
            <span>{book.authors}</span>
          </TitleContainer>
        </Left>
        <Right>
          <ProductCounter book={book} isCart />
          <PriceText>{formatPrice(book.priceInt * book.quantity)}</PriceText>
          <StyledTrash
            src={TrashIcon}
            alt="trash-icon"
            role="button"
            onClick={handleDelete}
            onKeyDown={handleDelete}
          />
        </Right>
      </StyledContainer>
      <hr />
    </>
  );
};

CartItem.defaultProps = {
  book: {}
};

CartItem.propTypes = {
  book: PropTypes.objectOf(PropTypes.any)
};

export default CartItem;
