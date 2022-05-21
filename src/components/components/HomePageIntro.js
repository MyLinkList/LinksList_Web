import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import Logo from '../../assets/img/Logo-02.png';
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const homePageIntro = () => (
  <div className="container" style={{ justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center' }}>


      <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={1200} triggerOnce>
        <img src={Logo} alt="" style={{ width: "50vh", height: "40vh", cursor: 'pointer' }}/>
      </Reveal>

      <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
        <h3 className="col-white">Create your Web3 Bio Link.</h3>
      </Reveal>

      <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
        <h4 className="col-white">One page serving all your online personas.</h4>
      </Reveal>


  </div>
);
export default homePageIntro;