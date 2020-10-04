import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const CardsHide = styled.div`
    width: 31%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: white;
    box-shadow: 2px 6px 6px #D5D7D8;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 10px;
    @media screen and ( max-width: 768px ) {
        display: none;
    }
`;

export const Cards = styled.div`
    width: 31%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: white;
    box-shadow: 2px 6px 6px #D5D7D8;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 10px;
    @media screen and ( max-width: 768px ) {
        width: 40%;
    }
    @media screen and ( max-width: 600px ) {
        width: 50%;
    }
    @media screen and ( max-width: 500px ) {
        width: 60%;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 30px;
    margin-bottom: 70px;
`;

export const Heading = styled.div`
    font-size: 20px;
    font-weight: 1000;
    line-height: 25px;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const P = styled.p`
    font-size: 16px;
    line-height: 20px;
`;

export const BtnWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin: ${(props) => (props.center ? '0 auto' : '')};
    margin-left: ${(props) => (props.right ? 'auto' : '')};
    margin-right: ${(props) => (props.right ? '0' : '')};
`;
