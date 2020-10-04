import styled from 'styled-components';


export const ArticleMainStyled = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    @media screen and ( max-width: 950px ) {
        padding-right: 30px;
    }
    @media screen and ( max-width: 850px ) {
        padding-right: 10px;
    }
    @media screen and ( max-width: 800px ) {
        padding-right: 0px;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 50%;
    img {
        width: 100%;
        height: 370px;
        object-fit: cover;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    margin-top: 15px;
`;

export const Heading = styled.div`
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    @media screen and ( max-width: 900px ) {
        font-size: 20px;
        line-height: 30px;
    }
`;

export const SecondaryTitle = styled.div` 
    font-size: 15px;
    color: grey;
    line-height: 24px;
    font-weight: 300;
    margin-top: 10px;
`;

export const PublishContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

export const Avatar = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background-color: black;
    overflow: hidden;
    background-position: center;
    margin-top: 2px;

`;

export const Text = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;
`;

export const AuthorInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
`;

export const AuthorName = styled.div`
    font-size: 14px;
    font-weight: 500;

`;

export const AuthorLocation = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
    
`;

export const PublishInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 10px;
`;

export const PublishDate = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: grey;
`;

export const ReadTime = styled.div`
    font-size: 12px;
    margin-left: 5px;
    font-weight: 500;
    color: grey;
`;

export const StarIcon = styled.div`
    margin-left: 5px;
    margin-top: -3px;
    img {
        width: 12px;
        height: 12px;
    }
`;
