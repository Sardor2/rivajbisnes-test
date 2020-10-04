import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import {
  ArticlesContainer,
  Counter,
  TextsHolder,
  ArticleTitle,
  AuthorInfo,
  AuthorName,
  AuthorLocation,
  PublishInfo,
  PublishDate,
  TimeOfReading
} from './style';


const ArticlePopular = () => (
  <ArticlesContainer>
    <Counter>
      <span>01</span>
    </Counter>
    <TextsHolder>
      <ArticleTitle>
                12 Powerfull ways to change your life when you feel hopeless
      </ArticleTitle>
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
  </ArticlesContainer>
);

export default ArticlePopular;
