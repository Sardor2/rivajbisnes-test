import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ReactImageFallback from 'react-image-fallback';
import Ad from '../Ad';
import translate from '../../i18n/translate';
import { useWindowSize } from '../../hooks/use-window-size.js';
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
  ClampLinesStyled
} from './styles';
import FallbackBackground from '../../assets/images/Fallback loader.png';
import starIcon from '../../assets/icons/star.png';

const Article = ({ article }) => {
  const history = useHistory();
  const { i18n } = useTranslation();
  const { width } = useWindowSize();
  console.log('width', width);
  return (
    <ArticlesContainer key={article.id} onClick={() => history.push(article.route)}>
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
              <PublishDate style={{ hoverEvents: 'none' }}>{article.createdAt}</PublishDate>
            </span>
          </OverlayTrigger>
          <StarIcon>
            <img src={starIcon} alt="star-icon" />
          </StarIcon>
        </PublishInfo>
        {width <= 1220 && width >= 600 && <Ad width="100%" height="128px" />}
      </TextsHolder>
    </ArticlesContainer>
  );
};

Article.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)
};

Article.defaultProps = {
  article: {}
};

export default Article;
