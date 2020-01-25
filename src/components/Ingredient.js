import React from "react";

import Qty from "./Qty";
import Store from "./Store";

const Ingredient = ({
  onClick,
  completed,
  id,
  text,
  price,
  src,
  store,
  total,
  quantity,
  delivery
}) => (
  <>
    <div className="product">
      <img src={src} alt="product" />
      {text}
    </div>
    <div>
      {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
    </div>
    <div>
      <Store store={store} id={id} />
    </div>
    <div className="qty-container-wrap">
      <Qty quantity={quantity} id={id} />
    </div>
    <div>
      {total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })}
    </div>
    <div>{delivery}min</div>
    <div>
      <button onClick={onClick} className="del">     
        X       
      </button>
    </div>
  </>
);

export default Ingredient;
