import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


export const StyledNav = styled(Nav)`
    width: 100%;
    height: 36px;
    border-bottom: 1px solid #D5D7D8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    margin-bottom:30px;
    @media screen and ( max-width: 1050px ) {
        display: none;
        margin-top: 0px;
    }
    
`;

export const StyledLinks = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Links = styled(Link)`
    font-size: 15px;
    color: black;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
        cursor: pointer;
        color: black;
        opacity: 0.5;
        text-transform:none;
        text-decoration:none;
    }
`;
