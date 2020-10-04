import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  ItemsContainer,
  OrderSection,
  PromoContainer,
  InputContainer,
  StyledBlackButton,
  OrderContainer,
  BigBlackButton
} from './style';
import CartItem from '../../components/CartItem';
import { Button as WhiteButton } from '../BooksPage/style';
import { cartItems, totalSelector } from '../../redux/selectors/cartSelector';
import OrderModal from '../../components/OrderModal';
import translate from '../../i18n/translate';

const CartPage = () => {
  const {
    isAuthenticated, isLoading, loginWithPopup
  } = useAuth0();
  const history = useHistory();
  const { i18n } = useTranslation();
  const [promo, setPromo] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const items = useSelector(cartItems);
  const total = useSelector(totalSelector);

  const handleMakeOrder = () => {
    if (!items.length) return null;
    if (!isLoading && isAuthenticated) return setModalShow(true);
    return loginWithPopup();
  };

  return (
    <StyledContainer>
      <h1>{translate('Korzina', '', i18n)}</h1>
      <hr />
      <ItemsContainer>
        {!items.length && <h3>{translate('Savat bo\'sh', '', i18n)}</h3>}
        {items.map((item) => (
          <CartItem
            book={item}
            key={item.id}
          />
        ))}
      </ItemsContainer>
      <OrderSection>
        <PromoContainer>
          <h1>{translate('Promo kod', '', i18n)}</h1>
          <InputContainer>
            <input type="text" placeholder={translate('Promo kodni kiriting', '', i18n)} defaultValue={promo} />
            <StyledBlackButton type="button">{translate('Kiritish', '', i18n)}</StyledBlackButton>
          </InputContainer>
        </PromoContainer>
        <OrderContainer>
          <div>
            <span>{translate('Buyurtma narxi: ', '', i18n)}</span>
            <span id="price">{translate(total, '', i18n)}</span>
          </div>
          <div>
            <WhiteButton>{translate('Ortga qaytish', '', i18n)}</WhiteButton>
            <BigBlackButton
              onClick={handleMakeOrder}
              disabled={!items.length}
            >
              {translate('BUYURTMA QILISH', '', i18n)}
            </BigBlackButton>
          </div>
        </OrderContainer>
      </OrderSection>
      <OrderModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </StyledContainer>
  );
};

export default CartPage;
