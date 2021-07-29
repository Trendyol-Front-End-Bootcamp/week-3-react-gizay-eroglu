function Card({ id, name, status, species, gender, image, onCardClick }) {
  
  return (
    <div className='card' onClick={() => onCardClick(id)}>
      <img src={image} alt='Character' />
      <div className='card-text'>
        <h5>{name}</h5>
        <small>{status}</small>
        <small>{species}</small>
        <small>{gender}</small>
      </div>
    </div>
  );
}

export default Card;
