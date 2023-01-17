import React from "react";
import { Item } from "../item/Item";

export const ItemList = ({ items }) => {
  return (
    <div className="row justify-content-center">
      {items.map((item) => {
        return <Item key={item.id} element={item} />;
      })}
    </div>
  );
};
