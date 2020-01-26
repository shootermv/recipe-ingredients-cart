import { combineReducers } from "redux";
import { VisibilityFilters } from "../actions";

const ingredients = (state = [], action) => {
  switch (action.type) {
    case "DELETE_INGREDIENT":
      return state.filter(({ id }) => id !== action.id);

    case "INC_QUANTITY":
      return state.map(ingredient =>
        ingredient.id === action.id
          ? {
              ...ingredient,
              quantity: ingredient.quantity + 1,
              total: ingredient.price * (ingredient.quantity + 1)
            }
          : ingredient
      );

    case "DEC_QUANTITY":
      const ingredientCurr = state.find(({ id }) => id === action.id);
      if (ingredientCurr.quantity === 1) {
        return state.filter(({ id }) => id !== action.id);
      }
      return state.map(ingredient =>
        ingredient.id === action.id
          ? {
              ...ingredient,
              quantity: ingredient.quantity - 1,
              total: ingredient.price * (ingredient.quantity - 1)
            }
          : ingredient
      );

    case "CHANGE_STORE":
      return state.map(ingredient =>
        ingredient.id === action.id
          ? {
              ...ingredient,
              store: action.store.name,
              delivery: action.store.time,
              price: action.store.prices[ingredient.text],
              total: action.store.prices[ingredient.text] * ingredient.quantity
            }
          : ingredient
      );

    default:
      return state;
  }
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const stores = (state = []) => {
  return state;
};

export default combineReducers({
  ingredients,
  visibilityFilter,
  stores
});
