import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const ingredients = useSelector(({ ingredients }) => ingredients);
  return (
    <footer>
      <button>
        <div>
          <span>
            <b>Total:</b>{" "}
            {ingredients.reduce((acc, todo) => (acc += todo.total), 0).toFixed(2)}
          </span>
          <span>
            <b>Delivery:</b> {Math.max(...ingredients.map(({ delivery }) => delivery))}{" "}
            min
          </span>
        </div>
        <div className="checkout-wrap">checkout</div>
      </button>
    </footer>
  );
};

export default Footer;
