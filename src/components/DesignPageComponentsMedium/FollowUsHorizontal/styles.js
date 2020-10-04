import styled from 'styled-components';


export const FollowUsStyled = styled.div`
    width: 100%;
    display: none;
    @media screen and ( max-width: 730px ) {
        display: flex;
        flex-flow: column nowrap;
        align-items: space-around;
        justify-content: flex-start;
        padding-left: 25px;
    }
`;

export const Row1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    padding-right: 25px;
`;

export const Row2 = styled.div`
    width: 100%;
    display: column;
    justify-content: space-between;
    align-items: flex-start;
`;


export const Title = styled.span`
    font-size: 23px;
    font-weight: 600;
    line-height: 32px;
    margin-top: -5px;
`;

export const H1 = styled.h1`
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    color: grey;
    margin-bottom: 20px;
`;
export const H2 = styled.h1`
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    color: grey;
    margin-top: 5px;
    margin-bottom: 15px;
`;
