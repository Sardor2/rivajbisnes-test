import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StyledContainer, ReactStars, TextContainer } from './style';
import translate from '../../i18n/translate';

const RatingStars = ({ rating: initialRating, ratingCount, reviews }) => {
  const [rating, setRating] = useState(initialRating);
  const { i18n } = useTranslation();
  const ratingData = (ratingCount, reviews) => `${ratingCount} baho | ${reviews.length} sharhlar`;
  return (
    <StyledContainer>
      <ReactStars
        count={5}
        value={rating}
        onChange={(newRating) => setRating(newRating)}
        size={24}
        color2="#ffd700"
      />
      <TextContainer>
        <span id="rating">{rating}</span>
        <span id="rating-details">{translate('Reyting tafsilotlari:', '', i18n)}</span>
        <span id="rating-data">{translate(ratingData(ratingCount, reviews), '', i18n)}</span>
      </TextContainer>
    </StyledContainer>
  );
};

RatingStars.defaultProps = {
  rating: 0,
  ratingCount: 0,
  reviews: []
};
RatingStars.propTypes = {
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  reviews: PropTypes.arrayOf(PropTypes.any)
};

export default RatingStars;
