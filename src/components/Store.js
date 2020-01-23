import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chngStore } from "../actions";

const Store = ({ store, id }) => {
  const dispatch = useDispatch();
  const stores = useSelector(({ stores }) => stores);

  return (
    <div>
      <select
        onChange={e => {
          const selectedStore = stores.find(
            ({ name }) => name === e.target.value
          );
          console.log(`selected:${e.target.value}`);
          dispatch(chngStore(id, selectedStore));
        }}
      >
        {stores.map(store => (
          <option key={store.name} value={store.name}>{store.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Store;
