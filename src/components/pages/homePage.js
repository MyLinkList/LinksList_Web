import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';

//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO



const HomePage = () => (
  <div className="greyscheme">
    <StyledHeader theme={theme} />
    <br></br>
    <br></br>
    <br></br>
    <div className='col-12'>
      <h1 className='text-center'>Links List</h1>
    </div>

    <h2 className='text-center'>The Decentralized Link</h2>
    <h3 className='text-center'>List all your links under one link</h3>

  </div>

);
export default HomePage;