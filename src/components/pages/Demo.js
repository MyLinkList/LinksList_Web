import React from 'react';
import Wallet from '../components/wallet';

//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';

import ProfilePic from '../../assets/img/Logo-01-notext.png';


//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO



const Demo = () => (
  <div className="greyscheme">
    <StyledHeader theme={theme} />

    <section className='container no-bottom'>
      <div className='row'>
        <div className="profile_avatar" style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={ProfilePic} />
          <i className="fa fa-check"></i>
          <div className="profile_name">
            <h4>
              LinksList
            </h4>
          </div>
        </div>
      </div>
      <div className="de-flex-col" style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 20
      }}>
        <h6>
          This is where I describe myself in less than 20 words
        </h6>
      </div>

      <div className="de-flex-col">
        <div className='row' style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: 30
        }}>
          <div className="col-lg-2 mb30">
            <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
              <span ><i className="fa fa-twitter fa-lg"></i> Twitter</span>
            </span>
          </div>

          <div className="col-lg-2 mb30">
            <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
              <span ><i className="fa fa-facebook fa-lg"></i> Facebook</span>
            </span>
          </div>

          <div className="col-lg-2 mb30">
            <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
              <span ><i className="fa fa-linkedin fa-lg"></i> Linkedin</span>
            </span>
          </div>

          <div className="col-lg-2 mb30">
            <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
              <span ><i className="fa fa-pinterest fa-lg"></i> Pintrest</span>
            </span>
          </div>

          {/* <div className="col-lg-2 mb30">
            <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
              <span ><i className="fa fa-discord fa-lg"></i> Twitter</span>
            </span>
          </div> */}

          <div className="col-lg-2 mb30">
            <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
              <span ><i className="fa fa-instagram fa-lg"></i> Insta</span>
            </span>
          </div>

        </div>
      </div>
    </section>

    {/* <div className="profile_name">
      <h4>
        Wallet
        <span className="profile_username">@AdaHandle</span>
        <span id="wallet" className="profile_wallet">addr1qxjmcw4ywvvhm4ssyp2swx8fx9srphkwu0w738lge5adne8ewlpdcvz0c4ch9ekruev4gm5rpsc88f4f8qk6zz5t9a4qk9pjgp</span>
        <button id="btn_copy" title="Copy Text">Copy</button>
      </h4>
    </div> */}

    <section className='container' >
      <div className='row' style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>

        <div className="col-lg-8 mb30" >
          <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
            <span >Latest Youtube Video</span>
          </span>
        </div>

        <div className="col-lg-8 mb30" >
          <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
            <span > Swag Store</span>
          </span>
        </div>

        <div className="col-lg-8 mb30" >
          <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
            <span > Medium Posts</span>
          </span>
        </div>

        <div className="col-lg-8 mb30" >
          <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
            <span > Random Site</span>
          </span>
        </div>
      </div>
      {/* <div className="col-lg-3 mb30">
          <span className="box-url">
            <h4 aria-hidden="true" >Website</h4>
            <p>poolpeek.com</p>
          </span>
        </div>

        <div className="col-lg-3 mb30">
          <span className="box-url">
            <h4 aria-hidden="true" >Discord</h4>
            <p>PoolPeek Discord</p>
          </span>
        </div>

        <div className="col-lg-3 mb30">
          <span className="box-url">
            <h4 aria-hidden="true" >Website</h4>
            <p>buildingoncardano.com</p>
          </span>
        </div> */}
    </section>


  </div>

);
export default Demo;