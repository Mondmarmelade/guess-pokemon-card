import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

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
