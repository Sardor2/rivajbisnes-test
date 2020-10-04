import styled from 'styled-components';
import { BlackButton } from '../SingleBookPage/style';

export const StyledContainer = styled.div`
  padding: 60px 10%;
  h1 {
    font-weight: bold;
  }

  @media screen and (max-width: 990px) {
    padding: 60px 10%;
    overflow: hidden;
  }
`;

export const ItemsContainer = styled.div``;

export const OrderSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PromoContainer = styled.div`
  order: 1;
  input[type=text] {
    padding: 6px;
    border: 1px solid black;
  }

  @media screen and (max-width: 850px) {
    order: 2;
    h1 {
      font-size: 1.4rem;
    }
    input[type=text] {
      font-size: 18px;
      width: 180px;
    }
  }
`;
export const StyledBlackButton = styled(BlackButton)`
  margin-left: 15px;
  height: 38px;
`;
export const BigBlackButton = styled(StyledBlackButton)`
  margin: 0 0 0 15px;
  &:disabled {
    cursor: not-allowed;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-grow: 1;
`;

export const OrderContainer = styled.div`
  width: 380px;
  order: 2;
  & > div {
    display: flex;
    justify-content: flex-start;
    span {
      font-weight: bold;
      font-size: 24px;

      @media screen and (max-width: 850px) {
        font-size: 20px;
      }

      @media screen and (max-width: 380px) {
        font-size: 18px;
      }
    }
    #price {
      color: #28B2FF;
      margin-left: 10px;
    }
  }
  div:nth-child(2) {
    margin-top: 5px;
  }

  @media screen and (max-width: 850px) {
    order: 1;
    margin-bottom: 20px;
    width: 100%;
  }
`;
