import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Store from "./components/Store/Store";
import ThreeJs from "./components/ThreeJs/ThreeJs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
function App() {
  const [theatreTheme, setTheatreTheme] = useState(null);

  //Web3 stuff
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      let provider = await detectEthereumProvider();
      console.log(provider);
      if (provider) {
        setWeb3Api({
          provider,
          web3: new Web3(provider),
          contract: null,
        });
      } else {
        alert("No wallet found. Please install metamask");
      }
    };
    loadProvider();
    console.log(web3Api);
  }, []);

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
        <Route index element={<LandingPage web3Api={web3Api} />} />
        <Route
          path="store"
          element={<Store web3Api={web3Api} theatreTheme={setTheatreTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
