import styled from 'styled-components';

export const StyledContainer = styled.div `
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 44px;
  right: 20px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div `
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;