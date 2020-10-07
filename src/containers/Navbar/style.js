import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import CustomInput from '../../components/Input';

export const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 50px;
    border-top:  1.5px solid #D5D7D8;
    background-color: white;
    border-bottom: 1px solid #D5D7D8;
    top:0;
    z-index:5

`;

export const SearchInput = styled(CustomInput)`
    display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const BrandContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
    @media screen and ( max-width: 800px ) {
        margin-left: 10px;
    }


    img {
        height: 20px;
        margin-right: 20px;
        &:hover {
            opacity: 0.5;
        }
    }

    @media (max-width: 767px) {
        width:20%;
        img{
            height:45px;
            margin:0px;
        }
    }
`;

export const BrandName = styled.div`
    width: 80px;
    height: fit-content;
    font-size: 16px;
    line-height: 15px;
    font-weight: 1000;
    overflow: none;
    border-left:  1.5px solid #D5D7D8;
    padding-left: 20px;
    @media screen and ( max-width: 800px ) {
        font-size: 12px;
    }
`;

export const StyledNav = styled(Nav)`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 16px;
    padding-right: 30px;
    @media screen and ( max-width: 800px ) {
        padding-right: 0px;
    }
`;

export const StyledLink = styled.div`
    img {
        width: 20px;
        height: 20px;
        &:hover {
            opacity: 0.5;
        }
    }

    svg{
        width:20px;
        height:20px;
        fill:#C92805;
        margin:0px;

        &:hover{
            opacity:0.5;
        }
    }

    display:flex;
    justify-content:center;
    align-items:center;

    a{
        color:#212529;
        opacity:0.8;
        margin-left:10px;
        
        &:hover{
            opacity:0.5;
        }
        
    }
`;

export const StyledAccountContainer = styled.div`
    img {
        &:hover {
            opacity: 0.8;
        }
    }

    svg{
        width:20px;
        height:20px;
        fill:#000;

    }

    display:flex;
    justify-content:center;
    align-items:center;

    a{
        color:#212529;
        opacity:0.8;
        padding:.5rem;
        &:hover{
            opacity:0.5;
        }
        
    }
`;

export const StyledCartContainer = styled.div `
    position: relative;
    margin-left: 1.25rem;
    &:hover {
        cursor: pointer;
    }
    .total-quantity {
        position: absolute;
        top:0.5px;
        right:-5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight:400;
        font-size:10px;
        color:white;
        width:10px;
        height: 10px;
        padding: 7px;
        background-color:black;
        border-radius: 50%;
        opacity: 1;
    }
`

export const HR = styled.div`
    border-left:  1.5px solid #D5D7D8;
    margin-left: 30px;
    @media screen and ( max-width: 800px ) {
            display: none;
    }
`;

export const CustomLink = styled.span`
    &:hover{ cursor: pointer }
`;

export const Active = styled.div`
    color: #C92805;
`;

export const StyledSpinner = styled.div`
    width: 15px;
`;