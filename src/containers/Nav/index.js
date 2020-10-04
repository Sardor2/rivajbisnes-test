/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import translate from '../../i18n/translate';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getNav } from '../../redux/modules/navbar/navAction';
import { navbarSelector } from '../../redux/selectors/navbarSelector';

import {
  StyledNav, LinkContainer, LinkStyled, CarouselWrapper
} from './style';


const NavMain = ({
  list,
  getNav
}) => {
  useEffect(() => {
    if (!list.length) {
      getNav();
    }
  }, []);
  const { i18n } = useTranslation();

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    arrows: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <StyledNav>
      <CarouselWrapper>
        <LinkContainer>
          <Slider {...settings}>
            {list.map((link) => (
              <LinkStyled
                key={link.label}
                to={link.route}
              >
                {translate(link.label, '', i18n)}
              </LinkStyled>
            ))}
          </Slider>
        </LinkContainer>
      </CarouselWrapper>
    </StyledNav>
  );
};

NavMain.propTypes = {
  getNav: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

NavMain.defaultProps = {
  getNav: () => {},
  list: []
};

const mapStateToProps = (state) => ({
  list: navbarSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getNav: () => dispatch(getNav())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMain));
