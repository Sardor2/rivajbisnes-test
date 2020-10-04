import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const Cards = styled.div`
    width: 30%;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #D5D7D8;
    box-shadow: 2px 6px 6px #D5D7D8;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 8px;
    @media screen and ( max-width: 768px ) {
        width: 100%;
        height: 170px;
        margin-bottom: 30px;
        padding-bottom: 10px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 30px;
    margin-bottom: 10px;
    img {
        width: 30%;
        height: 50px;
    }
`;

export const Heading = styled.div`
    font-size: 20px;
    font-weight: 1000;
    line-height: 25px;
    @media screen and ( max-width: 768px ) {
        font-size: 16px;
    }
`;

export const P = styled.p`
    font-size: 14px;
    line-height: 20px;
`;
