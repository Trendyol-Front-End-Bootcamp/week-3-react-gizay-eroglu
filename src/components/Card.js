function Card({ name, status, species, gender, image }) {

  return (
    <div className='card'>
      <img className='card-img-top' src={image} alt='Character' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          <small className='text-muted'>{status}</small>
        </p>
        <p className='card-text'>
          <small className='text-muted'>{species}</small>
        </p>
        <p className='card-text'>
          <small className='text-muted'>{gender}</small>
        </p>
      </div>
    </div>
  );
}

export default Card;
