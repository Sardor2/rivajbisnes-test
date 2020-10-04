import styled from 'styled-components';


export const HeaderStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding-top: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const HeadingMain = styled.h1`
    font-size: 80px;
    font-weight: 700;
    color: black;
    text-align: center;
    padding: 150px;
    padding-bottom: 50px;
    padding-top: 100px;
    font-family: 'Caladea';
    font-weight: 500;
    line-height: 85px;
    color: #292929;
    @media screen and ( max-width: 1030px ) {
        padding: 50px;
        padding-top: 100px;
    }
    @media screen and ( max-width: 850px ) {
        font-size: 70px;
        padding: 30px;
        padding-bottom: 50px;
        padding-top: 100px; 
    }
    @media screen and ( max-width: 750px ) {
        font-size: 32px;
        line-height: 36px;

    }
`;

export const HR = styled.hr`
border-bottom: 0.5px solid #CCCCCC;
margin-top: 70px; 
width: 40%;
`;


export const H2Bold = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
`;

export const H2Second = styled.div`
    font-size: 17px;
    color: #757575;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
    span {
        font-size: 17px;
        color: #757575;
        font-weight: 700;
        margin-left: 5px; 
    }
`;
