import styled from 'styled-components';

export const Container = styled.header`
    height: var(--courses-header-height);
    background: #222222;
    overflow: hidden;
    display: flex;
    flex-direction: row;
`;

export const LogoContainer = styled.div`
    width: var(--courses-header-height);
    height: var(--courses-header-height);
    background: #327483;
    position: relative;
    z-index: 2;
    display: grid;
    place-items: center;
    &:after {
        position: absolute;
        content: '';
        top: 5px;
        right: -14px;
        width: 30px;
        height: 30px;
        background: #327483;
        transform: rotate(45deg);
    }
`;

export const Logo = styled.div`
    width: var(--courses-header-height);
    height: var(--courses-header-height);
    display: grid;
    place-items: center;
    color: white;
    font-weight: bold;
    z-index: 3;
`;

export const TitleContainer = styled.div`
    width: 250px;
    height: var(--courses-header-height);
    background: #23515B;
    position: relative;
    z-index: 1;
    &:after {
        position: absolute;
        content: '';
        top: 5px;
        right: -14px;
        width: 30px;
        height: 30px;
        background: #23515B;
        transform: rotate(45deg);
    }
`;

export const Title = styled.div`
    color: white;
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    padding-left: 30px;
    font-weight: 300;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 2;
`;
