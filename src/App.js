import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x76e4a01A3cBb50f3706Ca06eC50Ea1fD41e97eEc&order_direction=asc"
      );

      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />

      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
