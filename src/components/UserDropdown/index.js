import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import translate from '../../i18n/translate';
import fallbackProfileImg from '../../assets/icons/profile.svg';

import {
  UserAreaContainer,
  UserAvatarContainer,
  DropDownList,
  ReactImageStyled
} from './style';


const UserDropdown = ({ user, handleLogout }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const { i18n } = useTranslation();
  useEffect(() => {
    /**
       * Alert if clicked on outside of element
       */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      {
        user && (
          <UserAreaContainer ref={ref}>
            <UserAvatarContainer onClick={() => setActive(!active)}>
              <ReactImageStyled
                src={user.picture}
                fallbackImage={fallbackProfileImg}
                alt="profile image"
              />
            </UserAvatarContainer>
            <DropDownList active={active}>
              <li><Link to="/my-profile">{translate('Profil', '', i18n)}</Link></li>
              <li><Link to="/bookmarks">{translate('Saqlanganlar', '', i18n)}</Link></li>
              <li>
                <a role="button" tabIndex={0} onClick={handleLogout} onKeyDown={handleLogout}>
                  {translate('Chiqish', '', i18n)}
                </a>
              </li>
            </DropDownList>
          </UserAreaContainer>
        )
      }
    </>

  );
};


export default UserDropdown;
