import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions";
import IngrendientList from "./IngrendientList";

export default function GetVisibleTodo() {
  const dispatch = useDispatch();
  const ingreds = useSelector(({ todos }) => todos);

  const onDelete = useCallback(id => dispatch(deleteTodo(id)), [dispatch]);

  return <IngrendientList ingreds={ingreds} toggleTodo={onDelete} />;
}
