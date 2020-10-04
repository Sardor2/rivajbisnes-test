import styled from 'styled-components';

export const FooterMain = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        width: 35px;
        height: 35px;
        margin-top: 50px;
        margin-left: -16px;
        margin-bottom: 10px;
        @media screen and ( max-width: 890px ) {
        margin-left: 20px;
    }
    }
`;

export const H1 = styled.h1`
    font-size: 14px;
    color: #FFFFFF;
    margin-right: 33px;
    margin-left: -14px;
    margin-top: 15px;
    &:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 890px ) {
        margin-left: 20px;
        margin-right: 0px;
        margin-top: 10px;
        font-size: 14px;
    }
`;

export const H2 = styled.h2`
    font-size: 15px;
    color: #999999;
    margin-right: 40px;
    margin-top: 15px;
    @media screen and ( max-width: 890px ) {
        margin-left: 20px;
        margin-right: 0px;
        margin-top: 10px;
        font-size: 14px;
    }
`;

export const H2Light = styled.h2`
    font-size: 15px;
    color: #999999;
    margin-right: 40px;
    margin-top: 20px;
    @media screen and ( max-width: 890px ) {
        margin-right: 40px;
        font-size: 14px;
    }
    @media screen and ( max-width: 600px ) {
        margin-left: 20px;
    }
`;

export const H6 = styled.h6`
    font-size: 13px;
    color: #999999;
    margin-left: -14px;
    margin-top: 15px;
    @media screen and ( max-width: 890px ) {
        position: absolute;
        margin-top: 10.8rem;
        margin-left: 20px;
    }
    @media screen and ( max-width: 600px ) {
        margin-top: 7rem;
    }
`;

export const Row1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:  flex-start;
    width: 100%;
`;

export const Row2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: -50px;
    margin-top: -13rem;
    margin-bottom: 50px;
    @media screen and ( max-width: 890px ) {
        order: 2;
        margin-top: 0px;
        margin-right: 0px;
        float: left;
    }
    @media screen and ( max-width: 880px ) {
        order: 2;
        margin-top: 0px;
        margin-right: 0px;
        float: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    @media screen and ( max-width: 600px ) {
        order: 2;
        margin-top: 0px;
        margin-right: 0px;
        float: left;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 150px;
    }
`;

export const Image1 = styled.div`
    margin-top: -50px;
    margin-right: 30px;
    @media screen and ( max-width: 600px ) {
        position: absolute;
        margin-top: 35px;
        margin-left: -10px;
}
    img {
        width: 160px;
        height: 60px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const Image2 = styled.div`
    margin-top: -110px;
    margin-right: 30px;
    @media screen and ( max-width: 600px ) {
        position: absolute;
        margin-top: 35px;
        margin-left: 150px;
}

    img {
        width: 155px;
        height: 150px;
        &:hover {
            cursor: pointer;
        }
    }
`;
