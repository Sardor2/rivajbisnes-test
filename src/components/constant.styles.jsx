import styled from 'styled-components';


export const HeadingBig = styled.span`
    font-size: 44px;
    line-height: 48px;
    font-weight: 1000;
    margin-bottom: 20px;
`;

export const HeadingSmall = styled.span`
    font-size: 16px;
    font-weight: 1000;
    line-height: 20px;
    margin-bottom: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    &>a{
        color:inherit;
    }

    & >a:hover{
        text-decoration:none;
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const SecondaryText = styled.span`
    font-size: 17px;
    line-height: 23px;
    color: #282828;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const AuthorNameBlue = styled.div`
    margin-right: 5px;
    font-size: 14px;
    color: #282828;
    span {
        font-size: 14px;
        margin-left: 4px;
        font-weight: 600;
        color: #0787B1;
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }
`;

export const AuthorNameGrey = styled.span`
    margin-right: 5px;
    font-size: 13px;
    font-weight: 700;
    color: grey;
`;

export const ArticleType = styled.span`
    font-size: 14px;
    text-transform: ${(props) => (props.lowercase ? 'none' : 'uppercase')};
    color: #0787B1;
    font-weight: 400;
    margin-bottom: 10px;
    margin-left: 2px;
    margin-right: 2px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    &>a{
        color:inherit;
    }

    &>a:hover{
        text-decoration:none;
    }
`;

export const PublishTime = styled.span`
    font-size: 12px;
    color: grey;
    font-weight: 600;
    margin-top: 10px;
`;

export const ImageSource = styled.span`
    font-size: 12px;
    color: grey;
    font-weight: 500;
`;

export const HR = styled.div`
    border-bottom: 1px solid #D5D7D8;
`;

export const Highlighted = styled.span`
    color: #0787B1;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const Italic = styled.span`
    font-style: italic;
`;

export const Price = styled.span`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
`;

export const H1Bold = styled.h1`
    font-size: 18px;
    font-weight: 1000;
    line-height: 30px;
`;

export const TitlesOfSections = styled.h1`
    font-size: 12px;
    font-weight: 1000;
    text-transform: uppercase;
    padding-left: 12px;
`;

export const Heading16 = styled.h1`
    font-size: 16px;
    margin-right: 10px;
`;

export const Heading17Grey = styled.h1`
    font-size: 17px;
    text-transform: uppercase;
    color: #6F6F6F;
    font-weight: 1000;
    margin-top: 30px;
    margin-bottom: -10px;
`;
