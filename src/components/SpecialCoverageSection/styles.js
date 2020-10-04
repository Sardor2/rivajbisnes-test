import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 360px;
    background: #E0EAFC;  
    background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC); 
    background: linear-gradient(to right, #CFDEF3, #E0EAFC); 
    background-size: cover;
    background-position: center;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    padding-left: 210px;
    padding-top: 70px;
    @media screen and ( max-width: 991px ) {
        padding-left: 150px;
    }
    @media screen and ( max-width: 800px ) {
        padding-left: 100px;
    }
    @media screen and ( max-width: 768px ) {
        padding-left: 10px;
        height: fit-content;
    }
`;

export const Heading = styled.span`
    font-size: 40px;
    font-weight: 1000;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const Title = styled.span`
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
    color: #F813FF;
`;

export const H1 = styled.h1`
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
`;

export const Row = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and ( max-width: 1150px ) {
        width: 90%;
    }
    @media screen and ( max-width: 991px ) {
        width: 100%;
    }
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;
