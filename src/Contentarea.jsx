import React from "react";
function Contentarea(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{`Calories: ${props.calories}`}</h4>
      <ol>
        {props.ingredients.map((ingr) => (
          <li>{ingr.text}</li>
        ))}
      </ol>
      <img src={props.photo} alt="food image" />
    </div>
  );
}

export default Contentarea;

//ingredients
