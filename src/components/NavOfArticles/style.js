import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: 63px;
    background-color: #D5D7D8;
    margin-bottom: 30px;
    margin-top: 30px;
`;

export const Wrapper = styled.div`
    width:100%;
    max-width:768px;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin:auto;
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const Title = styled.div`
    width: 40%;
    height: 100%;
    ${({ active }) => active && `
    border-bottom: 4px solid black;
    background-color: #EEEFEF;
    `} 
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 0;
        /* margin-top: 15px; */
        /* margin-left: 100px; */
        /* @media screen and ( max-width: 768px ) {
            margin-left: 0px;
        } */
    }
    img {
        width: 20px;
        height:  20px;
        margin-top: 5px;
        margin-right: 5px;
        display: none;
        @media screen and ( max-width: 768px ) {
            display: block;
        }
    }
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 992px ) {
        width: 30%;
    }
    @media screen and ( max-width: 768px ) {
        width: 100%;
        text-align: start;
        padding-left: 10px;
    }
`;
