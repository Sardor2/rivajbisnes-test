import styled from 'styled-components';


export const FooterStyled = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background-color: #191919;
`;

export const Row1 = styled.div`
    width: 100%;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 70px;
    padding-bottom: 20px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    @media screen and ( max-width: 730px ) {
        display: none;
    }
`;

export const Row2 = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 70px;
    @media screen and ( max-width: 730px ) {
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

export const TextWrapper = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    text-align: start;
`;

export const Title = styled.h1`
    font-size: 19px;
    font-weight: 500;
    color: white;
    line-height: 20px;
    margin-bottom: 15px;
    &:hover {
        cursor: pointer;
    }
`;

export const P = styled.p`
    font-size: 13px;
    line-height: 19px;
    font-weight: 500;
    color: #BABABA;
    margin-right: 20px;
        span {
            text-decoration: underline;
            &:hover {
                cursor: pointer;
            }
        }
`;

export const HR = styled.hr`
    width: 90%;
    border-color: #BABABA;
    @media screen and ( max-width: 730px ) {
        display: none;
    }
`;

export const Brand = styled.span`
    font-size: 30px;
    font-weight: 600;
    color: white;
    padding-left: 65px;
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 730px ) {
        padding-left: 25px;
    }
`;

export const NavbarBottom = styled.div`
    width: 27vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;


export const H1 = styled.h1`
    font-size: 13px;
    color: #BABABA;
    font-weight: 300;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;



