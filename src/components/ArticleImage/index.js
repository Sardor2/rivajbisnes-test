import React from 'react';
import ReactImageFallback from 'react-image-fallback';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useWindowSize } from '../../hooks/use-window-size';
import { MobileImgWrapperStyle, LargeArticleImgWrapper } from './style';
import FallbackBackground from '../../assets/images/Fallback loader.png';
import translate from '../../i18n/translate';

const ArticleImage = ({ article, isLarge }) => {
  const { width } = useWindowSize();
  const { i18n } = useTranslation();
  const image = (
    <ReactImageFallback
      fallbackImage={FallbackBackground}
      src={article.image}
      initialImage={FallbackBackground}
      alt={translate(article.description_uz, article.description_kr, i18n)}
      loading="lazy"
    />
  );
  return (
    // eslint-disable-next-line no-nested-ternary
    width < 600 ? (
      <MobileImgWrapperStyle>{image}</MobileImgWrapperStyle>
    ) : (isLarge ? (
      <LargeArticleImgWrapper>{image}</LargeArticleImgWrapper>
    ) : image)
  );
};

ArticleImage.propTypes = {
  article: PropTypes.objectOf(PropTypes.any),
  isLarge: PropTypes.bool
};
ArticleImage.defaultProps = {
  article: {},
  isLarge: false
};

export default ArticleImage;
