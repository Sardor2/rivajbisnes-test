import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Component = styled.div`
  width: 330px;
  height: 370px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 6px 22px #D5D7D8;
`;

export const IconShare = styled.img`
  width: 50px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 45px;
  background-color: #EFF0F0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 15px;
    height: 15px;
    margin-right: 15px;
    margin-left: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    font-size: 16px;
    font-weight: 400;
    margin-left: 10px;
    margin-right: 5px;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UrlWrapper = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #D5D7D8;
  border-top: 1px solid #D5D7D8;
  padding-top: 10px;
  padding-bottom: 15px;
  span {
    font-size: 16px;
    font-weight: 400;
    margin-left: 10px;
    margin-bottom: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const UrlContainer = styled.div`
  width: 296px;
  height: fit-content;
  border: 1px solid #D5D7D8;
  overflow: hidden;
  background-color: #DDDDDD;
  margin-left: auto;
  margin-right: auto;
`;

export const Url = styled.div`
  font-size: 12px;
  padding: 8px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  list-style: none;
`;

export const Button = styled.span`
  font-size: 16px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const PrimaryButton = styled.a`
  width: 296px;
  height: 47px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
  span {
    color: white;
    font-size: 14px;
    font-weight: 500;
    margin-right: 5px;
  }
  text {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
`;
