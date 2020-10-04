import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #CBE2E4;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and ( max-width: 768px ) {
        height: fit-content;
    }
`;

export const Row = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 50px;
    @media screen and ( max-width: 991px ) {
        width: 100%;
    }
`;

export const Heading = styled.div`
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    margin-top: 30px;
    span {
    font-size: 20px;
    font-weight: 1000;
    line-height: 25px;
    @media screen and ( max-width: 768px ) {
        font-size: 16px;
    }
    }
    @media screen and ( max-width: 768px ) {
        font-size: 16px;
    }
`;

export const ButtonWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin-bottom: 30px;
`;
