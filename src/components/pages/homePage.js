import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//IMPORT DYNAMIC STYLED COMPONENT
import { StyledHeader } from '../Styles';

import paddy from '../../assets/img/paddy.jpg';


//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO



const HomePage = () => (
  <div className="greyscheme">
    <StyledHeader theme={theme} />

    <div className='col-12'>
        <h1 className='text-center'>Home Page</h1>
      </div>



  </div>

);
export default HomePage;