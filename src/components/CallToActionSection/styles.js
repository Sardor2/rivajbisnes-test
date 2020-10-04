import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 40px;
    background-color: #C82502;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: sticky;
`;

export const Title = styled.div`
    font-size: 10px;
    text-transform: uppercase;
    color: #F4D3CC;
    font-weight: 500;
    span {
        font-size: 12px;
        font-weight: 1000;
        color: white;
        margin-right: 4px;
    }
`;

export const CallToAction = styled.div`
    font-size: 11px;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    margin-left: 4px;
    span {
        font-size: 10px;
        font-weight: 400;
        color: #F4D3CC;
        text-transform: uppercase;
        margin-left: 4px;
        @media screen and ( max-width: 768px ) {
            display: none;
        }
    }
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;
