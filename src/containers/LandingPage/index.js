import React from 'react';

import styled from 'styled-components';


import NavbarMain from '../../components/Navbar/index';
import Header from '../../components/Header/index';
import SectionOne from '../../components/HomepageSections/SectionOne/index';
import SectionTwo from '../../components/HomepageSections/SectionTwo/index';
import SectionThree from '../../components/HomepageSections/SectionThree/index';
import SectionFour from '../../components/HomepageSections/SectionFour/index';
import Footer from '../../components/Footer/Footer';


const StyledHomePage = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`;

const LandingPage = () => (


  <StyledHomePage>
    <NavbarMain />
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <Footer />
  </StyledHomePage>
);


export default LandingPage;
