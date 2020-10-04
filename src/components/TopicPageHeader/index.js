import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import translate from '../../i18n/translate';
import {
  StyledContainer, HeadingBig, TextStyled, BreadCumb
} from './style';
import BreadCumbImg from '../../assets/icons/breadcumb.svg';
import PlusImg from '../../assets/icons/plus.svg';

const TopicPageHeader = ({ page }) => {
  const { i18n } = useTranslation();
  return (
    <StyledContainer>
      <BreadCumb>
        <span>
          <Link to="/">{translate('Asosiy', '', i18n)}</Link>
        </span>
        <img src={BreadCumbImg} alt="breadcumb-img" />
        <span>{translate(page.label, '', i18n)}</span>
      </BreadCumb>
      <HeadingBig>{translate(page.label, '', i18n)}</HeadingBig>
      <TextStyled>
        <img src={PlusImg} alt="plus" />
        {translate('Ushbu mavzuni kuzating', '', i18n)}
      </TextStyled>
    </StyledContainer>
  );
};

TopicPageHeader.propTypes = {
  page: PropTypes.objectOf(PropTypes.any)
};

TopicPageHeader.defaultProps = {
  page: {}
};

export default TopicPageHeader;
