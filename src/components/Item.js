import React, { useState } from "react";

function Item({ name, category }) {
  const [ addCart , setAddCart ] = useState(false); //initial render of false as in 0
 
  function handleClick() {
    setAddCart((addCart) => !addCart)
  }

  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
