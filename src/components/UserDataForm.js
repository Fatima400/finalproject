import React, { useState } from 'react';

const UserDataForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, weight, height, age };

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Clear the form inputs
    setName('');
    setEmail('');
    setWeight('');
    setHeight('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Weight:
        <input type="number" value={weight} onChange={handleWeightChange} />
      </label>
      <br />
      <label>
        Height:
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserDataForm;
