import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";
import RecipeCard from "../components/RecipeCard";

function Recipe() {
  const { id } = useParams();
  const { data: recipe, getPost } = useDatabase("/recipes/" + id);
  const { data: moreRecipes, getPost: getMore } = useDatabase("/recipes");

  useEffect(() => { getPost(); getMore(); }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container">
      <Link to="/recipes">Recipes</Link>
      <h2>{recipe.title}</h2>
      <img src={recipe.image?.large} alt={recipe.title} />
      <p>{recipe.overview}</p>

      <h3>Ingredients:</h3>
      <ul>{recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>

      <h3>Instructions:</h3>
      <ul>{recipe.instructions.map((i, idx) => <li key={idx}>{i}</li>)}</ul>

      <h3>More Recipes:</h3>
      <ul>
        {moreRecipes?.filter(r => r.id !== recipe.id).slice(0,3).map(r => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
