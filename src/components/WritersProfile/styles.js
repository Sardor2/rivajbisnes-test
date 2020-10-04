import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 50%;
    height: fit-content;
    border-top: 1px solid #D5D7D8;
    border-bottom: 1px solid #D5D7D8;
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 200px;
    margin-bottom: 10px;
    @media screen and ( max-width: 992px ) {
        width: 60%;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and ( max-width: 768px ) {
        width: 95%;
    }
`;

export const ImageWrapper = styled.div`
    width: 140px;
    height: 110px;
    background-position: center;
    background-size: cover;
    img {
        width: 100%;
        height: 100%;
        object-fit:  cover;
    }
`;

export const TextWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin-left: 30px;
    margin-right: 10px;
`;

export const P = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
`;
