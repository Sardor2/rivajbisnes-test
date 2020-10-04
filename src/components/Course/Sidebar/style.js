import styled, { css } from 'styled-components';

const scroll = css`
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: #222222;
        border-radius: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(35,81,91,0.4);
        border-radius: 8px;
        transform: 0.5s;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(35,81,91,1);
    }
`;

export const Container = styled.div`
    background: #222222;
    overflow-x: hidden;
    overflow-y: scroll;
    ${scroll};
`;
