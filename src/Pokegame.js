import Pokedex from "./Pokedex";
import React, { Component } from "react";
class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let handl1 = [];
    let handl2 = [...this.props.pokemon];
    while (handl1.length < handl2.length) {
      let randIdx = Math.floor(Math.random() * handl2.length);
      let randomPokemon = handl2.splice(randIdx, 1)[0];
      handl1.push(randomPokemon);
    }
    let exp1 = handl1.reduce((exp, pokemon) => +pokemon.base_experience, 0);
    let exp2 = handl2.reduce((exp, pokemon) => +pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokemon={handl1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={handl2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
export default Pokegame;
