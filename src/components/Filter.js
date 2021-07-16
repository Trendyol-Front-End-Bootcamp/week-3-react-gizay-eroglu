import { useState } from 'react';

function Filter({ filter }) {
  const [gender, setGender] = useState('female');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('alive');

  const handleSubmit = (event) => {
    event.preventDefault();
    filter(name, gender, status);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={name} onChange={handleNameChange}/>
        <label htmlFor='gender'>Gender:</label>
        <select value={gender} name='gender' id='gender' onChange={handleGenderChange}>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
          <option value='genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
        </select>
        <label htmlFor='status'>Status:</label>
        <select value={status} name='status' id='status' onChange={handleStatusChange}>
          <option value='alive'>Alive</option>
          <option value='dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>
        <input type="submit" value="Filter" />
      </form>
    </>
  );
}

export default Filter;
