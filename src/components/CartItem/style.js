import styled from 'styled-components';
import ProductCounter from '../ProductCounter';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  width: 520px;

  @media screen and (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const ImageContainer = styled.div`
  h1 {
    width: 100px;
  }
  img {
    width: 200px;
    margin-right: 30px;

    @media screen and (max-width: 1100px) {
      margin: 0;
    }

    @media screen and (max-width: 850px) {
      width: 150px;
    }

    @media screen and (max-width: 560px) {
      width: 110px;
      clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 30% 100%);
    }
  }
`;

export const TitleContainer = styled.div`
  align-self: flex-start;
  h1 {
    font-weight: normal;
    font-size: 20px;
    text-overflow: ellipsis;

    @media screen and (max-width: 500px) {
      width: 200px;
    }
    @media screen and (max-width: 400px) {
      width: 190px;
    }
  }
  span {
    font-size: 16px;
  }
`;

export const Right = styled.div`
  justify-self: flex-end;
  height: 100%;
  width: fit-content;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 850px) {
    align-self: flex-end;
  }
  @media screen and (max-width: 600px) {
    align-self: flex-start;
  }
  @media screen and (max-width: 368px) {
    width: 100%;
  }
`;

export const StyledTrash = styled.img`
  opacity: 1;
    &:hover {
      opacity: .5;
    }

    @media screen and (max-width: 400px) {
      width: 25px;
    }
`;

export const StyledProductCounter = styled(ProductCounter)`
  margin-right: 30px;
  background: red;
`;

export const PriceText = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-right: 30px;
  width: 170px;

  @media screen and (max-width: 1100px) {
    font-size: 22px;
    margin-right: 20px;
  }

  @media screen and (max-width: 850px) {
    width: 140px;
    font-size: 18px;
  }
`;
