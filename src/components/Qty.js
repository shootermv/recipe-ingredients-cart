import React from "react";
import { useDispatch } from "react-redux";
import { incQty, decQty } from "../actions";

const Qty = ({ quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="qty-container">
      <button onClick={() => dispatch(decQty(id))}>-</button>
      {quantity}
      <button onClick={() => dispatch(incQty(id))}>+</button>
    </div>
  );
};

export default Qty;
