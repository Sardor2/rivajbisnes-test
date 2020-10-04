import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import translate from '../../i18n/translate';
import {
  StyledContainer,
  Col1,
  ImageWrapper,
  Col2,
  TextWrapper
} from './styles';

import RecommendedArticle from '../ArticlesRecommended/index';
import Spinner from '../spinner';
import ImageSide from '../../assets/images/Fallback loader.png';

import { HeadingSmall, TitlesOfSections } from '../constant.styles';

const ArticlePageAside = ({ article, loading }) => {
  const { i18n } = useTranslation();
  return (
    <StyledContainer>

      {
        article && (
          <>
            <Col1>
              <TitlesOfSections>What to read next</TitlesOfSections>
              {
                article.map((item) => (
                  <React.Fragment key={item.id}>
                    <ImageWrapper>
                      <img src={ImageSide} alt="aside" />
                    </ImageWrapper>
                    <TextWrapper>
                      <HeadingSmall>
                        <Link to={item.route}>
                          {translate(item.title_uz, item.title_kr, i18n)}
                        </Link>
                      </HeadingSmall>
                    </TextWrapper>
                  </React.Fragment>
                ))
              }
            </Col1>
            <Col2>
              <TitlesOfSections>Recommended</TitlesOfSections>
              {/* <RecommendedArticle />
              <RecommendedArticle />
              <RecommendedArticle /> */}
            </Col2>
          </>
        )
      }
      {loading && <Spinner />}
    </StyledContainer>
  );
};

export default ArticlePageAside;
