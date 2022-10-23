import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  function updateKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={updateKeywordChange} />
      </form>
    </div>
  );
}
