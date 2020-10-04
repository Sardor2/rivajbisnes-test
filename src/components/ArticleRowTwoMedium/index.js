import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import { useTranslation } from 'react-i18next';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import FallbackBackground from '../../assets/images/Fallback loader.png';
import translate from '../../i18n/translate';
import {
  ArticlesContainer,
  ImageContainer,
  TextsHolder,
  ArticleTitle,
  SecondaryTitle,
  AuthorInfo,
  AuthorName,
  AuthorLocation,
  PublishInfo,
  PublishDate,
  TimeOfReading,
  ImgWrapper,
  StarIcon,
  ClampLinesStyled
} from './style';

import starIcon from '../../assets/icons/star.png';

const ArticleRowTwo = ({ article }) => {
  const history = useHistory();
  const { i18n } = useTranslation();
  return (
    <ArticlesContainer onClick={() => history.push(article.route)}>
      <ImageContainer>
        <ReactImageFallback
          fallbackImage={FallbackBackground}
          src={article.image}
          initialImage={FallbackBackground}
          alt={article.description_uz}
          loading="lazy"
        />
      </ImageContainer>
      <TextsHolder>
        <AuthorInfo>
          {article.categories.map((i, idx) => (
            <AuthorLocation key={i.id || idx} to={i.route}>
              {translate(i.label, '', i18n)}
            </AuthorLocation>
          ))}
        </AuthorInfo>
        <ArticleTitle>
          <Link to={article.route}>
            <ClampLinesStyled
              text={translate(article.title_uz, article.title_kr, i18n)}
              id={article.title_uz}
              lines={2}
              ellipsis="..."
              moreText=""
              lessText=""
              stopPropagation
            />
          </Link>
        </ArticleTitle>
        <SecondaryTitle>
          <ClampLinesStyled
            text={translate(article.description_uz, article.description_kr, i18n)}
            id={article.description_uz}
            lines={2}
            ellipsis="..."
            moreText=""
            lessText=""
            stopPropagation
          />
        </SecondaryTitle>
        <PublishInfo>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{article.createdAt}</Tooltip>}>
            <span className="d-inline-block">
              <PublishDate style={{ hoverEvents: 'none' }}>
                {article.createdAt}
              </PublishDate>
            </span>
          </OverlayTrigger>
          <StarIcon>
            <img src={starIcon} alt="star-icon" />
          </StarIcon>
        </PublishInfo>
      </TextsHolder>
    </ArticlesContainer>
  );
};

ArticleRowTwo.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)
};

ArticleRowTwo.defaultProps = {
  article: {}
};

export default ArticleRowTwo;
