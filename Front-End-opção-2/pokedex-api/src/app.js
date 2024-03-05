import React, { useState } from 'react';
import "./App.css";

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPokemonData = async () => {
    if (pokemonName.trim() === '') {
      setError('Por favor, insira o nome do Pokémon');
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (response.status === 404) {
        setError('Pokémon não encontrado na Pokédex');
        setPokemonData(null);
        return;
      }
      if (!response.ok) {
        throw new Error('Ocorreu um erro ao buscar o Pokémon');
      }
      const data = await response.json();
      setPokemonData(data);
      setError(null);
    } catch (error) {
      setError('Ocorreu um erro ao buscar o Pokémon');
      setPokemonData(null);
    } 

  };

  return (

    <fieldset>
      <div name="container">
      <input 
        type="text" 
        value={pokemonName} 
        onChange={(e) => setPokemonName(e.target.value)} 
        placeholder="Digite o nome do Pokémon" 
      />
      <button onClick={fetchPokemonData}>Buscar</button>
      
      
      {pokemonData && (
        <div>
          <p style={{ textAlign: 'center' }}>Pokémon: {pokemonData.name} - Habilidades: {pokemonData.abilities.length}</p>
          <ul>
            {pokemonData.abilities.map(poke => {
                return (
                    <li>{poke.ability.name}</li>
                )
            })}
          </ul>
        </div>
      )}
      
      </div>
    </fieldset>
  );
};

export default PokemonSearch;