import React, { useEffect, useState } from 'react';
import ReactImageFallback from 'react-image-fallback';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookMain from '../../components/BookMain';
import {
  StyledContainer,
  StyledHeader,
  LargeCard,
  ImageContainer,
  ContentWrapper,
  BooksBody,
  BooksGrid,
  Button
} from './style';
import FallbackBackground from '../../assets/images/Fallback loader.png';
import { getBooks } from '../../redux/modules/books/booksAction';
import { booksSelector } from '../../redux/selectors/booksSelector';
import Loader from '../../components/Loader';
import { LoaderWrapper } from '../CategoryPage/style';
import { ClampLinesStyled } from '../../components/articleMain/style';
import translate from '../../i18n/translate';
import { uzLat } from '../../utils/string';

const BooksPage = ({
  fetchBooks,
  loading,
  books
}) => {
  const { i18n } = useTranslation();

  const [featuredBook, setFeatured] = useState({});
  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    const rand = Math.floor(Math.random() * books.length);
    const randomBook = books[rand];
    setFeatured({ ...featuredBook, ...randomBook });
  }, [books]);
  const history = useHistory();
  return (
    <StyledContainer>
      {!loading && (
        <StyledHeader>
          <h1>{translate('Kitoblar', '', i18n)}</h1>
          <LargeCard>
            <ImageContainer>
              <ReactImageFallback
                src={featuredBook.image}
                fallbackImage={FallbackBackground}
                initialImage={FallbackBackground}
                alt="featured-book"
                className="fallback-img"
              />
            </ImageContainer>
            <ContentWrapper>
              <div>
                <h3>{translate('Biznes', '', i18n)}</h3>
                <h1>{featuredBook[`title_${uzLat(i18n.language)}`]}</h1>
              </div>
              <div>
                <span>{translate(featuredBook.authors, '', i18n)}</span>
                <span>
                  <ClampLinesStyled
                    text={featuredBook.description_lat
                      ? featuredBook[`description_${uzLat(i18n.language)}`]
                      : 'Loading...'}
                    id={featuredBook.id}
                    lines={3}
                    ellipsis="..."
                    moreText=""
                    lessText=""
                    stopPropagation
                  />
                </span>
                <Button
                  type="button"
                  onClick={() => history.push({
                    pathname: `/category/kitoblar/${featuredBook.id}`,
                    state: { book: featuredBook }
                  })}
                >
                  {translate('Batafsil', '', i18n)}
                </Button>
              </div>
            </ContentWrapper>
          </LargeCard>
        </StyledHeader>
      )}
      <BooksBody>
        {loading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {!loading && (
          <BooksGrid>
            {books.map((book) => (
              <BookMain book={book} key={book.id} />))}
          </BooksGrid>
        )}
      </BooksBody>
    </StyledContainer>
  );
};

BooksPage.defaultProps = {
  loading: false,
  books: [],
  fetchBooks: () => {}
};

BooksPage.propTypes = {
  loading: PropTypes.bool,
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  fetchBooks: PropTypes.func
};

const mapStateToProps = (state) => ({
  loading: state.booksReducer.loading,
  error: state.booksReducer.error,
  books: booksSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(getBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
