import React, { useEffect,useState,useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import translate from '../../i18n/translate';
import UserDropdown from '../../components/UserDropdown';
import { useWindowSize } from '../../hooks/use-window-size';
import {totalQuantitySelector} from '../../redux/selectors/cartSelector';

import { getUser, setUser } from '../../redux/modules/user/userAction';
import { logout, tokenLocalToRedux } from '../../redux/modules/auth/authActions';


import { audience } from '../../constants/auth0';
import { BellIcon, LoginIcon } from '../../constants/icons';
import { API_URL } from '../../config';
import LangDropdown from '../../components/LangDropdown';
import CartDropdown from '../../components/CartDropdown/index';
import Spinner from '../../components/spinner';
import {
  StyledNavbar,
  BrandContainer,
  BrandName,
  CustomLink,
  StyledNav,
  StyledLink,
  HR,
  Active,
  StyledAccountContainer,
  StyledSpinner,
  StyledCartContainer
} from './style';

import BrandLogo from '../../assets/images/logo.png';
import BrandLogoMobile from '../../assets/icons/logo_small.svg';
import IconSearch from '../../assets/icons/search.svg';
import CartIcon from '../../assets/icons/cart.svg';
// import BellIcon from '../../assets/images/bell.svg';

const options = {
  auth: {
    redirectUrl: window.origin,
    responseType: 'token id_token',
    params: {
      scope: 'openid email profile'
    }
  },
  languageDictionary: {
    title: 'Biznesrivoj'
  },
  theme: {
    logo: 'https://cdn.paycom.uz/merchants/e9ff844a2f44e609c7671426bb40b8d383cb9a20.jpeg'
  }
};

const NavbarMain = ({ setUser, setToken ,totalQuantity}) => {
  const size = useWindowSize();

  const { i18n } = useTranslation();

  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    getAccessTokenSilently
  } = useAuth0();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = API_URL;
      try {
        if (user) {
          const accessToken = await getAccessTokenSilently({
            audience,
            scope: 'read:current_user'
          });

          const userDetailsByIdUrl = `${domain}/users/${user.sub}`;

          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          const userDetails = await metadataResponse.json();

          setUser(userDetails);
          setToken(accessToken);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();
  }, [user, getAccessTokenSilently]);

  const logoutWithRedirect = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return logout({
      returnTo: window.location.origin
    });
  };
  const [hidden,setHidden] = useState(true);
    // Custom Hook to listen to clicks outside the component dropdown
    function useOutsideClick(ref) {
      useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
              if (ref.current && !ref.current.contains(event.target)) {
                  // click handler from Navbar hook that controls hidden for dropdown
                  setHidden(true); 
              }
          }
    
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
              // Unbind the event listener on clean up
              document.removeEventListener("mousedown", handleClickOutside);
          };
      }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);
  return (
    <>
      <StyledNavbar>
        <BrandContainer>
          <Link to="/">
            {size.width > 767
              ? <img src={BrandLogo} alt="icon-brand" />
              : <img src={BrandLogoMobile} alt="icon-brand" />}
          </Link>

        </BrandContainer>
        <StyledNav className="mr-auto">
          <StyledLink>
            <Nav.Link href="#">
              {size.width > 767
                ? <Active>{translate('Obuna bo\'ling', '', i18n)}</Active>
                : <BellIcon />}
            </Nav.Link>
          </StyledLink>
          <StyledAccountContainer>
            {isLoading && <Spinner small />}
            {!isLoading && (
              isAuthenticated ? (
                <UserDropdown
                  user={user}
                  handleLogout={logoutWithRedirect}
                />
              ) : (
                <CustomLink onClick={() => loginWithRedirect()}>
                  {size.width > 767
                    ? translate('Tizimga kirish', '', i18n)
                    : <LoginIcon />}
                </CustomLink>
              )
            )}
            <LangDropdown />
          </StyledAccountContainer>
          <HR />
          <StyledLink>
            <Nav.Link href="#">
              <img src={IconSearch} alt="icon-search" />
            </Nav.Link>
           
              <StyledCartContainer ref={wrapperRef} >
                  <div onClick={() => setHidden(!hidden)} >
                    <img className="icon-cart" src={CartIcon} alt="icon-cart" />
                    <span className="total-quantity">{totalQuantity}</span>
                  </div>
                  {hidden ? null: <CartDropdown  clickHandler = {() => setHidden(!hidden)} />}
  
              </StyledCartContainer>
            
          </StyledLink>
        </StyledNav>
      </StyledNavbar>
    </>
  );
};

NavbarMain.propTypes = {
  setUser: PropTypes.func,
  setToken: PropTypes.func
};

NavbarMain.defaultProps = {
  setUser: () => {},
  setToken: () => {}
};

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  user: state.userReducer.user,
  totalQuantity: totalQuantitySelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (token) => dispatch(getUser(token)),
  setUser: (user) => dispatch(setUser(user)),
  setToken: (token) => dispatch(tokenLocalToRedux(token)),
  logout: (history) => dispatch(logout(history)) 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarMain));
