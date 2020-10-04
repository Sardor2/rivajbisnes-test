import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
`;

export const Row1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        
    }
`;

export const ColTop1 = styled.div`
    width: 30%;
    height: fit-content;
`;

export const ColTop2 = styled.div`
    width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    @media screen and ( max-width: 768px ) {
        width: 100%;
        justify-content: center;
        margin-top: 30px;
    }
`;

export const Row2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    margin-bottom: 30px;
    justify-content: space-between;
    @media screen and ( max-width: 991px ) {
        display: flex;
        flex-direction: column;
    }
    @media screen and ( max-width: 768px ) {
        margin-bottom: 30px;
    }
`;

export const ColBottom1 = styled.div`

    display: flex;
    flex-direction: row;
    @media screen and ( max-width: 991px ) {
        width: 100vw;
    }
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;
export const ColBottom2 = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and ( max-width: 991px ) {
        width: 100vw;
    }
    @media screen and ( max-width: 768px ) {
        display: flex;
        flex-direction: column;
    }
`;

export const BrandContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
        span {
            font-size: 28px;
            font-weight: 1000;
            line-height: 25px;
        }
        img {
            
            height: 40px;
        }
`;

export const HR = styled.div`
    width: 100%;
    border-bottom: 1px solid #D5D7D8;
`;

export const HrVertical = styled.div`
    width: 100%;
    border-left: 1px solid #D5D7D8;
`;

export const Section = styled.div`
    width: 16vw;
    height: 100%;
    border-left: 1px solid #D5D7D8;
    padding-left: 10px;
    @media screen and ( max-width: 991px ) {
        width: 30vw;
        margin-bottom:  30px;
    }
    @media screen and ( max-width: 768px ) {
        width: 90vw;
        border-left: none;
        border-top: 1px solid #D5D7D8;
        margin-bottom: 0px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 15px;
    font-weight: 1000;
    line-height: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and ( max-width: 768px ) {
        font-size: 14px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    img {
        display: none;
        width: 15px;
        height: 15px;
        @media screen and ( max-width: 768px ) {
            display: block;
        }
    }
`;

export const H1 = styled.h1`
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    @media screen and ( max-width: 768px ) {
        display: none;
    }
`;

export const H2 = styled.div`
    font-size: 13px;
    line-height: 22px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    img {
        width: 12px;
        height: 12px;
        margin-right: 5px;
        margin-bottom: 2px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
