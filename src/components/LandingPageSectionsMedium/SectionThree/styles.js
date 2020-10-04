import styled from 'styled-components';

export const H2Bold = styled.h2`
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
    @media screen and ( max-width: 710px ) {
        font-size: 14px;
        line-height: 20px; 
    }
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

export const HR = styled.hr`
    border-bottom: 0.5px solid #CCCCCC;
    margin-top: 70px; 
    width: 40%;
`;
