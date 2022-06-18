import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
//import { header } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useOnclickOutside from "react-cool-onclickoutside";
import {
  Button,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

import Logo from '../../assets/img/Logo-01-notext.png';
import nami from '../../assets/img/wallet/nami.svg';
import flint from '../../assets/img/wallet/flint2.png';
import eternl from '../../assets/img/wallet/eternl.png';
import typhon from '../../assets/img/wallet/typhon.png';
import yoroi from '../../assets/img/wallet/yoroi.png';
import gero from '../../assets/img/wallet/gerowallet.ico';


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);


const Header = function ({ className }) {

  const [openWalletModal, setOpenWalletModal] = React.useState(false);

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);


  const connectWallet = (wallet) => {

  }


  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
  };
  const handleBtnClick3 = () => {
    setOpenMenu3(!openMenu3);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const closeMenu1 = () => {
    setOpenMenu1(false);
  };
  const closeMenu2 = () => {
    setOpenMenu2(false);
  };
  const closeMenu3 = () => {
    setOpenMenu3(false);
  };

  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  const ref3 = useOnclickOutside(() => {
    closeMenu3();
  });

  const [showmenu, btn_icon] = useState(false);
  const [showpop, btn_icon_pop] = useState(false);
  const [shownot, btn_icon_not] = useState(false);
  const closePop = () => {
    btn_icon_pop(false);
  };
  const closeNot = () => {
    btn_icon_not(false);
  };

  const toggle = modalType => () => {
    console.log("Connect Wallet")
    return this.setState({
      modal: !this.state.modal,
    });
  };

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");

      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      } if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header className={`navbar white ${className}`} id="myHeader">
      <div className='container'>
        <div className='row w-100-nav' style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div className='logo px-0'>
            <div className='navbar-title navbar-item'>
              <Link to="/" target="_self" rel="noopener noreferrer">
                <img
                  src={Logo}
                  style={{ width: "3vh", height: "3vh", cursor: 'pointer' }}
                />
                <h5 className="text" style={{ "color": "white" }}> LinksList.io</h5>
              </Link>

            </div>


          </div>

          <BreakpointProvider>
            <Breakpoint xl>
              <div className='menu'>
                <div className='navbar-item'>
                  <div ref={ref}>
                    {/* <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                      Links
                      <span className='lines'></span>
                      {openMenu && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu}>
                            <a
                              class='social-icon-link github'
                              href="https://app.gitbook.com/s/dOhZJgfYGfNOYxiiJ2az/~/changes/KK8bdNQHJ9EvhOrO6hqh/"
                              target='_blank'
                              rel="noopener"
                              aria-label='Github'
                            >
                              Documentation
                            </a>
                            <Link to="/paddy" target="_self" rel="noopener noreferrer">
                              Example Bio
                            </Link>

                          </div>
                        </div>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>

          <div className='mainside'>
            <div className="logout">
              <button onClick={() => setOpenWalletModal(true)} id="walletButton" className="btn-main">
                Connect Wallet
              </button>
            </div>
          </div>

        </div>

      </div>


      <Modal
        isOpen={openWalletModal}
        toggle={false}
      >
        <ModalHeader toggle={toggle}>Select Wallet</ModalHeader>
        <ModalBody style={{
          alignContent: 'center', justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>

          <div className='row' style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>

            <div className="col-lg-8" >
              <span className="box-url" onClick={() => window.open("https://poolpeek.com")}>
                <div>
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={eternl} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                    <div className="col-lg-8 ">
                      <h6 aria-hidden="true" >Eternl</h6>
                    </div>
                    <div className="col-lg-2">
                      <img src={eternl} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <div className="col-lg-8" >
              <span className="box-url" onClick={() => window.open("https://poolpeek.com")}>
                <div>
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={nami} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                    <div className="col-lg-8 ">
                      <h6 aria-hidden="true" >Nami</h6>
                    </div>
                    <div className="col-lg-2">
                      <img src={nami} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <div className="col-lg-8" >
              <span className="box-url" onClick={() => window.open("https://poolpeek.com")}>
                <div>
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={flint} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                    <div className="col-lg-8 ">
                      <h6 aria-hidden="true" >Flint</h6>
                    </div>
                    <div className="col-lg-2">
                      <img src={flint} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <div className="col-lg-8" >
              <span className="box-url" onClick={() => window.open("https://poolpeek.com")}>
                <div>
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={gero} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                    <div className="col-lg-8 ">
                      <h6 aria-hidden="true" >Gero</h6>
                    </div>
                    <div className="col-lg-2">
                      <img src={gero} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <div className="col-lg-8" >
              <span className="box-url" onClick={() => window.open("https://poolpeek.com")}>
                <div>
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={typhon} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                    <div className="col-lg-8 ">
                      <h6 aria-hidden="true" >Typhon</h6>
                    </div>
                    <div className="col-lg-2">
                      <img src={typhon} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                  </div>
                </div>
              </span>
            </div>

          </div>
        </ModalBody>
        <ModalFooter>
          {' '}
          <button onClick={() => setOpenWalletModal(true)} id="walletButton" className="btn-main">
            Close
          </button>
        </ModalFooter>
      </Modal>
    </header>
  );
}
export default Header;