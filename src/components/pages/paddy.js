import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';

import paddy from '../../assets/img/paddy.jpg';
import shamrock from '../../assets/img/shamrock.png';
import poolpeek from '../../assets/img/poolpeek.png';
import discord from '../../assets/img/discord.png';
import boc from '../../assets/img/boc.png';

//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO



const Paddy = () => (
  <div style={{
    background: 'green',
    alignItems: 'center'
  }}>
    <StyledHeader theme={theme} />

    <section className='container no-bottom'>
      <div className='row'>
        <div className="profile_avatar" style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={paddy} />
          <i className="fa fa-check"></i>
        </div>
      </div>
      <div className="profile_name" style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 20
      }}>
        <h4>
          Paddy
        </h4>
      </div>
      <div className="de-flex-col" style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 20
      }}>
        <h6>
          LinksList Founder - Cardano Stake Pool Operator - Hater of pineapple on pizza
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
            <span className="box-url" onClick={() => window.open("https://twitter.com/PoolShamrock")}>
              <span ><i className="fa fa-twitter fa-lg"></i> Twitter</span>
            </span>
          </div>

          {/* <div className="col-lg-2 mb30">
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
          </div> */}

          {/* <div className="col-lg-2 mb30">
          <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
            <span ><i className="fa fa-discord fa-lg"></i> Twitter</span>
          </span>
        </div> */}

          {/* <div className="col-lg-2 mb30">
            <span className="box-url" onClick={() => window.open("https://twitter.com/linkslistio")}>
              <span ><i className="fa fa-instagram fa-lg"></i> Insta</span>
            </span>
          </div> */}

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

    <section className='container no-top' >
      <div className='row' style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>

        <div className="col-lg-8 mb30" >
          <span className="box-url" onClick={() => window.open("https://shamrock-pool.com/")}>

            <div>
              <div className="row">
                <div className="col-lg-2">
                  <img src={shamrock} width={30} height={30} style={{
                    justifyContent: 'left',
                    alignItems: 'left'
                  }} />
                </div>
                <div className="col-lg-8 ">
                  <h6 aria-hidden="true" >Shamrock Pool</h6>
                </div>
                <div className="col-lg-2">
                  <img src={shamrock} width={30} height={30} style={{
                    justifyContent: 'left',
                    alignItems: 'left'
                  }} />
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="col-lg-8 mb30" >
          <span className="box-url" onClick={() => window.open("https://poolpeek.com")}>
            <div>
              <div className="row">
                <div className="col-lg-2">
                  <img src={poolpeek} width={30} height={30} style={{
                    justifyContent: 'left',
                    alignItems: 'left'
                  }} />
                </div>
                <div className="col-lg-8 ">
                  <h6 aria-hidden="true" >PoolPeek Website</h6>
                </div>
                <div className="col-lg-2">
                  <img src={poolpeek} width={30} height={30} style={{
                    justifyContent: 'left',
                    alignItems: 'left'
                  }} />
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="col-lg-8 mb30" >
          <span className="box-url" onClick={() => window.open("https://discord.gg/nzSR3rFkef")}>
            <div>
              <div className="row">
                <div className="col-lg-2">
                  <img src={discord} width={30} height={30} style={{
                    justifyContent: 'left',
                    alignItems: 'left'
                  }} />
                </div>
                <div className="col-lg-8 ">
                  <h6 aria-hidden="true" >PoolPeek Discord</h6>
                </div>
                <div className="col-lg-2">
                  <img src={discord} width={30} height={30} style={{
                    justifyContent: 'left',
                    alignItems: 'left'
                  }} />
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="col-lg-8 mb30" >
          <span className="box-url" onClick={() => window.open("https://buildingoncardano.com")}>
            <div>
              <div className="row">
                <div className="col-lg-2">
                  <img src={boc} width={30} height={30} style={{
                    justifyContent: 'left',
                    alignItems: 'left'
                  }} />
                </div>
                <div className="col-lg-8 ">
                  <h6 aria-hidden="true" >BuildingOnCardano Website</h6>
                </div>
                <div className="col-lg-2">
                  <img src={boc} width={30} height={30} style={{
                    justifyContent: 'left',
                    alignItems: 'left'
                  }} />
                </div>
              </div>
            </div>
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
export default Paddy;