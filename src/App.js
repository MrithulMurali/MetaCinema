import { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Store from "./components/Store/Store";
import ThreeJs from "./components/ThreeJs/ThreeJs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [threeJsLoaded, setThreeJSLoaded] = useState(false);
  const [theatreTheme, setTheatreTheme] = useState(null);
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
        <Route index element={<LandingPage />} />
        <Route
          path="store"
          element={<Store theatreTheme={setTheatreTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
