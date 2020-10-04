import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import ReactImageFallback from 'react-image-fallback';
import { useTranslation } from 'react-i18next';
import translate, { translateHTML } from '../../i18n/translate';
import Spinner from '../spinner';
import { createMarkup } from '../../utils';
import {
  StyledContainer,
  Header,
  HeadingStyled,
  TextWrapper,
  IconWrapper,
  ImageWrapper,
  Paragraph,
  ArticleType
} from './styles';

import {
  HeadingBig,
  HR,
  PublishTime
} from '../constant.styles';

import ButtonString from '../buttons/ButtonString/index';
import ImageArticle from '../../assets/images/Fallback loader.png';


const MainFullArticle = ({ article, loading }) => {
  const componentRef = useRef();
  const { i18n } = useTranslation();

  const chooseBody = () => {
    if (i18n.language === 'uz') {
      return article.body_uz;
    }
    if (i18n.language === 'kr') {
      if (article.body_kr) {
        return article.body_kr;
      }
    }
    return translateHTML(article.body_uz);
  };

  return (
    <StyledContainer ref={componentRef}>
      {loading && <Spinner />}
      {article && (
        <>
          <Header>
            <TextWrapper>
              <ArticleType>
                {article.categories.map((item, index) => (
                  <Link key={item.id || index} to={item.route}>
                    {translate(item.label, '', i18n)}
                  </Link>
                ))}
              </ArticleType>
              <HeadingStyled>{translate(article.title_uz, article.title_kr, i18n)}</HeadingStyled>
              <PublishTime>{article.createdAt}</PublishTime>
            </TextWrapper>
            <IconWrapper>
              <ButtonString homePageBtn saveShare save />
              <ButtonString homePageBtn saveShare />

              <ReactToPrint
                trigger={() => <ButtonString />}
                content={() => componentRef.current}
              />
            </IconWrapper>
            <ImageWrapper>
              <ReactImageFallback
                fallbackImage={ImageArticle}
                src={article.image}
                initialImage={ImageArticle}
                alt={translate(article.description_uz, article.description_kr, i18n)}
                loading="lazy"
              />
            </ImageWrapper>
          </Header>
          <HR />
          <Paragraph dangerouslySetInnerHTML={createMarkup(chooseBody())} />
        </>
      )}
    </StyledContainer>
  );
};

export default MainFullArticle;
