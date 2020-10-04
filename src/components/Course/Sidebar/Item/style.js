import styled from 'styled-components';

export const Title = styled.span`
    font-size: 1rem;
    color: #CCCCCC;
`;

export const Caption = styled.span`
    margin-top: 2px;
    font-size: 0.8rem;
    color: #757575;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    min-height: 65px;
    padding: 5px 10px;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    &:hover ${Title} {
        color: white;
    }
    &:hover ${Caption} {
        color: #A7A7A7;
    }
`;

export const Image = styled.img`
    width: 80px;
    height: 100%;
    margin-right: 10px;
`;
