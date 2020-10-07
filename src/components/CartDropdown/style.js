import styled from 'styled-components';
// import {Link} from 'react-router-dom';

export const DropdownContainer = styled.div `
  width: 300px;
  max-height: 500px;
  position: absolute;
  top: 25px;
  right: -30px;
  display: flex;
  flex-direction: column;
  flex-wrap: none;
  border-color: 1px solid rgb(213, 215, 216);
  z-index: 3;
  color: black;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);

  @media (max-width: 800px) {
    right: -10px;
  }
`;


export const CartItemsContainer = styled.div `
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
  overflow: auto;

  .empty-message {
    font-size: 18px;
    padding: 25px 0;
    cursor: auto;
    text-align: center;
    color: #73726c;
  }

`;

export const CheckoutButtonContainer = styled.div `
  && {
    box-shadow: 0 -2px 4px rgba(0,0,0,.08), 0 -4px 12px rgba(0,0,0,.08);
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #dcdacb;
    padding: 16px;
  }
  

  && .total-price {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 19px;
    margin-bottom: 8px;
  }
  && .cart-button {
    color: #fff;
    width: 100%;
    text-decoration:none;
    white-space: nowrap;
    background-color: #000;
    height: 48px;
    position: relative;
    align-items: center;
    border: none;
    cursor: pointer;
    display: inline-flex;
    min-width: 10rem;
    padding: 0 1.2rem;
    justify-content: center;
    user-select: none;
    vertical-align: bottom;
    opacity: 1;
    margin-left: 0;
    &:hover {
      opacity: 0.8;
    }
  }
  button {
    padding: 5px 10px;
    border: none;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: 5px auto;
    width: 80%;
    &:hover {
      opacity: 0.8;
    }
  }
`;

