import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const InputBorder = styled.span`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #4285F4;
`;

export const Input = styled.input`
    width: 100%;
    border: 0;
    padding: 5px 5px;
    border-bottom: 1px solid #929fba;
    &:focus {
        outline: none;
    }
    &:focus ~ ${InputBorder} {
        width: 100%;
        transition: 0.5s;
    }
`;
