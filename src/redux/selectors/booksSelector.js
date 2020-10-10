import { createSelector } from 'reselect';
import { formatPrice } from '../../utils/string';

export const booksList = (state) => state.booksReducer.books;

const createFormattedBook = (book) => ({
  id: book.id,
  route: `category/kitoblar/${book.id}`,
  title_kr: book.title_kr,
  title_lat: book.title_lat,
  description_kr: book.description_kr,
  description_lat: book.description_lat,
  priceInt: book.price,
  price: formatPrice(book.price),
  rating: book.rating,
  ratingCount: book.ratingCount,
  reviews: book.reviews,
  image: book.images[0].url,
  available: book.available,
  inStore: book.inStore,
  authors: `${book.authors.map(({ full_name_kr }) => full_name_kr).join(', ')} tomonidan`
});

export const booksSelector = createSelector(
  booksList,
  (list) => list.map(createFormattedBook)
);

export const selectSpecificBook = (bookId) => 
  createSelector(
    booksSelector,
    books => {
      return books.find(book => book.id === parseInt(bookId, 10))
    }
);
