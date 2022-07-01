import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function HomePage() {
  return (
    <div className="HomePage">
      <img
        className="logo"
        src="https://fontmeme.com/permalink/220701/a0e7f0cddbf4e60cda85b36632fd4af2.png"
        alt="pokemon-schriftart"
        border="0"
      />
      <Link className="btn" to="/game">
        Start
      </Link>
    </div>
  );
}

export default HomePage;
