import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Particle from '../components/Particle';
import HomePageIntro from '../components/HomePageIntro';
import Footer from '../components/footer';
//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';

//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO



const HomePage = () => (
<div className="greyscheme">
  <StyledHeader theme={theme} />
      <section className="jumbotron no-bg relative" style={{backgroundImage: `url(${'./img/background/8.jpg'})`}}>
       <Particle/>
         <HomePageIntro/>
      </section>

      

    <Footer />

  </div>

);
export default HomePage;