import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ClampLinesStyled } from '../articleMain/style';
import {
  StyledContainer,
  TopContainer,
  BottomContainer,
  PriceButtonContainer
} from './style';
import { Button } from '../../containers/BooksPage/style';
import translate from '../../i18n/translate';
import { uzLat } from '../../utils/string';
import FallbackBackground from '../../assets/images/Fallback loader.png';

const BookMain = ({ book }) => {
  const history = useHistory();
  const { i18n } = useTranslation();
  return (
    <StyledContainer>
      <TopContainer>
        <ReactImageFallback
          src={book.image}
          fallbackImage={FallbackBackground}
          initialImage={FallbackBackground}
          alt="book"
          className="book"
        />
      </TopContainer>
      <BottomContainer>
        <h3>{translate('Biznes', '', i18n)}</h3>
        <ClampLinesStyled
          text={book[`title_${uzLat(i18n.language)}`]}
          id={book.id}
          lines={2}
          ellipsis="..."
          moreText=""
          lessText=""
          stopPropagation
        />
        <span>{translate(book.authors, '', i18n)}</span>
        <PriceButtonContainer>
          <span>{translate(book.price, '', i18n)}</span>
          <Button
            type="button"
            onClick={() => history.push({
              pathname: `/category/kitoblar/${book.id}`,
              state: { book }
            })}
          >
            {translate('Batafsil', '', i18n)}
          </Button>
        </PriceButtonContainer>
      </BottomContainer>
    </StyledContainer>
  );
};

BookMain.defaultProps = {
  book: {}
};

BookMain.propTypes = {
  book: PropTypes.objectOf(PropTypes.any)
};

export default BookMain;
