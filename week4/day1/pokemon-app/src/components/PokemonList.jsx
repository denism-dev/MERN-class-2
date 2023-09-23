import React, {useState, useEffect} from 'react'
import axios from 'axios'


    
const PokemonList = () => {
 const [pokemonList, setPokemonList] = useState([]);


    useEffect(() => {
        // Fetch the list of all Pokemon
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
              .then((response) => {
                setPokemonList(response.data.results);
              })
              .catch((error) => {
                console.log(error);
              });
          }, []);

    return (
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
      <button
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          fontSize: '16px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >Fetch Pokemon
      </button>
      <ul style={{ listStyleType: 'decimal', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};


    export default PokemonList;


