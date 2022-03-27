import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Store from "./components/Store/Store";
import ThreeJs from "./components/ThreeJs/ThreeJs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import loadContract from "./utils/loadContract";
function App() {
  const [theatreTheme, setTheatreTheme] = useState(null);
  const [account, setAccount] = useState(null);

  //Web3 stuff
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      let provider = await detectEthereumProvider();
      const contract = loadContract("Store", provider);
      if (provider) {
        setWeb3Api({
          provider,
          web3: new Web3(provider),
          contract,
        });
      } else {
        alert("No wallet found. Please install metamask");
      }
    };
    loadProvider();
    console.log(web3Api);
  }, []);

  useEffect(() => {
    const getAccounts = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccounts();
  }, [web3Api.web3]);
  useEffect(() => {
    console.log("running");
    web3Api.web3 &&
      web3Api.provider.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
        window.location.reload();
      });
  }, [web3Api.provider]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/meta-cinema"
          element={
            <div style={{ width: "100%", height: "100vh" }}>
              <ThreeJs theme={theatreTheme} />
            </div>
          }
        ></Route>
        //Landing pade and store components
        <Route
          index
          element={<LandingPage account={account} web3Api={web3Api} />}
        />
        <Route
          path="store"
          element={
            <Store
              account={account}
              web3Api={web3Api}
              theatreTheme={setTheatreTheme}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
