import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import Logo from '../../assets/img/Logo-01.png';
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
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="spacer-single"></div>

        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
        <h6> <span className="text-uppercase color">LinksList.io</span></h6>

        </Reveal>
        <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
          <p className="lead col-white">
          <h1 className="col-white">Create your Web3 Bio Link.</h1>
          </p>
        </Reveal>
        <div className="spacer-10"></div>

      </div>
      <div className="col-md-6 xs-hide">
        <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
          {/* <img src={Logo}  alt="" height="200vh"  /> */}
          <img src={Logo}  className="lazy img-fluid" alt=""/>
        </Reveal>
      </div>

      {/* <section className='container no-top no-bottom'>
        <div className='row'>
          <div className="spacer-double"></div>
          <div className='col-lg-12 mb-2'>
            <h2>New Items</h2>
          </div>
        </div>

      </section> */}
    </div>
  </div>
);
export default homePageIntro;