import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
`;

export const Body = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px;
    @media screen and ( max-width: 992px ) {
        justify-content: flex-start;
        padding-right: 0;
    }
`;
