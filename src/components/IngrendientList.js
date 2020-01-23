import React from "react";
import Todo from "./Ingredient";

const TodoList = ({ ingreds, toggleTodo }) => (
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
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
