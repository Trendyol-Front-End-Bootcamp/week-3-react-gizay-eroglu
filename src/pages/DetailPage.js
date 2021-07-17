import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import CardDetail from "../components/CardDetail";

function DetailPage({ match }) {
  const {
    params: { id },
  } = match;

  const history = useHistory();
  const [character, setCharacter] = useState(null);

  const getCharacter = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    const characterData = response.data;
    characterData.lastFiveEpisodes = [];

    let count = 0;

    while (count < 5) {
      const episodeUrl = characterData.episode[count];

      if (!episodeUrl) {
        break;
      }

      const episodeResponse = await axios.get(episodeUrl);
      characterData.lastFiveEpisodes.push(episodeResponse.data);

      count++;
    }

    setCharacter(characterData);
  };

  useEffect(() => {
    getCharacter();
  }, [id]);

  const handleGoHome = () => {
    history.push("/");
  };

  if (!character) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Header />
      <button onClick={handleGoHome}>Go Home</button>
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
