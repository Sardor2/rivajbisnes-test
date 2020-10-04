/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactImageFallback from 'react-image-fallback';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { saveBookmark } from '../../redux/modules/bookmarks/bookmarksAction';
import { useWindowSize } from '../../hooks/use-window-size';
import { createMarkup } from '../../utils';
import translate from '../../i18n/translate';

import {
  StyledContainer,
  TextWrapper,
  ButtonsWrapper,
  Col1,
  DescribeStyled,
  MobileImgWrapperStyle,
  ClampLinesStyled
} from './style';

import ButtonString from '../buttons/ButtonString/index';
import FallbackBackground from '../../assets/images/Fallback loader.png';

const ArticleMain = ({ article, ...props }) => {
  const { width } = useWindowSize();
  const { loginWithRedirect } = useAuth0();
  const { i18n } = useTranslation();
  const handleSave = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      props.saveBookmark(user.user_id, article.id);
    } else loginWithRedirect();
  };
  return (
    <StyledContainer {...props}>
      <Col1>
        <h1>
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
        </h1>
        <TextWrapper>
          <h3>
            {article.categories.map((item, index) => (
              <Link key={item.id || index} to={item.route}>
                {translate(item.label, '', i18n)}
              </Link>
            ))}
          </h3>
        </TextWrapper>
        {width < 600 && (
          <MobileImgWrapperStyle>
            <ReactImageFallback
              fallbackImage={FallbackBackground}
              src={article.image}
              initialImage={FallbackBackground}
              alt={translate(article.description_uz, article.description_kr, i18n)}
              loading="lazy"
            />
          </MobileImgWrapperStyle>
        )}
        <ClampLinesStyled
          text={translate(article.description_uz, article.description_kr, i18n)}
          id={article.description_uz}
          lines={3}
          ellipsis="..."
          moreText=""
          lessText=""
          stopPropagation
        />
        <ButtonsWrapper>
          <ButtonString homePageBtn saveShare save onClick={handleSave} />
          <ButtonString homePageBtn saveShare />
        </ButtonsWrapper>
      </Col1>
      {width > 600 && (
        <ReactImageFallback
          fallbackImage={FallbackBackground}
          src={article.image}
          initialImage={FallbackBackground}
          alt={translate(article.description_uz, article.description_kr, i18n)}
          loading="lazy"
        />
      )}
    </StyledContainer>
  );
};

ArticleMain.propTypes = {
  article: PropTypes.objectOf(PropTypes.any),
  saveBookmark: PropTypes.func
};

ArticleMain.defaultProps = {
  article: {},
  saveBookmark: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  saveBookmark: (userId, articleId) => dispatch(saveBookmark(userId, articleId))
});

export default connect(null, mapDispatchToProps)(ArticleMain);
