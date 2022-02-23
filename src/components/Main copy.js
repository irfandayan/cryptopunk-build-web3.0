import React from "react";

import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src="https://lh3.googleusercontent.com/m-Ws730SPYfr1hhPi44UWd923AthhSYnetE8x32yJf1b4GPOTOwdsgK9yXN7naVm7Y884R7e7yTxzMjDGfwpZaRQmfgA4Zo5CXy_jg"
              alt=""
            />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="punkDetails-Inner">
            <div className="title">Bandana Punk</div>
            <div className="itemNumber">.#3</div>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAddress">
                  0xFe0b1F9A5ef53b7c7F1eCF3Ce3999C5450078Dd0
                </div>
                <div className="ownerHandle">@irfandayan</div>
                <div className="ownerLink">
                  <img src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img src={moreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
