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
        <span>Status: {status}</span>
        <span>Species: {species}</span>
        <span>Gender: {gender}</span>
        <span>Location: {locationName}</span>
        <h5>Last 5 Episodes:</h5>
        <div className='episode-heading'>
          <div>
            <b>Name of the Episode</b>
          </div>
          <div>
            <b>Air Date of the Episode</b>
          </div>
          <div>
            <b>Episode</b>
          </div>
        </div>
        <div className='episodes'>
          {lastFiveEpisodes.map((episode, index) => {
            return (
              <div className='episode' key={index}>
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
