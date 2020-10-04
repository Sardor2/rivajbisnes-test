import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 409px;
  box-shadow: 1px 1px 8px #DFDEDE;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px 20px 50px;
  background: linear-gradient(104.97deg, #F5F5F5 5.91%, #DFDEDE 144.71%);
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  h3 {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
  span {
    display: block;
    font-size: 12px;
    margin-top: 30px;
  }
  & > span {
    margin-top: 15px;
  }
  & div {
    font-size: 1.1rem;
    line-height: 20px;
  }
`;

export const PriceButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  justify-self: flex-end;
  span {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    position: relative;
    span {
      align-self: flex-start;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    button {
      padding: 5px 10px;
      font-size: 16px;
      align-self: flex-end;
    }
  }
`;
