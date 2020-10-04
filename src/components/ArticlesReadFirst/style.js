import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 250px;

  @media screen and (max-width: 1280px) {
    padding: 0 150px;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 100px;
  } 
  @media screen and (max-width: 720px) {
    padding: 0 70px;
  }
  @media screen and (max-width: 540px) {
    padding: 0 40px;
  }
`;

export const TextWrapper = styled.div`
  h3 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const ArticlesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > article {
    margin-right: 10px;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
