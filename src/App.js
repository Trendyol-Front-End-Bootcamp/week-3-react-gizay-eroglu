import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    setCharacters(response.data.results);
  }
  
  useEffect(() => {
    getCharacters();
  }, []);
  
  return (
    <>
      <Filter />
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            gender={character.gender}
            species={character.species}
          />
        );
      })}
    </>
  );
}

export default App;
