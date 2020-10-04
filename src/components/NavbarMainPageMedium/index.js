import React from 'react';

import {
  StyledNavbar,
  BrandWrapper,
  StyledNav,
  StyledItem,
  Img,
  UserProfile
} from './style';

import BrandLogo from '../../assets/images/logo.png';
import SearchIcon from '../../assets/icons/search.svg';
import SaveIcon from '../../assets/icons/save.two.svg';
import NotificationIcon from '../../assets/icons/alarm.svg';


const NavbarMainPage = () => (
  <>
    <StyledNavbar>
      <BrandWrapper>
        <img src={BrandLogo} alt="brand-logo" />
      </BrandWrapper>
      <StyledNav className="ml-auto nav-items">
        <StyledItem>
          <img src={SearchIcon} alt="search-icon" />
        </StyledItem>
        <StyledItem>
          <Img><img src={SaveIcon} alt="save-icon" /></Img>
        </StyledItem>
        <StyledItem><img src={NotificationIcon} alt="notification-icon" /></StyledItem>
        <UserProfile />
      </StyledNav>
    </StyledNavbar>
  </>
);

export default NavbarMainPage;
