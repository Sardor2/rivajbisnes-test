import styled from 'styled-components';


export const SectionFourStyled = styled.div`
    text-align:  center;
`;

export const HeadingMain = styled.h1`
    font-size: 80px;
    font-weight: 700;
    color: black;
    text-align: center;
    padding: 100px;
    padding-bottom: 50px;
    font-family: 'Caladea';
    font-weight: 500;
    line-height: 85px;
    color: #292929;
    @media screen and ( max-width: 1030px ) {
        padding: 50px;
        padding-top: 100px;
    }
    @media screen and ( max-width: 850px ) {
        font-size: 70px;
        padding: 30px;
        padding-bottom: 50px;
        padding-top: 100px; 
    }
    @media screen and ( max-width: 750px ) {
        font-size: 32px;
        line-height: 36px;
    }
`;
