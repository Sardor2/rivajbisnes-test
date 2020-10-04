import React from 'react';

import { Form } from 'react-bootstrap';

import {
  StyledContainer,
  Row,
  Heading,
  HR,
  Title,
  ButtonWrapper,
  GuidelinesPreview,
  ButtonHolder
} from './styles';


import ButtonCustom from '../Buttons/ButtonCustom';
import CommentSample from '../CommentSample';
import IconArrowDown from '../../assets/icons/down-arrow.svg';


const CommentFormSection = () => (
  <StyledContainer>
    <Row>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Heading><Form.Label>Comments</Form.Label></Heading>
          <Form.Control as="textarea" rows="3" placeholder="Leave Comment" />
        </Form.Group>
      </Form>
      <ButtonWrapper>
        <ButtonCustom postBtn>Post Comment</ButtonCustom>
      </ButtonWrapper>
      <Title>8 comments</Title>
      <HR />
      <CommentSample />
      <ButtonHolder>
        <img src={IconArrowDown} alt="icon-reply" />
        <span>Join the conversation</span>
      </ButtonHolder>
      <HR />
      <GuidelinesPreview>
        <Title> Posting Guidelines</Title>
        <p>
          We hope the conversations that take place
          on HBR.org will be energetic, constructive,
          and thought-provoking. To comment, readers
          must sign in or register. And to ensure the
          quality of the discussion, our moderating
          team will review all comments and may edit
          them for clarity, length, and relevance.
          Comments that are overly promotional, mean-spirited,
          or off-topic may be deleted per the moderators' judgment.
          All postings become the property of Harvard Business Publishing.
        </p>
      </GuidelinesPreview>

    </Row>
  </StyledContainer>
);

export default CommentFormSection;
