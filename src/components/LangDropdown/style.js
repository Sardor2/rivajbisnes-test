import styled from 'styled-components';
import { DropDownList } from '../UserDropdown/style';

export const LangContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  cursor: pointer;
  margin-left: 10px;
`;

export const LangDropDownList = styled(DropDownList)`
  width: 100px;
  z-index: 4;
  top: 44px;
   li > a {
    padding: 0;
    text-align: center;
  }
`;

export const FlagContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  margin: 10px 10px 10px 0;
  align-items: center;
  img {
    width: 22px;
    margin-right: 5px;
  }
  p {
    display: inline-block;
    margin: 0;
  }
`;
