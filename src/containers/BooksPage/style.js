import styled from 'styled-components';

export const StyledContainer = styled.div``;

export const StyledHeader = styled.div`
  background: #F5F5F5;
  width: 100%;
  height: fit-content;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: bold;
    line-height: 60px;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 20px;
    h1 {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

export const LargeCard = styled.div`
  height: 387px;
  margin-top: 20px;
  background: white;
  width: 55%;
  height: fit-content;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 70%;
    padding: 20px;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    padding: 20px;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  min-width: 250px;
  img {
    object-fit: cover;
    width: 250px;
    height: 250px;
    display: block;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    justify-self: flex-start;
    img {
      width: 200px;
    }
  }
  @media screen and (max-width: 360px) {
    justify-self: flex-start;
    img {
      width: 185px;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    text-transform: uppercase;
    font-size: 12px;
  }
  h1 {
    font-size: 20px;
    line-height: 25px;
  }
  span {
    display: block;
    margin-bottom: 20px;
  }
  & > button {
    display: block;
    background: white;
    padding: 3px 25px 3px 25px;
    border: 1px solid black;
  }

  @media screen and (max-width: 768px) {
    h3 {
      margin-top: 20px;
    }
    h1 {
      font-size: 16px;
      line-height: 22px;
    }
    button {
      padding: 3px 20px 3px 20px;
    }
  }
`;

export const Button = styled.button`
  display: block;
  background: white;
  padding: 5px 20px;
  border: 1px solid black;
  width: 170px;

  @media screen and (max-width: 500px) {
    font-size: 18px;
    padding: 5px 15px;
  }
`;

export const BooksBody = styled.div`
  padding: 60px 10% 60px 10%;
`;

export const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
