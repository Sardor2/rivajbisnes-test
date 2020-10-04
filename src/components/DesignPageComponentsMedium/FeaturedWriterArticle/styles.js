import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 15px;
`;

export const TextWrapper = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 10px;
    margin-right: 20px;
    /* text-overflow: ellipsis;
    overflow: hidden; */
`;

export const Heading = styled.h1`
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
`;

export const TimeOfReading = styled.span`
    font-size: 13px;
    color: #757575;
`;

export const ImageWrapper = styled.div`
    width: 55px;
    height: 55px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
