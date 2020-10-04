import styled from 'styled-components';


export const ArticlesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
`;

export const Counter = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: 70px;
    span {
        font-size: 30px;
        color: #D9D9D9;
        font-weight: 500;
    }
    @media screen and ( max-width: 800px ) {
        margin-left: 50px;
    }
    @media screen and ( max-width: 950px ) {
        margin-left: 0px;
    }
`;


export const TextsHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 25px;
    margin-right: 120px;
    @media screen and ( max-width: 1200px ) {
    margin-right: 0px;
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;


export const AuthorInfo = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;

export const AuthorName = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 5px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const AuthorLocation = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const PublishInfo = styled.div`
    width:  fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PublishDate = styled.span`
    font-size: 12px;
    color: #757575;
    margin-right: 5px;
`;

export const TimeOfReading = styled.span`
    font-size: 12px;
    color: #757575;
`;

