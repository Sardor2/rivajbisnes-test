import styled from 'styled-components';
import { TextWrapper } from '../articleMain/style';

export const StyledContainer = styled.div`
  grid-column: 1/5;
  
  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 60px 20px 60px;
  align-items: center;

  border-top: 1px solid #D5D7D8;
  border-bottom: 1px solid #D5D7D8;

  @media screen and (max-width: 720px) {
    padding-left: 40px;
    padding-right: 40px;
    height: fit-content;
  }

  & > img {
    display: block;
    margin-left: 20px;
  }
  & span {
    @media screen and (max-width: 720px) {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 450px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

export const HR = styled.hr`
  display: block;
  margin: 0;
  width: 100%;
  height: .1px;

  border-bottom: 1px solid #D5D7D8;
`;

export const TextWrapperLarge = styled(TextWrapper)`
  h3 {
    margin-top: 0;
  }
  h3 > a {
    color: black;
    opacity: 1;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: normal;

    &:hover {
      text-decoration: none;
      opacity: 0.5; 
    }

    @media screen and (max-width: 720px) {
      font-size: 12px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 85%;
  h1 > a {
    color: black;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -0.1px;

    @media screen and (max-width: 720px) {
      font-size: 18px;
    }
    @media screen and (max-width: 450px) {
      font-size: 16px;
    }
  }
`;
