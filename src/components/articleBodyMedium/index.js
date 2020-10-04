import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import {
  ArticlesContainer,
  ImageContainer,
  TextsHolder,
  TypeOfTopic,
  ArticleTitle,
  SecondaryTitle,
  AuthorInfo,
  AuthorName,
  AuthorLocation,
  PublishInfo,
  PublishDate,
  TimeOfReading,
  IconWrapper,
  ImgWrapper
} from './style';

import Img from '../../assets/images/cartoon7.jpg';
import IconMenu from '../../assets/icons/menu.dots.svg';
import IconSave from '../../assets/icons/save-icon.svg';


const ArticleBody = () => (
  <ArticlesContainer>
    <TextsHolder>
      <TypeOfTopic>
        RELATIONSHIPS
        <span>PopularTopic</span>
      </TypeOfTopic>
      <ArticleTitle>
        12 Powerfull ways to change your life when you feel hopeless
      </ArticleTitle>
      <SecondaryTitle>
        An honest authentic guide to self improvement
      </SecondaryTitle>
      <AuthorInfo>
        <AuthorName>
          Ayodejii Avossika
        </AuthorName>
        <AuthorLocation>
          in Mind Cafe
        </AuthorLocation>
      </AuthorInfo>
      <PublishInfo>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Updated Jan 15</Tooltip>}>
          <span className="d-inline-block">
            <PublishDate style={{ hoverEvents: 'none' }}>
              Dec 22, 2019
            </PublishDate>
          </span>
        </OverlayTrigger>
        <TimeOfReading>
          9 min read
        </TimeOfReading>
      </PublishInfo>
    </TextsHolder>
    <IconWrapper>
      <ImgWrapper><img src={IconSave} alt="icon-save" /></ImgWrapper>
      <img src={IconMenu} alt="icon-menu" />
    </IconWrapper>
    <ImageContainer>
      <img src={Img} alt="article" />
    </ImageContainer>
  </ArticlesContainer>
);

export default ArticleBody;
