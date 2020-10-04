import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactImageFallback from 'react-image-fallback';
import { useTranslation } from 'react-i18next';
import translate from '../../i18n/translate';
import {
  ArticlesContainer,
  ImageContainer,
  TextsHolder,
  ArticleTitle,
  SecondaryTitle,
  AuthorInfo,
  AuthorLocation,
  PublishInfo,
  PublishDate,
  StarIcon,
  ClamplinesStyled
} from './style';

import starIcon from '../../assets/icons/star.png';
import FallbackBackground from '../../assets/images/Fallback loader.png';

const ArticleThird = ({ article }) => {
  const history = useHistory();
  const { i18n } = useTranslation();
  return (
    <ArticlesContainer onClick={() => history.push(article.route)}>
      <ImageContainer>
        <ReactImageFallback
          fallbackImage={FallbackBackground}
          src={article.image}
          initialImage={FallbackBackground}
          alt={translate(article.description_uz, article.description_kr, i18n)}
          loading="lazy"
        />
      </ImageContainer>
      <TextsHolder>
        <ArticleTitle>
          <Link to={article.route}>
            <ClamplinesStyled
              text={translate(article.title_uz, article.description_kr, i18n)}
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
          <ClamplinesStyled
            text={translate(article.description_uz, article.description_kr, i18n)}
            id={article.title_uz}
            lines={2}
            ellipsis="..."
            moreText=""
            lessText=""
            stopPropagation
          />
        </SecondaryTitle>
        <AuthorInfo>
          {article.categories.map((i, idx) => (
            <AuthorLocation key={i.id || idx} to={i.route}>
              {translate(i.label, '', i18n)}
            </AuthorLocation>
          ))}
        </AuthorInfo>
        <PublishInfo>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{article.createdAt}</Tooltip>}>
            <span className="d-inline-block">
              <PublishDate style={{ hoverEvents: 'none' }}>{article.createdAt}</PublishDate>
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


ArticleThird.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)
};

ArticleThird.defaultProps = {
  article: {}
};

export default ArticleThird;
