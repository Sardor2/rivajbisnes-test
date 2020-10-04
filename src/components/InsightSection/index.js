import React from 'react';

import {
    StyledContainer,
    Title,
    Heading,
    H1,
    Row
} from './styles';

import ArticleMain from '../articleMain/index';

const InsightSection = () => (
    <StyledContainer>
        <Title>Insight Center</Title>
        <Heading>The Era of Job Crafting</Heading>
        <H1>Design the work you want.</H1>
        <Row>
            <ArticleMain big secondaryTextHide hrHide  imageHide />
            <ArticleMain big secondaryTextHide hrHide imageHide />
        </Row>
    </StyledContainer>
);

export default InsightSection;
