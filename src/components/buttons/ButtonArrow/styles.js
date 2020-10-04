import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const Row = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    span {
        font-size: 15px;
        margin-right: 5px;
    }
    img {
        width: 14px;
        height: 14px;
        margin-top: 5px;
    }
`;
