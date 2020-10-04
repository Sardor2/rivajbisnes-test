import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #E7E9E9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Row = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    @media screen and ( max-width: 850px ) {
        width: 100vw;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const Heading = styled.h1`
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: #666666;
`;

export const HR = styled.div`
    width: 100%;
    border-bottom: 1px solid #D5D7D8;
`;

export const Title = styled.h1`
    font-size: 12px;
    color: #666666;
    font-weight: 1000;
    text-transform: uppercase;
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

export const GuidelinesPreview = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 25px;
    p {
        font-size: 12px;
        line-height: 17px;
        color: #666666;
    }
`;

export const ButtonHolder = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    span {
        font-size: 15px;
        color: grey;
        margin-left: 4px;
    }
    img {
        width: 12px;
        height: 12px;
        margin-top: 2px;
    }
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;