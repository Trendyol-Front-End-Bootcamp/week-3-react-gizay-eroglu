import axios from 'axios';

export const getCharacters = async (params = {}) => {
  try {
    const response = await axios.get("https://rickandmortyapi.com/api/character", { params });
  
    return response.data.results || [];  
  } catch (ex) {
    return [];
  } 
}

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    
    if(response.data.error) {
      return null; // Character Not Found  
    }

    const character = response.data;
    character.lastFiveEpisodes = [];

    let count = 0;

    while (count < 5) {
      const episodeUrl = character.episode[count];

      if (!episodeUrl) {
        break;
      }

      const episodeResponse = await axios.get(episodeUrl);
      character.lastFiveEpisodes.push(episodeResponse.data);

      count++;
    }

    return character;
  } catch (ex) {
    return null;
  }
}