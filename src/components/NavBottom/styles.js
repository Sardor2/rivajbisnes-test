import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 20px;
    @media screen and ( max-width: 768px ) {
        display: none;
    }
`;

export const BrandContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
        span {
            font-size: 15px;
            font-weight: 1000;
            line-height: 15px;
        }
        img {
            width: 25px;
            height: 25px;
        }
`;

export const TextWrapper = styled.div`
    width: 60vw;
    height: fit-content;
    display: flex;
    flex-flow: row wrap;
    /* align-items: center; */
`;

export const H = styled.h1`
    font-size: 11px;
    font-weight: 700;
    color: #ABAFB0;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
        cursor: pointer;
    }
`;

export const HR = styled.div`
    border-left: 1.5px solid #ABAFB0;
    margin-bottom: 10px;
`;
