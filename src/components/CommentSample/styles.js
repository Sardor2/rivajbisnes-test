import styled from 'styled-components';


export const StyledContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const CommentHeader = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AuthorName = styled.h1`
    font-size: 18px;
    line-height: 28px;
`;

export const PostTime = styled.h1`
    font-size: 14px;
    color: grey;
    margin-left: 15px;
    padding-top: 3px;
`;

export const Textarea = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 10px;
    padding-right: 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
`;

export const FooterSection = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const IconHolder = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        &:hover {
            opacity: 0.5;
            cursor: pointer;
        }
    }
`;

export const NumberOfLikes = styled.div`
    font-size: 18px;
    margin-right: 5px;
`;

export const NumberOfDislikes = styled.div`
    font-size: 18px;
    margin-right: 5px;
`;

export const ButtonHolder = styled.div`
    width: fit-content;
    height: fit-content;
    span {
        font-size: 15px;
        color: grey;
        margin-left: 4px;
    }
    img {
        width: 17px;
        height: 17px;
        margin-bottom: 4px;
    }
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;
