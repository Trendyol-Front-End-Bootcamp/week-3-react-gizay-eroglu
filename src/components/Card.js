import { useHistory } from "react-router-dom";

function Card({ id, name, status, species, gender, image }) {
  const history = useHistory();

  const handleOnClickCard = (event) => {
    history.push(`character/${id}`);
  };

  return (
    <div className='card' onClick={handleOnClickCard}>
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
