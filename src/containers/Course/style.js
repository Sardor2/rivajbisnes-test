import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
    background: white;
`;

export const Layout = styled.div`
    display: grid;
    grid-template-columns: minmax(240px, 300px) 1fr;
    height: calc(100% - var(--courses-header-height));
`;

export const Body = styled.div`
    background: #140703;
`;
