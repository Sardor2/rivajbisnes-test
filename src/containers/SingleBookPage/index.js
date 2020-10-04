/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledContainer,
  TopContainer,
  MainDescription,
  InteractionContainer,
  ImageWrapper,
  BookOverview,
  StyledButton,
  ShareThisText,
  ShareParentContainer,
  ShareContainer,
  PurchaseContainer,
  BottomContainer,
  BlackButton,
  DownContainer,
  BookDescription,
  Line
} from './style';
import { BreadCumb } from '../../components/TopicPageHeader/style';
import translate from '../../i18n/translate';
import BreadCumbImg from '../../assets/icons/breadcumb.svg';
import RatingStars from '../../components/RatingStars';
import ShareIcon from '../../assets/icons/share.svg';
import ProductCounter from '../../components/ProductCounter';
import Ad from '../../components/Ad';
import { addItem, removeItem } from '../../redux/modules/cart/cartActions';
import { quantitySelector } from '../../redux/selectors/cartSelector';
import { formatPrice, uzLat } from '../../utils/string';

const SingleBookPage = ({ location: { state: { book } } }) => {
  const { i18n } = useTranslation();
  const quantity = useSelector(quantitySelector(book));
  
  const dispatch = useDispatch();
  useEffect(() => () => {
    if (!sessionStorage.getItem(book.id)) {
      dispatch(removeItem(book));
    }
  }, []);
  const handleAdd = () => {
    dispatch(addItem(book, quantity));
    sessionStorage.setItem(book.id, '1');
    alert('Savatga qo\'shildi!');
  };
  const bookTitle = (book) => book[`title_${uzLat(i18n.language)}`];
  const bookDescription = (book) => book[`description_${uzLat(i18n.language)}`];
  return (
    <StyledContainer>
      <TopContainer>
        <BreadCumb>
          <span>
            <Link to="/">{translate('Asosiy', '', i18n)}</Link>
          </span>
          <img src={BreadCumbImg} alt="breadcumb-img" />
          <span>
            <Link to="/category/kitoblar">{translate('Kitoblar', '', i18n)}</Link>
          </span>
          <img src={BreadCumbImg} alt="breadcumb-img" />
          <span>{bookTitle(book)}</span>
        </BreadCumb>
        <MainDescription>
          <ImageWrapper>
            <img src={book.image} alt="book" />
          </ImageWrapper>
          <BookOverview>
            <h1>{bookTitle(book)}</h1>
            <h3>{translate('Biznes', '', i18n)}</h3>
            <span>{translate(book.authors, '', i18n)}</span>
            <RatingStars
              rating={book.rating}
              ratingCount={book.ratingCount}
              reviews={book.reviews}
            />
            <InteractionContainer>
              <ShareParentContainer>
                <StyledButton type="button">{translate('Izoh qoldirish', '', i18n)}</StyledButton>
                <ShareContainer>
                  <ShareThisText>{translate('Boshqalar bilan ulashish', '', i18n)}</ShareThisText>
                  <img src={ShareIcon} width="20px" alt="share-icon" />
                </ShareContainer>
              </ShareParentContainer>
              <div>
                <PurchaseContainer>
                  <div>
                    <p>{translate(formatPrice(book.priceInt * quantity), '', i18n)}</p>
                    <hr />
                  </div>
                  <BottomContainer>
                    <ProductCounter book={book} />
                    <BlackButton
                      type="button"
                      onClick={handleAdd}
                    >
                      {translate('Sotib olish', '', i18n)}
                    </BlackButton>
                  </BottomContainer>
                </PurchaseContainer>
              </div>
            </InteractionContainer>
          </BookOverview>
        </MainDescription>
      </TopContainer>
      <DownContainer>
        <BookDescription>
          <hr />
          <h1>{translate('Mahsulot tavsifi', '', i18n)}</h1>
          <Line>
            <span id="prop-name">{translate('Nashr sanasi: ', '', i18n)}</span>
            <span id="prop">{translate('27 Sentyabr 1995', '', i18n)}</span>
          </Line>
          <div>{bookDescription(book)}</div>

          <Line>
            <span id="prop-name">{translate('Mahsulot #: ', '', i18n)}</span>
            <span id="prop">{book.id}</span>
          </Line>
          <Line>
            <span id="prop-name">{translate('Sahifalar', '', i18n)}</span>
            <span id="prop">512</span>
          </Line>
          <Line>
            <span id="prop-name">{translate('Aloqador mavzular', '', i18n)}</span>
            <span id="prop">Afro-amerikaliklar, ozchiliklar va etnik guruhlar, xilma-xillik, ishbilarmonlik etikasi, rahbarlik, ishchi kuchini boshqarish, irqiy kamsitish, tashkiliy xatti-harakatlar</span>
          </Line>
        </BookDescription>
        <Ad priority={1} />
      </DownContainer>
    </StyledContainer>
  );
};

SingleBookPage.defaultProps = {
  location: PropTypes.objectOf(PropTypes.any)
};

SingleBookPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any)
};

export default SingleBookPage;
