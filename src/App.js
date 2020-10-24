import React, { useState, useEffect } from "react";
import "./App.css";
import Searcharea from "./Searcharea";
import Contentarea from "./Contentarea";

function App() {
  let [query, setQuery] = useState("Pizza");
  let [Zoom, setZoom] = useState([]);

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const Api_ID = "b6fddb06";
    let Api_key = "702e0819dca2e705292e053f0835223d";
    let url = `https://api.edamam.com/search?q=${query}&app_id=${Api_ID}&app_key=${Api_key}&from=0&to=3&calories=591-722&health=alcohol-free`;
    let fetchingData = await fetch(url);
    const data = await fetchingData.json();
    setZoom(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="outerWrapper">
      <Searcharea
        handlePropsFn={(data) => {
          setQuery(data);
          alert(data);
        }}
      />

      {Zoom.map((oby) => {
        return (
          <Contentarea
            name={oby.recipe.label}
            calories={oby.recipe.calories}
            photo={oby.recipe.image}
            ingredients={oby.recipe.ingredients}
          />
        );
      })}
    </div>
  );
}

export default App;
