import React, { useEffect, useState } from "react";

import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkImageWrapper">
          <div className="selectedPunk">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>

        <div className="punkDeatilWrapper">
          <div className="punkDetailTitleNumberWrapper">
            <div className="punkDetailTitle">{activePunk.name}</div>
            <div className="punkDetailNumber">.#{activePunk.token_id}</div>
          </div>

          <div className="punkDetailOwner">
            <div className="OwnerAddressWrapper">
              <div className="ownerAddress">
                <div className="ownerImageContainer">
                  <img src={activePunk.owner.profile_img_url} alt="" />
                </div>
                <div className="ownerAddressContainer">
                  <span>{activePunk.owner.address}</span>
                  <div className="ownerHandle">@irfandayan</div>
                </div>
              </div>
            </div>
            <div className="ownerLinksWrapper">
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
  );
};

export default Main;
