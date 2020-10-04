import styled from 'styled-components';
import { TopContainer as ImageContainer } from '../../components/BookMain/style';

export const StyledContainer = styled.div`
  padding: 60px 12%;

  @media screen and (max-width: 1024px) {
    padding: 60px 8%;
  }

  @media screen and (max-width: 870px) {
    padding: 60px 6%;
  }
  
  @media screen and (max-width: 870px) {
    padding: 60px 8%;
  }
`;

export const TopContainer = styled.div`

`;

export const DownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const MainDescription = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 720px) {
    flex-direction: column;

  }
`;

export const ImageWrapper = styled(ImageContainer)`
  width: 345px;
  margin-right: 30px;
  img {
    width: 200px;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const BookOverview = styled.div`
  width: 100%;
  margin-right: 34px;
  h1 {
    font-weight: normal;
    font-size: 25px;
    margin-bottom: 40px;
  }

  h3 {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const StyledButton = styled.button`
  background: #28B2FF;
  color: white;
  width: 165px;
  border: none;
  padding: 10px 20px;
  margin-top: 40px;
  font-size: 18px;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1074px) {
    margin-top: 20px;
    margin-right: 20px;
  }
  @media screen and (max-width: 780px) {
    width: 182px;
  }
  @media screen and (max-width: 320px) {
    font-size: 14px;
    margin-right: 10px;
    padding: 10px 15px;
    width: 160px;
  }
`;

export const ShareThisText = styled.p`
  font-size: 16px;
  font-weight: bold;
  
`;

export const ShareParentContainer = styled.div`
  @media screen and (max-width: 1074px) {
    display: flex;
    margin-bottom: 15px;
  }
`;

export const ShareContainer = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p { 
    margin: 0 10px 0 0; 
  }
  img {
    width: 15px;
  }
`;

export const PurchaseContainer = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  p {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 5px 0;
  }
  hr {
    margin: 0 0 20px 0;
    height: 1px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 32px;
`;

export const BlackButton = styled.button`
  background: black;
  color: white;
  width: 100px;
  height: 100%;
  text-transform: uppercase;
  border: none;
  font-size: 12px;
`;

export const HR = styled.hr``;
export const BookDescription = styled.div`
  width: 80%;
  margin-right: 20px;
  hr {
    margin-top: 40px;
    height: 1px;
  }
  h1 {
    font-size: 25px;
  }
  h3 {
    font-weight: bold;
    font-size: 18px;
  }
  div {
    margin-top: 20px;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-right: 0;
  }
`;
export const Line = styled.div`
  margin-top: 20px;
  #prop-name {
    margin-right: 5px;
    font-weight: bold;
    width: fit-content;
  }
`;

export const InteractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 1074px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
