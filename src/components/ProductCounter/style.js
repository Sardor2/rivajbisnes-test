import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000000;
  width: 80px;
  height: 33.6px;
  overflow: hidden;
  align-content: center;
  margin-right: ${(props) => (props.isCart ? '20px' : '10px')};
`;

export const StyledButton = styled.button`
  border: none;
  background: white;
  height: 100%;
  text-align: center;
  width: 33px;
  overflow: hidden;

  &:focus, &:hover {
    outline: none;
  }
`;
