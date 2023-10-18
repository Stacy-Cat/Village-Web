import { useState } from "react";

import "./App.css";
import RoutePaths from "./Components/RoutePaths";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RoutePaths />
      </div>
    </>
  );
}

export default App;
