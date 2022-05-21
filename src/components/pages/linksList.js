import React from 'react';
import {
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { StyledHeader } from '../Styles';
import paddy from '../../assets/img/Logo-01-notext.png';
import { getWalletAddressFromBlockFrost } from '../utils/blockfrost';
import { LinksListObj } from '../objects/LinksListLinkObj';
import { LinksListAccountObj } from '../objects/LinksListAccountObj copy';


//SWITCH VARIABLE FOR PAGE STYLE
const theme = 'GREYLOGIN'; //LIGHT, GREY, RETRO

const LinksList = ({ }) => {
  const { identifier } = useParams();
  //get wallet address
  var walletAddress = getWalletAddress(identifier);
  var linkslistAccount = getLinksListInfo(walletAddress);

  return (
    <div className="greyscheme">
      <StyledHeader theme={theme} />
      {linkslistAccount != null && linkslistAccount.accountName != '' &&
        <div>
          <section className='container'>
            <div className='col-12'>
              <div className='row'>
                <div className="profile_avatar" style={{
                  alignContent: 'center', justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <img src={linkslistAccount.accoutImage} />
                </div>
              </div>

              <div className='row'>
                {/* <i className="fa fa-check"></i> */}
                <div className="profile_name" style={{
                  alignContent: 'center', justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <h4>
                    {linkslistAccount.accountName}
                  </h4>
                </div>
              </div>
            </div>
          </section>

          <section className='container'>
            <div className='row'>

              {linkslistAccount.links.map(function (item, key) {
                return (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <div className="col-lg-3 mb30" key={key}>
                      <span className="box-url">
                        {item.image != null && <img src={item.image} style={{ width: "3vh", height: "3vh", cursor: 'pointer' }} />}
                        <h4 aria-hidden="true" >{item.name}</h4>
                      </span>
                    </div>
                  </a>)
              })}
            </div>
          </section>
        </div>}


    </div>)
}





function getWalletAddress(identifier) {

  if (identifier.startsWith("$")) {//is ADAHandle
    //lookup to find wallet
    const policyID = 'f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a';
    var handleWithoutDollar = identifier.replace('$', '');
    const assetName = Buffer.from(handleWithoutDollar).toString('hex');

    return getWalletAddressFromBlockFrost(policyID, assetName);

  } else if (identifier.startsWith("addr")) {//is receiving address
    return identifier;
  } else {
    //is linkslist id
    // const policyID = '';
    // const assetName = Buffer.from(identifier).toString('hex');
    // return getWalletAddressFromBlockFrost(policyID, assetName);
  }

  return identifier;
}

function getLinksListInfo(walletaddress) {
  const linkOne = LinksListObj(paddy, "Twitter", "https://twitter.com/linkslistio");
  const links = [linkOne];
  const account = LinksListAccountObj(paddy, 'LinksList.io', links, walletaddress);

  return account;
}

export default LinksList;
