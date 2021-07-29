import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import CardDetail from "../components/CardDetail";

import { getCharacterById } from "../services/RickAndMortyApi";

function DetailPage({ match }) {
  const {
    params: { id },
  } = match;

  const history = useHistory();
  const [character, setCharacter] = useState(null);

  const getCharacter = async () => {
    const character = await getCharacterById(id);
    setCharacter(character);
  };

  useEffect(() => {
    getCharacter();
  }, [id]);

  const handleGoHome = () => {
    history.push("/");
  };

  if (!character) {
    return <div className='card-loading'>Loading</div>;
  }

  return (
    <>
      <Header />
      <button className='go-homepage-button' onClick={handleGoHome}>
        Go Home
      </button>
      <CardDetail
        name={character.name}
        gender={character.gender}
        locationName={character.location.name}
        image={character.image}
        species={character.species}
        status={character.status}
        lastFiveEpisodes={character.lastFiveEpisodes}
      />
    </>
  );
}

export default DetailPage;
