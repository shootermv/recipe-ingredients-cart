import { combineReducers } from "redux";
import { VisibilityFilters } from "../actions";

const ingredients = (state = [], action) => {
  switch (action.type) {
    case "DELETE_INGREDIENT":
      return state.filter(({ id }) => id !== action.id);

    case "INC_QUANTITY":
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              quantity: todo.quantity + 1,
              total: todo.price * (todo.quantity + 1)
            }
          : todo
      );

    case "DEC_QUANTITY":
      const todoCurr = state.find(({ id }) => id === action.id);
      if (todoCurr.quantity === 1) {
        return state.filter(({ id }) => id !== action.id);
      }
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              quantity: todo.quantity - 1,
              total: todo.price * (todo.quantity - 1)
            }
          : todo
      );

    case "CHANGE_STORE":
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              store: action.store.name,
              delivery: action.store.time,
              price: action.store.prices[todo.text],
              total: action.store.prices[todo.text] * todo.quantity
            }
          : todo
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
  todos: ingredients,
  visibilityFilter,
  stores
});
