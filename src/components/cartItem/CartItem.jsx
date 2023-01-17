import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({ item }) => {
  const { deleteProductById } = useContext(CartContext);
  return (
    <div className="row">
      <div className="card col-4 m-4 justify-content-center shadow p-3 mb-5 text-center border-dark" style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">${item.price}</p>
          <p className="card-text">Cantidad: {item.counter}</p>
          <button
            className="btn btn-danger"
            onClick={() => deleteProductById(item.id)}
          >
            Quitar del carrito
          </button>
        </div>
      </div>
    </div>
  );
};
