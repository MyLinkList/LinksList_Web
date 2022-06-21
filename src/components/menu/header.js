import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
//import { header } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
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
import cardwallet from '../../assets/img/wallet/cardwallet.png';

setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);


const Header = function ({ className }) {

  const navigate = useNavigate();

  const [openWalletModal, setOpenWalletModal] = React.useState(false);
  const [connectedWallet, setConnectedWallet] = React.useState(null);
  const [connectedWalletName, setConnectedWalletName] = React.useState(null);

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);


  const connectWallet = async (walletName) => {
    try {
      var walletEnabled = null;
      var cardano = window.cardano;

      if (walletName === "Nami") {
        walletEnabled = await cardano.nami.enable();
      } else if (walletName === "Flint") {
        walletEnabled = await cardano.flint.enable();
      }
      else if (walletName === "Eternl") {
        walletEnabled = await cardano.eternl.enable();
      }
      else if (walletName === "Typhon") {
        walletEnabled = await cardano.typhon.enable();
      }
      else if (walletName === "Gero") {
        walletEnabled = await cardano.gerowallet.enable();
      } else if (walletName === "CardWallet") {
        walletEnabled = await cardano.cardwallet.enable();
      }

      if (walletEnabled) {
        console.log("close modal");
        setConnectedWallet(walletEnabled);
        setOpenWalletModal(false);
        setConnectedWalletName(walletName);

        navigateUser();

      }

    } catch (error) {
      console.log(error)
    }
  }
    //CHECK WALLET FOR LL ACCOUNT NFT
  const navigateUser = () => {
    //IF NO ACCOUNT 
    navigate("/createaccount");

    //IF ACCOUNT NAVIGATE TO BIO EDIT
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const ref = useOnclickOutside(() => {
    closeMenu();
  });


  const toggle = () => {
    console.log("Connect Wallet")
    setOpenWalletModal(!openWalletModal);
    return openWalletModal;
  };

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {

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
              {connectedWallet == null ?
                <button onClick={() => setOpenWalletModal(true)} id="walletButton" className="btn-main">
                  Connect Wallet
                </button>
                :
                <button onClick={() => setOpenWalletModal(true)} id="walletButton" className="btn-main">
                  Connected: {connectedWalletName}
                </button>
              }


            </div>
          </div>

        </div>

      </div>


      <Modal
        isOpen={openWalletModal}
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
              <span className="box-url" onClick={() => connectWallet("Eternl")}>
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
              <span className="box-url" onClick={() => connectWallet("Nami")}>
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
              <span className="box-url" onClick={() => connectWallet("Flint")}>
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
              <span className="box-url" onClick={() => connectWallet("Gero")}>
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
              <span className="box-url" onClick={() => connectWallet("Typhon")}>
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

            <div className="col-lg-8" >
              <span className="box-url" onClick={() => connectWallet("CardWallet")}>
                <div>
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={cardwallet} width={30} height={30} style={{
                        justifyContent: 'left',
                        alignItems: 'left'
                      }} />
                    </div>
                    <div className="col-lg-8 ">
                      <h6 aria-hidden="true" >Card Wallet</h6>
                    </div>
                    <div className="col-lg-2">
                      <img src={cardwallet} width={30} height={30} style={{
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
          <button onClick={() => setOpenWalletModal(false)} id="walletButton" className="btn-main">
            Close
          </button>
        </ModalFooter>
      </Modal>
    </header>
  );
}
export default Header;