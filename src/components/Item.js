import React, { useState } from "react";

function Item({ name, category }) {

const [ cartClass, setCartClass ] = useState(true)


  function itemToggle(e){
    setCartClass(!cartClass)
  }
  
  return (
    <li className={cartClass ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={itemToggle}>{cartClass ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
