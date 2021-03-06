import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";

import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x76e4a01A3cBb50f3706Ca06eC50Ea1fD41e97eEc&order_direction=desc"
      );

      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets.reverse());
    };
    getMyNfts();
    // return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
