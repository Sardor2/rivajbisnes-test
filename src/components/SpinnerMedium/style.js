import styled, { keyframes } from 'styled-components';

export const SpinnerWrapper = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    background-color: #fff;
    opacity: 0.2;
    z-index: 1000;
    display:flex;
    justify-content:center;
    align-items:center
`;

export const up = keyframes`
    from{transform:rotate(0deg); }
    50%{transform:rotate(180deg);}
    100%{transform:rotate(360deg);}
`;

export const SpinnerItem = styled.div`
    width:100px;
    height:100px;
    border-radius:100%;
    position:absolute;
    border: 1px solid #1B1B1E;
    animation: ${up} 1s;
    animation-iteration-count: infinite;
    transition:2s;
    border-bottom:none;
    border-right:none;
    animation-timing-function:linear;
    margin-left: -70px;
    margin-top: -70px;
    left:50%;
    top:50%;

    ${({ customStyles }) => customStyles && customStyles}
`;
