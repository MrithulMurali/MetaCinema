import { useState } from "react";
import ThreeJs from "./ThreeJs/ThreeJs";
function App() {
  const [threeJsLoaded, setThreeJSLoaded] = useState(true);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ThreeJs />
    </div>
  );
}

export default App;
