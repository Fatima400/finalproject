import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import './Recipes.css';
import HamburgerMeun from "./HamburgerMenu";
import Footer from './Footer';

const RecipeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const userBMR = 1800; // Example BMR value
  const [bmiValue, setBMIValue] = useState(null);

  useEffect(() => {
    const savedBMR = localStorage.getItem('bmrValue');
    if (savedBMR) {
      setBMIValue(savedBMR);
    }
  }, []);
  
  useEffect(() => {
    fetch('./recipe.json')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  const selectRecipe = (recipe) => {
    setSelectedRecipes([...selectedRecipes, recipe]);
    setTotalCalories(totalCalories + recipe.calories);
  };

  const removeRecipe = (recipe) => {
    const updatedRecipes = selectedRecipes.filter((selectedRecipe) => selectedRecipe.name !== recipe.name);
    setSelectedRecipes(updatedRecipes);
    
    if (recipe.calories > totalCalories) {
      setTotalCalories(0);
    } else {
      setTotalCalories(totalCalories - recipe.calories);
    }
  };

  const calorieDifference = bmiValue - totalCalories;
  const isCalorieExceeded = calorieDifference < 0;
  let message = "";
  let messageColor = "";
  if (isCalorieExceeded) {
    message = "Calorie intake exceeds BMR. Consider adjusting your diet.";
    messageColor = "red";
  } else {
    message = "Calorie intake is within BMR.";
    messageColor = "green";
  }

  return (
    <>
      <HamburgerMeun />
      <p className="call">Total Calories: {totalCalories}</p>
      <p className="call">Calorie Difference: {calorieDifference}</p>
      <p  className='textm' style={{ color: messageColor }}>{message}</p>
      <div className="con">
        {recipes.map((recipe, index) => (
          <div key={index} className="book">
            <p className="ing">{recipe.ingredients}</p>
            <button className="cll" onClick={() => selectRecipe(recipe)}>Add to Basket</button>
            <button className="cll" onClick={() => removeRecipe(recipe)}>Remove from Basket</button>
            <div className="cover">
              <img src={recipe.photo} alt={recipe.name} className="imgg" />
              <p>{recipe.name}</p>
              <p>Calories: {recipe.calories}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default RecipeComponent;
