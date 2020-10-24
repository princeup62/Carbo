import React, { useState } from "react";

function Searcharea(props) {
  let [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search your food"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.handlePropsFn(search);
          setSearch("");
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Searcharea;
