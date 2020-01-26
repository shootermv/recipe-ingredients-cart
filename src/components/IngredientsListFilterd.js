import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeIngredient } from "../actions";
import IngrendientList from "./IngrendientList";

export default function GetVisibleTodo() {
  const dispatch = useDispatch();
  const ingreds = useSelector(({ ingredients }) => ingredients);

  const onDelete = useCallback(id => dispatch(removeIngredient(id)), [dispatch]);

  return <IngrendientList ingreds={ingreds} removeIngredient={onDelete} />;
}
