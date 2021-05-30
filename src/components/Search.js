import React, { useState } from "react";

function Search({setSearch}) {

  const [text,setText] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(text)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
