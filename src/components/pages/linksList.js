import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';

import paddy from '../../assets/img/paddy.jpg';


//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO



const LinksList = () => (
  <div className="greyscheme">
    <StyledHeader theme={theme} />

    <section className='container no-bottom'>
      <div className='row'>
        <div className="profile_avatar" style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={paddy} />
          {/* <i className="fa fa-check"></i> */}
          <div className="profile_name">
            <h4>
              Paddy
              <span className="profile_username">@PoolShamrock</span>
              <span id="wallet" className="profile_wallet">addr1qxjmcw4ywvvhm4ssyp2swx8fx9srphkwu0w738lge5adne8ewlpdcvz0c4ch9ekruev4gm5rpsc88f4f8qk6zz5t9a4qk9pjgp</span>
              <button id="btn_copy" title="Copy Text">Copy</button>
            </h4>
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
      <div className='col-12'>
        <h1 className='text-center'>Links List</h1>
      </div>
      <div className='row'>

        {/* <Wallet /> */}
        <div className="col-lg-3 mb30">
          <span className="box-url">
            {/* <h4 aria-hidden="true" className="icon-twitter">Twitter</h4>  */}
            <h4 aria-hidden="true" >Twitter</h4> 
            <p>Shamrock Stake Pool</p>
          </span>
        </div>

        <div className="col-lg-3 mb30">
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
        </div>
      </div>

    </section>


  </div>

);
export default LinksList;