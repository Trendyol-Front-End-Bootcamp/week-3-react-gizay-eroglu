import { useEffect, useState } from "react";

import Card from "../components/Card";
import Filter from "../components/Filter";
import Header from "../components/Header";

import axios from "axios";

function MainPage() {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setCharacters(response.data.results);
  };

  const filterCharacters = async (name, gender, status) => {
    const nameParam = name ? `name=${name}&` : "";
    const genderParam = gender ? `gender=${gender}&` : "";
    const statusParam = status ? `status=${status}` : "";

    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?${nameParam}${genderParam}${statusParam}`
      );

      setCharacters(response.data.results);
    } catch (error) {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <Header />
      <Filter filter={filterCharacters} />
      <div className='page-grid'>
        {characters.length > 0 ? (
          characters.map((character) => {
            return (
              <Card
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                gender={character.gender}
                species={character.species}
              />
            );
          })
        ) : (
          <div className='not-found-text'>Not Found !</div>
        )}
      </div>
    </>
  );
}

export default MainPage;
