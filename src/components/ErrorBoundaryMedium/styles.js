import styled from 'styled-components';


export const StyledErrorPage = styled.div`
    width: 100%;
    height: 610px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-image: linear-gradient( 113.3deg,  rgba(134,209,228,1) -1.8%, rgba(60,80,115,1) 86.4% );
`;

export const ErrorContainer = styled.div`
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
`;

export const ImageWrapper = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const Text = styled.div`
    font-size: 20px;
    font-weight: 300;
    line-height: 28px;
    color: white;
    text-align: center;
`;
