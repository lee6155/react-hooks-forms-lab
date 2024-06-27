import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemPassed2, setItemPassed2] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  
  function onSearchChange(itemPassed) {
    setItemPassed2(itemPassed)
  }

  let itemsToDisplay2 = items.filter(function(item) {
    return itemPassed2 === item.name
  })

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay2.length === 0 ? 
        itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )) :
        itemsToDisplay2.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
