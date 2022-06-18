import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Particle from '../components/Particle';
import HomePageIntro from '../components/HomePageIntro';

import FeatureBox from '../components/FeatureBox';

import Footer from '../components/footer';
//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';

//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO



const HomePage = () => (
  <div className="greyscheme">
    <StyledHeader theme={theme} />
    <section className="jumbotron no-bg relative">
      <Particle />
      <HomePageIntro />
    </section>

    <section className='container no-top no-bottom'>
      <FeatureBox />
    </section>
    <div className="de-flex-col" style={{
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: 20
    }}>

    </div>
    <Footer />

  </div>

);
export default HomePage;