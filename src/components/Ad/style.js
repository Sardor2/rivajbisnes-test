import styled from 'styled-components';

const setWidth = (props) => {
  if (props.width) return props.width;
  const map = {
    1: '265px',
    2: '100%',
    3: '100%'
  };
  return map[props.priority];
};
const setHeight = (props) => {
  if (props.height) return props.height;
  const map = {
    1: '458px',
    2: '160px'
  };
  return map[props.priority];
};
const setGridColumn = (props) => {
  const map = {
    1: 'auto/auto',
    2: '1/5',
    3: '1/2'
  };
  return map[props.priority];
};
export const StyledContainer = styled.div`
  grid-column: ${(props) => setGridColumn(props)};
  width: ${(props) => setWidth(props)};
  background: #F2F2F2;
  position: relative;
  height: ${(props) => setHeight(props)};
  padding-left: 20px;

  @media screen and (max-width: 720px) {
    height: 160px;
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: fit-content;
  padding: 5px 13px 5px 13px;
  font-size: 12px;
  color: #999999;
  background: #F2F2F2;
  border: 1px solid #DDDDDD;
  position: absolute;
  right: 0;
  bottom: 0;
  text-transform: lowercase;

  @media screen and ( max-width: 720px ) {
    
  }
`;
