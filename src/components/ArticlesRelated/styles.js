import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 33%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #D5D7D8;
    margin-right: 20px;
    padding-left: 15px;
    @media screen and ( max-width: 992px ) {
        width: 33vw;
        margin-right: 10px;

    }
    @media screen and ( max-width: 768px ) {
        border-left: none;
        border-top: 1px solid #D5D7D8;
        margin-bottom: 20px;
        padding-left: 0px;
        width: 100%;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 130px;
    background-position: center;
    background-size: cover;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and ( max-width: 992px ) {
        width: 95%; 
    }
    @media screen and ( max-width: 768px ) {
        width: 50%;
        margin-top: 30px;
    }
`;

export const TextWrapper = styled.div`
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;