import React, { useState } from 'react';
import BmiLogo from '../image/BmiLogo.png'
import './UserDataForm.css';


const UserDataForm = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [bmr, setBMR] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
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

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };


  const handleBMIChange = (event) => {
    event.preventDefault();
    setBMI(event.target.value);

    setMessage(event.target.value);

    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));


      if (bmiValue < 16) {
        setMessage('Severe Thinness. Your BMI is ');
      } else if (bmiValue >= 16 && bmiValue < 17) {
        setMessage('Moderate Thinness. Your BMI is ');
      } else if (bmiValue >= 17 && bmiValue < 18.5) {
        setMessage('Mild Thinness. Your BMI is ');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('Healthy weight. Your BMI is ');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('Overweight. Your BMI is ');
      } else if (bmiValue >= 30 && bmiValue < 35) {
        setMessage('Obese Class I. Your BMI is ');
      } else if (bmiValue >= 35 && bmiValue < 40) {
        setMessage('Obese Class II. Your BMI is ');
      } else if (bmiValue >= 40) {
        setMessage('Obese Class III. Your BMI is ');
      }
      localStorage.setItem('bmiValue', bmiValue.toFixed(2));
    }
    if (weight && height && age) {
      const parsedWeight = parseInt(weight);
      const parsedHeight = parseInt(height);
      const parsedAge = parseInt(age);

      if (parsedWeight < 40 || parsedWeight > 300) {
        console.log('Weight must be between 40 and 300');
        return;
      }

      if (parsedHeight < 130 || parsedHeight > 230) {
        console.log('Height must be between 130 and 230');
        return;
      }

      if (parsedAge < 18 || parsedAge > 140) {
        console.log('Age must be between 18 and 140');
        return;
      }

      let bmrValue = 0;

      if (gender === 'male') {
        bmrValue = 10 * parsedWeight + 6.25 * parsedHeight - 5 * parsedAge + 5;
      } else if (gender === 'female') {
        bmrValue = 10 * parsedWeight + 6.25 * parsedHeight - 5 * parsedAge - 161;
      }

      switch (activityLevel) {
        case 'sedentary':
          bmrValue *= 1.2;
          break;
        case 'lightlyActive':
          bmrValue *= 1.375;
          break;
        case 'moderatelyActive':
          bmrValue *= 1.55;
          break;
        case 'veryActive':
          bmrValue *= 1.725;
          break;
        case 'extraActive':
          bmrValue *= 1.9;
          break;
        default:
          break;
      }

      setBMR(bmrValue.toFixed(2));
      localStorage.setItem('bmrValue', bmrValue.toFixed(2));
    }

    setFormSubmitted(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, weight, height, bmi, message, age, gender, activityLevel, bmr };

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Clear the form inputs
    setName('');
    setWeight('');
    setHeight('');
    setAge('');
    setGender('');
    setActivityLevel('');
    setBMI('');
    setBMR('');
    setMessage('');
  };

  return (
    <div>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>  Name   :    <input className='inputfield' type="text" value={name} onChange={handleNameChange} />
          </label>

          <br />

          <label>  Weight:  <input className='inputfield' type="text" value={weight} onChange={handleWeightChange} />
          </label>
          <br />
          <label>  Height:  <input className='inputfield' type="text" value={height} onChange={handleHeightChange} />
          </label>

          <div>
            <label htmlFor="age">Age:</label>
            <input
              className='inputfield'
              type="number"
              id="age"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              className='inputfield'
              id="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="activityLevel">Activity Level:</label>
            <select
              className='inputfield'
              id="activityLevel"
              value={activityLevel}
              onChange={handleActivityLevelChange}
            >
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
              <option value="extraActive">Extra Active</option>
            </select>
          </div>

          <br />
          <br />
          <br />
          <button className='buttt' type="submit" onClick={handleBMIChange}>Save</button>
        </form>
      ) : (
        <div className='box'>
       <div className='infoo'>
            <p className='inf'>Name : {name}</p>
            <p className='inf'>Weight : {weight}</p>
            <p className='inf'>Height : {height}</p>
            <p className='inf'>Age : {age}</p>
            <p className='inf'>Gender : {gender}</p>
            <p className='inf' ><br /> {message} {bmi} </p>
            <p className='inf' > calories: {bmr}</p>
       </div>
          <div>
            <img src={BmiLogo} alt="bmi" className="BmiLogo"></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDataForm;
