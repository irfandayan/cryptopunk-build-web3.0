import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  const [punkListDate, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x76e4a01A3cBb50f3706Ca06eC50Ea1fD41e97eEc&order_direction=asc"
      );
      console.log(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg"
      />
    </div>
  );
}

export default App;
