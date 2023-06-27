import React, { useState } from 'react';
import "./BMI.css"
const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [bmi, setBMI] = useState(null);
  const [bmr, setBMR] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
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
    }
  };

  const calculateBMR = () => {
    if (weight && height && age) {
      let bmrValue = 0;

      if (gender === 'male') {
        bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === 'female') {
        bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
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
    }
  };

  const handleCalculateClick = () => {
    calculateBMI();
    calculateBMR();
  };

  return (
    <div>
      <h2>BMI & BMR Calculator</h2>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="activityLevel">Activity Level:</label>
        <select
          id="activityLevel"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="sedentary">Sedentary</option>
          <option value="lightlyActive">Lightly Active</option>
          <option value="moderatelyActive">Moderately Active</option>
          <option value="veryActive">Very Active</option>
          <option value="extraActive">Extra Active</option>
        </select>
      </div>
      <button onClick={handleCalculateClick}>Calculate</button>

      {bmi && (
        <div >
          <p  className='resu'>
            {message}
            {bmi}
          </p>
        </div>
      )}

      {bmr && <p className='resu'>BMR: {bmr}</p>}
    </div>
  );
};

export default Calculator;
