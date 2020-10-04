import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import {
    ArticlesContainer,
    ImageContainer,
    TextsHolder,
    ArticleTitle,
    SecondaryTitle,
    AuthorInfo,
    AuthorName,
    AuthorLocation,
    PublishInfo,
    PublishDate,
    TimeOfReading,
    IconWrapper
} from './styles';

import Img from '../../../assets/images/cartoon3.jpg';
import IconSave from '../../../assets/icons/save-icon.svg';


const ArticleBodyDesign = () => (
    <ArticlesContainer>
        <TextsHolder>
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
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Save Article</Tooltip>}>
                <span className="d-inline-block">
                    <img src={IconSave} alt="icon-save" style={{ hoverEvents: 'none' }}/>
                </span>
            </OverlayTrigger>
        </IconWrapper>
        <ImageContainer>
            <img src={Img} alt="article"/>
        </ImageContainer>
    </ArticlesContainer>
);

export default ArticleBodyDesign;
