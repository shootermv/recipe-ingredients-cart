import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";
import lemon from "./images/lemon.jpeg";
import onion from "./images/onion.jpeg";
import cabbage from "./images/cabbage.jpeg";
import potatoes from "./images/potatoes.jpeg";
import beet from "./images/beet.jpeg";

import "./styles.css";
const init = {
  ingredients: [
    {
      id: 1,
      text: "lemons",
      completed: false,
      src: lemon,
      price: 0.12,
      store: "",
      total: 0.12,
      quantity: 1,
      delivery: 15
    },
    {
      id: 2,
      text: "cabbage",
      completed: false,
      src: cabbage,
      price: 0.34,
      store: "",
      total: 0.34,
      quantity: 1,
      delivery: 15
    },
    {
      id: 3,
      text: "onion",
      completed: false,
      src: onion,
      price: 2.12,
      store: "",
      total: 2.12,
      quantity: 1,
      delivery: 15
    },
    {
      id: 4,
      text: "potatoes",
      completed: false,
      src: potatoes,
      price: 1.1,
      store: "",
      total: 1.1,
      quantity: 1,
      delivery: 15
    },
    {
      id: 5,
      text: "beet",
      completed: false,
      src: beet,
      price: 1.3,
      store: "",
      total: 1.3,
      quantity: 1,
      delivery: 15
    }
  ],
  visibilityFilter: "SHOW_ALL",
  stores: [
    {
      name: "default",
      prices: {
        lemons: 0.12,
        cabbage: 0.34,
        onion: 2.12,
        potatoes: 1.1,
        beet: 1.3
      },
      time: 15
    },
    {
      name: "Quickstore",
      prices: {
        lemons: 0.12,
        cabbage: 0.34,
        onion: 2.12,
        potatoes: 1.1,
        beet: 1.2
      },
      time: 5
    },
    {
      name: "Cheepstore",
      prices: {
        lemons: 0.7,
        cabbage: 0.14,
        onion: 1.24,
        potatoes: 0.95,
        beet: 1.2
      },
      time: 15
    },
    {
      name: "John Slow",
      prices: {
        lemons: 0.4,
        cabbage: 0.3,
        onion: 2.2,
        potatoes: 1.1,
        beet: 1.2
      },
      time: 25
    }
  ]
};
const store = createStore(rootReducer, init, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
