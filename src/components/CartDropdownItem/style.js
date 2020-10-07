import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const DropdownItemContainer = styled(Link) `
  display: flex;
  padding: 16px;
  margin-left: 0 !important;
  opacity: 1 !important;
  text-decoration: none !important;
  &&:hover {
    opacity:1;
  }

  &:not(:first-child) {
    border-top: 1px solid #dcdacb;
  }
`; 

export const CartImageContainer = styled.div `
  width: 50%;
  && img {
    width: 100%;
    height:auto;
    min-height:80px;
    min-width: 100%;

    &:hover {
      opacity: 1;
    }
  }
`;

export const DetailsContainer = styled.div `
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  
  .book-title {
    display: -webkit-box!important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    max-height: 3.4rem;
    margin-bottom: .4rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1rem;
  }
  .book-details {
    display: flex;
    flex-direction: column;
  }
  .price {
    line-height: 1;
    padding:  4px 0;
    margin-right: 8px;
    white-space: nowrap;

    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 14px;
  }
  .quantity {
    color: #73726c;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    line-height: 1.4;
    font-size: 0.875rem;
  }
`;