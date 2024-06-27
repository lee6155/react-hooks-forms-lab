import React, {useState} from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchedItem, setSearch] = useState("")
  
  function handleSearchedItem (event) {
    setSearch(event.target.value)
    onSearchChange(searchedItem)
  }

  return (
    <div className="Filter">
      <input onChange={handleSearchedItem} value={searchedItem} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
