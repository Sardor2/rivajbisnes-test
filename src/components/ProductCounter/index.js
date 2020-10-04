import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer, StyledButton } from './style';
import Plus from '../../assets/icons/plus-simple.svg';
import Minus from '../../assets/icons/minus.svg';
import { incQuantity, decQuantity } from '../../redux/modules/cart/cartActions';
import { quantitySelector } from '../../redux/selectors/cartSelector';

const ProductCounter = (props) => {
  const { book } = props;
  const quantity = useSelector(quantitySelector(book));
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incQuantity(book));
  const handleDecrement = () => dispatch(decQuantity(book));

  return (
    <StyledContainer {...props}>
      <div>
        <StyledButton onClick={handleDecrement} disabled={quantity === 1}>
          <img src={Minus} alt="min" />
        </StyledButton>
      </div>
      <span>{quantity}</span>
      <div>
        <StyledButton onClick={handleIncrement}>
          <img src={Plus} alt="plu" />
        </StyledButton>
      </div>
    </StyledContainer>
  );
};

ProductCounter.defaultProps = {
  book: {}
};

ProductCounter.propTypes = {
  book: PropTypes.objectOf(PropTypes.any)
};

export default ProductCounter;
