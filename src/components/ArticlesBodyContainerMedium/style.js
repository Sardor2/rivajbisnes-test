import styled from 'styled-components';

export const ArticleBodyStyled = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 35px;
    padding-left: 88px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    @media screen and ( max-width: 1100px ) {
        padding-left: 50px;
    }
    /* @media screen and ( max-width: 1015px ) {
        padding-left: 20px;
        width: 65%;
    } */
    /* @media screen and ( max-width: 950px ) {
        width: 100%;
        padding-left: 0px;
    } */
`;
