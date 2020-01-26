import React from "react";
import Ingredient from "./Ingredient";

const IngrendientList = ({ ingreds, removeIngredient }) => (
  <ul>
    <>
      <h3>Product</h3>
      <h3>Price</h3>
      <h3>Store</h3>
      <h3>Qty</h3>
      <h3>Total</h3>
      <h3>Time</h3>
      <h3>&nbsp;</h3>
    </>
    {ingreds.map(todo => (
      <Ingredient key={todo.id} {...todo} onClick={() => removeIngredient(todo.id)} />
    ))}
  </ul>
);

export default IngrendientList;
