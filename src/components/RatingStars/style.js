import styled from 'styled-components';
import Stars from 'react-stars';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;

  span {
    display: inline-block;
    margin-left: 5px;
  }
  #rating {
    min-width: 25px;
  }
  #rating-details {
    margin-left: 10px;
    font-size: 14px;

    @media screen and (max-width: 1200px) {
      margin: 0;
    }
  }
  #rating-data {
    color: #0787B1;
    font-size: 14px;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ReactStars = styled(Stars)`
  span {
    margin-left: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;
