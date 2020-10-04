import styled from 'styled-components';

export const MobileImgWrapperStyle = styled.div`
  &&&& img {
    height: 120px;
    width: 120px;
    border-radius: 3px;
    margin-bottom: 10px 0;
    object-fit:cover;

    @media screen and (max-width: 320px) {
      height: 100px;
      width: 100px;
      margin: 0;
    }
  }
`;

export const LargeArticleImgWrapper = styled(MobileImgWrapperStyle)`
  &&&& img {
    height: 120px;
    width: 196px;
    margin: 0;
  }
`;
