import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 27%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    @media screen and ( max-width: 768px ) {
        display: none;
    }
    @media screen and ( max-width: 800px ) {
        width: 50%;
    }
    @media screen and ( max-width: 992px ) {
        width: 40%;
    }
    @media screen and ( max-width: 1050px ) {
        width: 30%;
        margin-left: 30px;
    }
`;

export const Col1 = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-left: 1px solid  #D5D7D8;
    margin-top: 50px;
    margin-bottom: 100px;
    padding-right: 20px;
`;

export const ImageWrapper = styled.div`
    width: 180px;
    height: 100px;
    background-position: center;
    background-size: cover;
    margin-left: 13px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const TextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding-left: 13px;
    padding-right: 15px;
    padding-top: 10px;
`;

export const Col2 = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-top: 1px solid  #D5D7D8;
    h1 {
        font-size: 12px;
        font-weight: 1000;
        text-transform: uppercase;
        padding-top: 10px;
    }
`;
