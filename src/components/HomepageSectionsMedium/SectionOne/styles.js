import styled from 'styled-components';

export const SectionOneStyled = styled.div`
    text-align: center;
`;

export const H2Bold = styled.h2`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
    line-height: 20px; 
    @media screen and ( max-width: 710px ) {
        font-size: 14px;
        line-height: 20px; 
    }
`;

export const H2Bold2 = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: start;
    margin-left: 30px;
    margin-bottom: -20px;
    @media screen and ( max-width: 685px ) {
        font-size:  14px;
        margin-top: 30px;
        margin-left: 0px;
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
    @media screen and ( max-width: 685px ) {
        font-size: 14px;
    }
`;

export const H1 = styled.h1`
    font-size: 14px;
    margin-top: 25px;
    margin-bottom: 107px;
    span {
        color: #018F69;
    }
`;

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and ( max-width: 680px ) {
        display: flex;
        flex-direction: column;
    } 

`;


export const Sqr = styled.div`
    background-color: #03A87C;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 3px 3px 20px #c8ccd1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 12px;
        height: 12px;
    }
`;
