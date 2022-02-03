//https://learning.flatironschool.com/courses/4986/assignments/165749?module_item_id=357569
import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  function handleFilterSelect(e) {
    setSelectedCategory(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })

  const itemsToDisplay2 = items.filter(item => item.category === selectedCategory)

  //ternary
  // const itemsToDisplay = items.filter((item) => {
  //   return ( selectedCategory === "All" ? true : item.category.includes(selectedCategory) )
  // })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterSelect}>
          <option value="All" >Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay2.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;