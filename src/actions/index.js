let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const incTodo = id => ({
  type: "INC_QUANTITY",
  id
});

export const decTodo = id => ({
  type: "DEC_QUANTITY",
  id
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});

export const chngStore = (id, store) => ({
  type: "CHANGE_STORE",
  id,
  store
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
