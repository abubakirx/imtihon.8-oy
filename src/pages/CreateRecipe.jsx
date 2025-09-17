import React, { useEffect } from "react";
import { useDatabase } from "../hooks/UseDatabase";

function CreateRecipe() {
  const { postData } = useDatabase("/recipes");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const recipe = {
      title: form.get("title"),
      image: { small: form.get("image"), large: form.get("image") },
      overview: form.get("overview"),
      servings: Number(form.get("servings")),
      prepMinutes: Number(form.get("prepMinutes")),
      cookMinutes: Number(form.get("cookMinutes")),
      ingredients: form.get("ingredients").split(",").map(i => i.trim()),
      instructions: form.get("instructions").split(",").map(i => i.trim()),
    };

    if (Object.values(recipe).every(v => v && v.length !== 0)) {
      postData(recipe);
      alert("Recipe added successfully");
    } else {
      alert("Please fill in all fields");
    }
    e.target.reset();
  };

  return (
    <form className="input__wrapper container" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="title" />
      <input type="url" name="image" placeholder="image url" />
      <input type="text" name="overview" placeholder="overview" />
      <input type="number" name="servings" placeholder="servings" />
      <input type="number" name="prepMinutes" placeholder="prepMinutes" />
      <input type="number" name="cookMinutes" placeholder="cookMinutes" />
      <input type="text" name="ingredients" placeholder="ingredients" />
      <input type="text" name="instructions" placeholder="instruction" />
      <button type="submit" className="btn">Submit</button>
    </form>
  );
}

export default CreateRecipe;
