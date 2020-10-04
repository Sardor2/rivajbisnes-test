import styled from 'styled-components';

export const FeaturedWriterStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const Heading = styled.div`
    font-size: 13px;
    line-height: 14px;
    font-weight: 600;
    padding-top: 30px;
    margin-left: 30px;
    text-transform: uppercase;
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-top: 20px;
    @media screen and ( max-width: 730px ) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: space-between;
        padding-left: 20px;
        padding-right: 20px;
    } 

`;

export const Col1 = styled.div`
    width: 55%;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    @media screen and ( max-width: 730px ) {
        width: 100%;
    }
`;

export const Col2 = styled.div`
    width: 45%;
    display: flex;
    flex-flow: column;
    @media screen and ( max-width: 730px ) {
        width: 100%;
        margin-bottom: 50px;
    } 
`;

export const ImageWrapper = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 100px;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    margin-bottom: 15px;
    @media screen and ( max-width: 730px ) {
        width: 70px;
        height: 70px;
        border-radius: 70px;
        background-position: center;
        background-size: cover;
        overflow: hidden;
        margin-top: 10px;
    } 
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and ( max-width: 730px ) {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    } 
`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 730px ) {
        margin-top: -60px;
        margin-bottom: 30px;
        margin-left: 100px;
        float: left;
    } 
    @media screen and ( max-width: 460px ) {
        font-size: 15px;
        margin-left: 70px;
        margin-bottom: 10px;
    }
`;

export const P = styled.p`
    font-size: 12px;
    color: grey;
    line-height: 20px;
`;

export const TextHolder = styled.div`
    width: 50%;
    height: fit-content;
    @media screen and ( max-width: 730px ) {
        width: 100%;
        text-align: center;
    }
    @media screen and ( min-width: 730px ) and ( max-width: 850px ) {
        padding-top: 10px;
        margin-left: 10px;
    }
`;
