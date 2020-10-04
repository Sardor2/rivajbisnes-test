import styled, { css } from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';


export const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: white;
    opacity: 95%;
`;


export const StyledNav = styled(Nav)`
    font-weight: 500;
    font-size: 15px;
    margin-right: 11px;
    color: black;
`;

export const StyledLink = styled(Nav.Link)`
    color: black;
    img {
        display: none;
    }
    @media screen and ( max-width: 750px ) {
        display: none;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 10px;
    margin-right: 70px;
    @media screen and ( max-width: 750px ) {
        margin-right: 0px;
    }
`;

export const BrandWrapper = styled(Navbar.Brand)`
    margin-left: 78px;
    display: flex;
    align-items: center;
    @media screen and ( max-width: 750px ) {
        margin-left: 0px;
    }
    
    span {
        font-size: 25px;
        font-weight: 600;
        @media screen and ( max-width: 750px ) {
            display: none;
        }
    }

    img {
        width: 40px;
        height: 40px;
        display: none;
        @media screen and ( max-width: 750px ) {
            display: block;
        }
    }
`;

// Navbar of Main page 

export const MainPageNavbar = css`
    width: 100%;
    height: 80px;
    background-color: white;
`;

