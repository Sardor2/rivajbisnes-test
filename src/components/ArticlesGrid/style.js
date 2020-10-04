import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 30px;
  grid-auto-flow: row dense;
  width: 100%;
  margin: 30px 0;
  @media screen and ( max-width: 1181px ) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and ( max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(199px, 1fr));
    grid-gap: 25px;
  }
  @media screen and ( max-width: 967px ) {
    grid-template-columns: repeat(auto-fit, minmax(277px, 1fr));
  }
  @media screen and ( max-width: 768px ) {
    grid-template-columns: repeat(auto-fit, minmax(214px, 1fr));
    grid-gap: 25px;
  }
  @media screen and ( max-width: 540px ) {
    display: flex;
    flex-direction: column;
    padding-right: 0;
    padding-left: 0;
  }
`;
