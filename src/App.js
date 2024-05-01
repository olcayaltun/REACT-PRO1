import React from "react";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";

const App = () => {
  const handleClick = () => {
    window.location.reload(); // Sayfanın yenilenmesi
  };

  return (
    <div className="App">
      <h2>Pokemon Go Card Game</h2>
      <Pokegame />
      <div className="btn">
        <button onClick={handleClick}>
          <h3>PLAY</h3>
        </button>
        <img>po</img>
      </div>
    </div>
  );
};

export default App;
