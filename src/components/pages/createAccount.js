import React, { Component } from "react";
import { Link } from '@reach/router';
import Footer from '../components/footer';
import Logo from '../../assets/img/Logo-01-notext.png';
//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';

//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO
export default class CreateAccount extends Component {

  render() {
    return (
      <div className="greyscheme">
        <StyledHeader theme={theme} />

        <section className='container no-bottom'>
          <div className='mainbreadcumb'>
            <div className='container'>
              <div className='row m-10-hor'>
                <div className='col-12'>
                  <h1 className='text-center'>Create Account</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container no-top' >
          <div className='row' style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 30
        }}>
            <div className="col-md-6">
              <h3 className='text-center'>Creating a LinksList account involves the minting of a NFT into your wallet.</h3>
              <Link to="/create3" className="opt-create">
                <img src={Logo} alt="" />
                <h3>Mint NFT</h3>
              </Link>
            </div>
          </div>
        </section>



        <Footer />
      </div>
    );
  }
}