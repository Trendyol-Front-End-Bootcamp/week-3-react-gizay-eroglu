function CardDetail({
  name,
  status,
  species,
  gender,
  image,
  locationName,
  lastFiveEpisodes = [],
}) {
  return (
    <div className='card-detailed'>
      <img src={image} alt='Character' />
      <div className='card-text'>
        <h5>Name: {name}</h5>
        <small>Status: {status}</small>
        <small>Species: {species}</small>
        <small>Gender: {gender}</small>
        <div>Location: {locationName}</div>

        <div className='episodes'>
          Last 5 Episodes:
          {lastFiveEpisodes.map((episode) => {
            return (
              <div className='episode'>
                <div>{episode.name}</div>
                <div>{episode.air_date}</div>
                <div>{episode.episode}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
