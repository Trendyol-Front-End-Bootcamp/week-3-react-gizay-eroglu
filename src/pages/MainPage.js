import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Card from "../components/Card";
import Filter from "../components/Filter";
import Header from "../components/Header";

import { getCharacters } from "../services/RickAndMortyApi";

function MainPage() {
  const history = useHistory();
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCharacters = async () => {
    const characters = await getCharacters();
    setCharacters(characters);
    setIsLoading(false);
  };

  const filterCharacters = async (name, gender, status) => {
    const filterParams = {};
    
    if(name) filterParams.name = name;
    if(gender) filterParams.gender = gender;
    if(status) filterParams.status = status;

    const characters = await getCharacters(filterParams);

    setCharacters(characters);
    setIsLoading(false);
  };

  const onCardClick = (id) => {
    history.push(`character/${id}`);
  }

  useEffect(() => {
    getAllCharacters();
  }, []);
  
  const renderCards = () => {
    if(characters.length === 0) { 
      return <div className='not-found-text'>Not Found !</div>; 
    }
    
    const characterCards = characters.map((character) => {
      return (
        <Card
          key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          gender={character.gender}
          species={character.species}
          onCardClick={onCardClick}
        />
      );
    })

    return characterCards;
  }

  return (
    <>
      <Header />
      <Filter filter={filterCharacters} />
      <div className='page-grid'>
        {isLoading ? <div className='card-loading'>Loading</div> : renderCards()}
      </div>
    </>
  );
}

export default MainPage;
