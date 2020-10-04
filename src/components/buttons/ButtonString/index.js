import React from 'react';
import { useTranslation } from 'react-i18next';
import translate from '../../../i18n/translate';

import { StyledContainer, Row } from './styles';

import IconPlus from '../../../assets/icons/plus.svg';
import IconExchange from '../../../assets/icons/exchange.svg';
import IconSummary from '../../../assets/icons/summary.svg';
import IconComment from '../../../assets/icons/comment.svg';
import IconPrint from '../../../assets/icons/print.svg';
import IconSave from '../../../assets/icons/save.svg';
import IconShare from '../../../assets/icons/share.svg';

const ButtonString = (props) => {
  const { i18n } = useTranslation();
  return (
    <StyledContainer {...props}>
      {
        props.homePageBtn
          ? (
            props.saveShare
              ? (
                props.save
                  ? (
                    <Row>
                      <img src={IconSave} alt="icon-save" />
                      {' '}
                      <span>{translate('Saqlash', '', i18n)}</span>
                    </Row>
                  )
                  : (
                    <Row>
                      <img src={IconShare} alt="icon-share" />
                      {' '}
                      <span>{translate('Ulashish', '', i18n)}</span>
                    </Row>
                  )
              ) : (
                props.exchangeBtn ? (
                  <Row>
                    <img src={IconExchange} alt="icon-exchange" />
                    <span>{translate('O\'zgartirish', '', i18n)}</span>
                  </Row>
                ) : (
                  (
                    <Row>
                      <img src={IconPlus} alt="icon-plus" />
                      {' '}
                      {props.signUp
                        ? <span>{translate('Ro\'yxatdan o\'tish', '', i18n)}</span>
                        : <span>{translate('Mavzuga obuna', '', i18n)}</span> }
                    </Row>
                  )
                )
              )

          ) : (
            props.articlePage1
              ? (
                props.comment
                  ? (
                    <Row>
                      <img src={IconComment} alt="icon-comment" />
                      {' '}
                      <span>{translate('Izoh', '', i18n)}</span>
                    </Row>
                  )
                  : (
                    <Row>
                      <img src={IconSummary} alt="icon-summary" />
                      {' '}
                      <span>{translate('Xulosa', '', i18n)}</span>
                    </Row>
                  )
              ) : (
                <Row>
                  <img src={IconPrint} alt="icon-summary" />
                  {' '}
                  <span>{translate('Chop etish', '', i18n)}</span>
                </Row>
              )
          )
      }
    </StyledContainer>
  );
};

export default ButtonString;
