import React from 'react';

import {
    StyledContainer,
    CommentHeader,
    AuthorName,
    PostTime,
    Textarea,
    FooterSection,
    IconHolder,
    NumberOfLikes,
    NumberOfDislikes,
    ButtonHolder
} from './styles';

import IconLike from '../../assets/icons/like.svg';
import IconDislike from '../../assets/icons/dislike.svg';
import IconReply from '../../assets/icons/reply.svg';


const CommentSample = () => (
    <StyledContainer>
        <CommentHeader>
            <AuthorName>John Doe</AuthorName>
            <PostTime>4 days ago</PostTime>
        </CommentHeader>
        <Textarea>Hi there, its my comment Hi there, its my comment Hi there, its my commentHi there, its my comment Hi there, its my commentHi there, its my comment Hi there, its my comment</Textarea>
        <FooterSection>
            <ButtonHolder>
                <img src={IconReply} alt="icon-reply"/>
                <span>Reply</span>
            </ButtonHolder>
            <IconHolder>
                <NumberOfLikes>0</NumberOfLikes>
                <img src={IconLike} alt="icon-like"/>
                <NumberOfDislikes>0</NumberOfDislikes>
                <img src={IconDislike} alt="icon-dislike"/>
            </IconHolder>
        </FooterSection>
    </StyledContainer>
);


export default CommentSample;
