import { Component } from "react";
import React from "react";

const Poke_Api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class Pokecard extends Component {
  render() {
    let imgApi = `${Poke_Api}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">Pokemon</h1>
        <div className="Pokecard-image">
          <img src={imgApi} alt={this.props.name} />
        </div>
        <div className="Pokecard-data1">
          <div className="Pokecard-data"> Type:{this.props.type}</div>
          <div className="Pokecard-data"> Exp:{this.props.exp}</div>
        </div>
      </div>
    );
  }
}
export default Pokecard;
