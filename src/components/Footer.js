import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const todos = useSelector(({ todos }) => todos);
  return (
    <footer>
      <button>
        <div>
          <span>
            <b>Total:</b>{" "}
            {todos.reduce((acc, todo) => (acc += todo.total), 0).toFixed(2)}
          </span>
          <span>
            <b>Delivery:</b> {Math.max(...todos.map(({ delivery }) => delivery))}{" "}
            min
          </span>
        </div>
        <div className="checkout-wrap">checkout</div>
      </button>
    </footer>
  );
};

export default Footer;
