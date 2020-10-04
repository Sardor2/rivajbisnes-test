import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import translate from '../../i18n/translate';
import {
  StyledContainer,
  TextWrapperLarge,
  ContentWrapper
} from './style';
import ArticleImage from '../ArticleImage';
import { ClampLinesStyled } from '../articleMain/style';
import { PublishDate } from '../ArticleRowTwoMedium/style';

const ArticleMainLarge = ({ article }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <StyledContainer>
        <ContentWrapper>
          <TextWrapperLarge>
            <h3>
              {article.categories.map((item, index) => (
                <Link key={item.id || index} to={item.route}>
                  {translate(item.label, '', i18n)}
                </Link>
              ))}
            </h3>
          </TextWrapperLarge>
          <h1>
            <Link to={article.route}>
              <ClampLinesStyled
                text={translate(article.title_uz, article.title_kr, i18n)}
                id={article.title_uz}
                lines={1}
                ellipsis="..."
                moreText=""
                lessText=""
                stopPropagation
              />
            </Link>
          </h1>
          <span className="d-inline-block">
            <PublishDate style={{ hoverEvents: 'none' }}>
              {article.createdAt}
            </PublishDate>
          </span>
        </ContentWrapper>
        <ArticleImage article={article} isLarge />
      </StyledContainer>
    </>
  );
};

ArticleMainLarge.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)
};

ArticleMainLarge.defaultProps = {
  article: {}
};

export default ArticleMainLarge;
