import React, { useEffect, useState } from "react";
import Filters from "../components/FilterPanel";
import { useDatabase } from "../hooks/UseDatabase";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
  const { getPost, data } = useDatabase("/recipes");
  const [search, setSearch] = useState("");
  const [prepTimeFilters, setPrepTimeFilters] = useState([]);
  const [cookTimeFilters, setCookTimeFilters] = useState([]);
  const [isPrepOpen, setIsPrepOpen] = useState(false);
  const [isCookOpen, setIsCookOpen] = useState(false);

  useEffect(() => { getPost(); }, []);

  const filteredData = data?.filter(recipe => {
    let ok = true;
    if (search.trim()) ok = ok && recipe.title.toLowerCase().includes(search.toLowerCase());
    if (prepTimeFilters.length) ok = ok && prepTimeFilters.includes(`${recipe.prepMinutes}-min-prep`);
    if (cookTimeFilters.length) ok = ok && cookTimeFilters.includes(`${recipe.cookMinutes}-min-cook`);
    return ok;
  }) || [];

  return (
    <>
      <section className="container simple__container">
        <h1 className="simple__title">Explore our simple, healthy recipes</h1>
        <p className="simple__desc">
          Discover quick, whole-food dishes that fit real-life schedules.
        </p>
      </section>

      <div className="container recipes__filter">
        <Filters
          title="Max Prep Time"
          options={[
            { value: "0-min-prep", label: "0 minutes" },
            { value: "5-min-prep", label: "5 minutes" },
            { value: "10-min-prep", label: "10 minutes" },
          ]}
          activeFilters={prepTimeFilters}
          setActiveFilters={setPrepTimeFilters}
          isOpen={isPrepOpen}
          setIsOpen={setIsPrepOpen}
        />
        <Filters
          title="Max Cook Time"
          options={[
            { value: "0-min-cook", label: "0 minutes" },
            { value: "5-min-cook", label: "5 minutes" },
            { value: "10-min-cook", label: "10 minutes" },
            { value: "15-min-cook", label: "15 minutes" },
          ]}
          activeFilters={cookTimeFilters}
          setActiveFilters={setCookTimeFilters}
          isOpen={isCookOpen}
          setIsOpen={setIsCookOpen}
        />
        <input
          type="search"
          className="search"
          placeholder="Search by name or ingredient…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <ul className="recipes__list container">
        {!data && <li>Loading...</li>}
        {filteredData.length === 0 && data && <li>No recipes found</li>}
        {filteredData.map(r => <RecipeCard key={r.id} recipe={r} />)}
      </ul>
    </>
  );
}

export default Recipes;
