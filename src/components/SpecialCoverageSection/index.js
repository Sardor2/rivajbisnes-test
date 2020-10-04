import React from 'react';

import {
    StyledContainer,
    Title,
    Heading,
    H1,
    Row
} from './styles';

import ArticleMain from '../ArticleMain/index';

const SpecialCoverageSection = () => (
    <StyledContainer>
        <Title>Special Coverage</Title>
        <Heading>Coronavirus</Heading>
        <H1>Leading and working through a pandemic.</H1>
        <Row>
            <ArticleMain big secondaryTextHide hrHide imageHide />
            <ArticleMain big secondaryTextHide hrHide imageHide />
        </Row>
    </StyledContainer>
);

export default SpecialCoverageSection;
