import React from "react";
import { useDispatch } from "react-redux";
import { incTodo, decTodo } from "../actions";

const Qty = ({ quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="qty-container">
      <button onClick={() => dispatch(decTodo(id))}>-</button>
      {quantity}
      <button onClick={() => dispatch(incTodo(id))}>+</button>
    </div>
  );
};

export default Qty;
