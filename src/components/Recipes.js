import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import './Recipes.css';
import HamburgerMeun from "./HamburgerMenu";
import Footer from './Footer';


const RecipeComponent = () => {
  const [recipes, setRecipes] = useState([{}])
  useEffect(() => {
    fetch('./recipe.json').then((res) => res.json()).then((data) => {
      console.log(data.recipes[0].name)
      setRecipes(data.recipes)
    })

  }, [])
  return (
    <>
    <HamburgerMeun/>
    <div className="con">
      {recipes.map((recipe, index) => (
        <div key={index} className="book">
          <p className="ing">{recipe.ingredients}</p>
          <div className="cover">
            <img src={recipe.photo} alt={recipe.name} className="imgg" />
            <p>{recipe.name}</p>
            <p>Calories: {recipe.calories}</p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>  
  );
};

export default RecipeComponent;