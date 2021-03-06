


export const incQty = id => ({
  type: "INC_QUANTITY",
  id
});

export const decQty = id => ({
  type: "DEC_QUANTITY",
  id
});

export const removeIngredient = id => ({
  type: "DELETE_INGREDIENT",
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
