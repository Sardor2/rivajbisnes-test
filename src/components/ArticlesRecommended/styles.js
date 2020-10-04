import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid #D5D7D8;
    margin-top: 10px;
    @media screen and ( max-width: 768px ) {
        display: none;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    margin-bottom: 20px;
`;

export const Col1 = styled.div`
    width: 40%;
    height: 60%;
    background-position: center;
    background-size: cover;
    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
    }
`;

export const Col2 = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`;


export const Title = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
`;

