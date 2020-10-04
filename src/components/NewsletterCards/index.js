import React from 'react';

import {
    StyledContainer,
    Wrapper,
    Heading,
    Cards,
    P
} from './styles';

import IconSettings from '../../assets/icons/settings.svg';
import IconAlarm from '../../assets/icons/alarm-clock.svg';
import IconFish from '../../assets/icons/fish (1).svg';

import ButtonString from '../Buttons/ButtonString/index';


const NewsletterCards = () => (
    <StyledContainer>
        <Cards>
            <Wrapper>
                <img src={IconSettings} alt="icon-settings"/>
                <Heading>Management Tip of the Day</Heading>
            </Wrapper>
            <P>Quick, practical management advice to help you do your job better, delivered weekdays.</P>
            <ButtonString homePageBtn signUp />
        </Cards>
        <Cards>
            <Wrapper>
                <img src={IconAlarm} alt="icon-alarm"/>
                <Heading>The Daily Alert</Heading>
            </Wrapper>
            <P>Links to all the digital articles published in the last 24 hours.</P>
            <ButtonString homePageBtn signUp />
        </Cards>
        <Cards>
            <Wrapper>
                <img src={IconFish} alt="icon-fish"/>
                <Heading>Leadership</Heading>
            </Wrapper>
            <P>Must-reads from our most recent articles on leadership and managing people, delivered once a month.</P>
            <ButtonString homePageBtn signUp />
        </Cards>
    </StyledContainer>
);

export default NewsletterCards;
