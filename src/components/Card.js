function Card({ name, status, species, gender, image }) {
  return (
    <div className='card'>
      <img src={image} alt='Character' />
      <div className='cardText'>
        <h5>{name}</h5>
        <small>{status}</small>
        <small>{species}</small>
        <small>{gender}</small>
      </div>
    </div>
  );
}

export default Card;
