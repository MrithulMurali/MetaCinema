import { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Store from "./components/Store/Store";
import ThreeJs from "./components/ThreeJs/ThreeJs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [threeJsLoaded, setThreeJSLoaded] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/batman"
          element={
            <div style={{ width: "100%", height: "100vh" }}>
              <ThreeJs />
            </div>
          }
        ></Route>
        //Landing pade and store components
        <Route index element={<LandingPage />} />
        <Route path="store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
