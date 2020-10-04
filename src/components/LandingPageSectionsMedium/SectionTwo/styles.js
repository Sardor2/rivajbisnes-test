import styled from 'styled-components';

export const HeadingMain2 = styled.h1`
    font-size: 85px;
    font-weight: medium;
    color: black;
    text-align: left;
    padding-top: 100px;
    font-family: 'Caladea';
    font-weight: 500;
    line-height: 70px;
    color: #292929;
    @media screen and ( max-width: 1030px ) {
        padding-top: 100px;
    }
    @media screen and ( max-width: 900px ) {
        font-size: 70px;
        padding-top: 100px; 
    }
    @media screen and ( max-width: 889px ) {
        font-size: 32px;
        line-height: 36px;
    }
`;

export const SectionTwoStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between; 
    align-items: center;
`;

export const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and ( max-width: 900px ) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const H2 = styled.div`
    font-size: 17px;
    color: #757575;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    @media screen and ( max-width: 680px ) {
        font-size: 14px;
    }
`;

export const H2Bold3 = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: start;
    margin-top: 50px;
    margin-bottom: 50px;
    color: black;
    @media screen and ( max-width: 680px ) {
        font-size: 14px;
    }
`;

export const ButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 285px;
    margin-right: 100px;
    @media screen and ( max-width: 680px ) {
        text-align: center;
        margin-left: 50px;
    }

    @media screen and ( max-width: 889px ) {
        margin-top: 60px;
        margin-right: 0;
        text-align: center;
    }
    @media screen and ( max-width: 990px ) {
        margin-right: 50px;
    }
    @media screen and ( max-width: 900px ) {
        order: 2;
    }
`;

export const HR = styled.hr`
    border-bottom: 0.5px solid #CCCCCC;
    margin-top: 70px; 
    width: 40%;
`;

export const P = styled.div`
    font-size: 20px;
    color: rgba(0, 0, 0, 0.54);
    line-height: 32px;
    font-weight: 300;
    text-align: start;
    margin-left: 100px;
    span {
        background-color: #CEFCE9;
    }
    @media screen and ( max-width: 680px ) {
        font-size: 14px;
        padding-left: 20px;
        padding-right: 50px;
        line-height: 24px;
    }
    @media screen and ( max-width: 990px ) {
        margin-left: 0px;
        margin-right: -60px;
    }
`;
