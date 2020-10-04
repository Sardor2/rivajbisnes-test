import styled from 'styled-components';

export const PopularArticleContainer = styled.div`
    width: 38%;
    opacity:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 2;
    margin-top: 100px;
    float: right;
    /* @media screen and ( max-width: 1015px ) {
        width: 35%;
    } */
    @media screen and ( max-width: 950px ) {
        width: 100%;
        order: 2;
        display:none;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    padding-left: 60px;
    @media screen and ( max-width: 800px ) {
        padding-left: 0px;
    }
`;

export const HR = styled.hr`
    width: 60%;
    border: 0.8px solid #CCCCCC;
    margin-left: 70px;
`;
