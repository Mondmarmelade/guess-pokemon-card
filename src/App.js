import { Routes, Route, Link } from "react-router-dom";

import GamePage from "./Pages/GamePage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
