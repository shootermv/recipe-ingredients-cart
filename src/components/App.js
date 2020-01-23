import React from "react";
import Footer from "./Footer";
import IngredientsListFilterd from "./IngredientsListFilterd";

const App = () => (
  <div className="App">
    <h2>Ingredients In Cart</h2>
    <IngredientsListFilterd />
    <hr />
    <Footer />
  </div>
);

export default App;
