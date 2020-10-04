import React from 'react';

import {
    ArticleMainStyled,
    ImageWrapper,
    TextWrapper,
    Heading,
    SecondaryTitle,
    PublishContainer,
    Avatar,
    Text,
    AuthorInfo,
    AuthorName,
    AuthorLocation,
    PublishInfo,
    PublishDate,
    ReadTime,
    StarIcon
} from './styles';

import Image from '../../../assets/images/cartoon5.jpg';
import starIcon from '../../../assets/icons/star.png';


const ArticleMain = () => (
    <ArticleMainStyled>
        <ImageWrapper>
            <img src={Image} alt="main-article"/>
        </ImageWrapper>
        <TextWrapper>
            <Heading>
                Phil Knight on the Surprising Origin Story of Nike’s Name and Swoosh
            </Heading>
            <SecondaryTitle>
                Would Nike still be Nike if it had been named Dimension Six?
            </SecondaryTitle>
            <PublishContainer>
                <Avatar>
                    <img src={Image} alt="avatar"/>
                </Avatar>
                <Text>
                    <AuthorInfo>
                        <AuthorName>
                            Marker Editors
                        </AuthorName>
                        <AuthorLocation>
                            in Marker
                        </AuthorLocation>
                    </AuthorInfo>
                    <PublishInfo>
                        <PublishDate>
                            Jan 15
                        </PublishDate> 
                        <ReadTime>
                            10 min
                        </ReadTime>
                        <StarIcon>
                            <img src={starIcon} alt="star-icon"/>
                        </StarIcon>
                    </PublishInfo>
                </Text>
            </PublishContainer>
        </TextWrapper>
    </ArticleMainStyled>
);

export default ArticleMain;
