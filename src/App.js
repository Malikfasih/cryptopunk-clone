import "./App.css";

import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xC36d211Da64a4cDD727F722196545Ec8799BeD9e&order_direction=asc", { mode: "cors" }
      );
//       console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />

      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
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
