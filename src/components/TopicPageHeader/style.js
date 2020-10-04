import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-left: 250px;
    margin-top: 30px;
    margin-bottom: 30px;
    @media screen and (max-width: 1280px) {
        padding-left: 150px;
    }
    @media screen and (max-width: 1000px) {
        padding: 0 100px;
    }
    @media screen and (max-width: 720px) {
        padding: 0 70px;
    }
    @media screen and (max-width: 540px) {
        padding: 0 40px;
    }
    /* @media screen and ( max-width: 800px ) {
        padding-left: 10px;
    } */
`;

export const Row = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    /* border: 2px solid red; */
    @media screen and ( max-width: 1000px ) {
        width: 100%;
    }
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const RowHide = styled.div`
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    @media screen and ( max-width: 1000px ) {
        width: 100%;
    }
    @media screen and ( max-width: 768px ) {
        display: none;
    }
`;

export const HeadingBig = styled.span`
    font-size: 44px;
    line-height: 48px;
    font-weight: 1000;
    margin-bottom: 20px;
    text-transform:capitalize;
`;

export const TextStyled = styled.div`
    color: black;
    font-weight: 600;
    font-size:16px;
    text-transform: normal;
    display: flex;
    align-items: center;
    img {
        margin-right: 5px;
        width: 16px;
        height: 16px;
    }
`;

export const BreadCumb = styled.div`
    margin-bottom: 25px;
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    span {
        margin-right: 10px;
        a {
            text-decoration: none;
            color: black;
        }
        &:hover {
            opacity: 0.5;
        }
    }
    img {
        margin-right: 10px;
    }
    
`;
