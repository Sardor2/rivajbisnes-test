import styled from 'styled-components';

import { Form } from 'react-bootstrap';

import ImageBackground from '../../assets/images/asset-5.jpeg';


export const StyledContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: row;
    background-position: center;
    background-size: cover;
    background-image: url(${ImageBackground});
    object-fit: cover;
    padding-left: 10px;
    padding-right: 10px;
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const Heading = styled.div`
    width: 60%;
    font-size: 40px;
    line-height: 45px;
    font-weight: 1000;
    color: white;
    @media screen and ( max-width: 991px ) {
        width: 100%;
    }
    @media screen and ( max-width: 768px ) {
        font-size: 30px;
    }
`;

export const Title = styled.h1`
    font-size: 12px;
    font-weight: 1000;
    color: white;
    text-transform: uppercase;
`;

export const Col1 = styled.div`
    width: 50vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 60px;
    margin-right: 20px;
    @media screen and ( max-width: 991px ) {
        width: 40vw;
    }
    @media screen and ( max-width: 768px ) {
        width: 100%;
    } 
`;

export const Col2 = styled.div`
    width: 50vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 60px;
    margin-right: 20px;
    @media screen and ( max-width: 991px ) {
        width: 60vw;
    }
    @media screen and ( max-width: 768px ) {
        width: 100%;
    } 
`;

export const Wrapper = styled.div`
    width: 50vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    @media screen and ( max-width: 991px ) {
        width: 60vw;
    }
    @media screen and ( max-width: 768px ) {
        width: 100%;
        display: flex;
        flex-direction: column;
    } 
`;

export const FormContainer = styled.div`
    width: 35vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    @media screen and ( max-width: 768px ) {
        width: 100%;
    }
`;

export const WrapperButton = styled.div`
    width: 10vw;
    @media screen and ( max-width: 768px ) {
        width: 100%;
        margin-top: 10px;
    }
`;


export const FormStyled1 = styled(Form)`
    width: 40%;
    height: 34px;
    margin-right: 5px;
    @media screen and ( max-width: 768px ) {
    margin-right: 10px;
    }
`;

export const FormStyled2 = styled(Form)`
    width: 60%;
    height: 34px;
    margin-left: 5px;
    margin-right: 10px;
    @media screen and ( max-width: 768px ) {
    margin-right: 0px;
    }
`;
