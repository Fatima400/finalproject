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

  return (
    <>
      <HamburgerMeun />
      <p className="butt">Total Calories: {totalCalories}</p>
      <p className="butt">Calorie Difference: {userBMR - totalCalories}</p>
      <div className="con">
        {recipes.map((recipe, index) => (
          <div key={index} className="book">
            <p className="ing">{recipe.ingredients}</p>
            <button onClick={() => selectRecipe(recipe)}>Add to Basket</button>
              <button onClick={() => removeRecipe(recipe)}>Remove from Basket</button>
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
