import styled from 'styled-components';


export const Hashtag = styled.div`
    width: fit-content;
    height: 42px;
    background-color: #F2F2F2;
    border-radius: 20px;
    text-align: center;
    font-size: 19px;
    color: #696969;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 4px;
    margin-right: 4px;


    &:hover {
        background-color: #E9E9E9;
        cursor: pointer;
    }

`;
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
`;

export const Sqr = styled.div`
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-left: 5px;
    margin-right: 6px;
    box-shadow: 0 5px 30px grey;


    img {
        width: 18px;
        height: 18px;
    }
`;
