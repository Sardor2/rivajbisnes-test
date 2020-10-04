import styled from 'styled-components';

import ImageBackground from '../../assets/images/asset2-min.jpg';

export const StyledContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: url(${ImageBackground});
    background-position: center;
    background-size: cover;
    object-fit: cover;
    padding-left: 200px;
    @media screen and ( max-width: 768px ) {
        padding-left: 150px;
        padding-right: 150px;
    }
`;
