import React, { useState } from 'react';
import './BMR.css';

function Bmr() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [bmrResult, setBmrResult] = useState(null);

  const calculateBMR = () => {
    // Calculate BMR logic based on gender, weight, height, age, and activity level
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    // Adjust BMR based on activity level
    switch (activityLevel) {
      case 'sedentary':
        bmr *= 1.2;
        break;
      case 'moderate':
        bmr *= 1.55;
        break;
      case 'active':
        bmr *= 1.9;
        break;
      default:
        break;
    }
    // Update the BMR result in state
    setBmrResult(bmr.toFixed(2));
  };

  return (
    <div className="bmr-container">
      <h2 className='cal'>BMR Calculator</h2>
      <br/>
      <div>
        <label>Weight (kg):</label>
        <input className='input' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <br/>
      <div>
        <label>Height (cm):</label>
        <input className='input' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <br/>
      <div>
        <label>Age:</label>
        <input className='input' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <br/>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <br/>
      <div>
        <label>Activity Level:</label>
        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="sedentary">Sedentary</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
        </select>
      </div>
      <br/>
      <button onClick={calculateBMR}>Calculate BMR</button>
      {bmrResult && <div className="bmr-result">Your BMR: {bmrResult} calories/day</div>}
    </div>
  );
}

export default Bmr;
