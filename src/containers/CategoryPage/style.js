import styled from 'styled-components';


export const LoaderWrapper = styled.div`
    display:flex;
    justify-content:center;
    border-bottom: 1px solid #D5D7D8;
`;


export const LoadMore = styled.div`
    display:block;
    padding-top:24px;
    padding-bottom:24px;
    max-width:990px;
    width:100%;
    margin:auto;
    text-align:center;
    text-transform:capitalize;
    cursor:pointer;
    
    &:hover{
        opacity:0.7;
    }
`;
