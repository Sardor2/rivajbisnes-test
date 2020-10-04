/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { saveBookmark } from '../../redux/modules/bookmarks/bookmarksAction';
import translate from '../../i18n/translate';
import ArticleImage from '../ArticleImage';
import {
  StyledContainer,
  TextWrapper,
  ButtonsWrapper,
  Col1,
  ContentWrapper,
  DescribeStyled,
  ClampLinesStyled
} from './style';

import ButtonString from '../buttons/ButtonString/index';

const ArticleMain = ({ article, ...props }) => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const { i18n } = useTranslation();
  const handleSave = () => {
    if (isAuthenticated) {
      props.saveBookmark(user.sub, article.id);
    } else loginWithRedirect();
  };
  return (
    <StyledContainer {...props}>
      <Col1>
        {!props.noImage && <ArticleImage article={article} />}
        <ContentWrapper {...props}>
          <TextWrapper>
            <h3>
              {article.categories.map((item, index) => (
                <Link key={item.id || index} to={item.route}>
                  {translate(item.label, '', i18n)}
                </Link>
              ))}
            </h3>
          </TextWrapper>
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

          <ClampLinesStyled
            text={translate(article.description_uz, article.description_kr, i18n)}
            id={article.description_uz}
            lines={2}
            ellipsis="..."
            moreText=""
            lessText=""
            stopPropagation
          />
          <ButtonsWrapper>
            <ButtonString homePageBtn saveShare save onClick={handleSave} />
            <ButtonString homePageBtn saveShare />
          </ButtonsWrapper>
        </ContentWrapper>
      </Col1>
    </StyledContainer>
  );
};

ArticleMain.propTypes = {
  article: PropTypes.objectOf(PropTypes.any),
  saveBookmark: PropTypes.func,
  noImage: PropTypes.bool
};

ArticleMain.defaultProps = {
  article: {},
  noImage: false,
  saveBookmark: PropTypes.func
};

const mapStateToProps = (state) => ({
  loading: state.bookmarksReducer.loading,
  error: state.bookmarksReducer.error,
  unauthorized: state.authReducer.unauthorized
});

const mapDispatchToProps = (dispatch) => ({
  saveBookmark: (userId, articleId) => dispatch(saveBookmark(userId, articleId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleMain);
