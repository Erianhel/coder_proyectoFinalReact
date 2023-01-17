import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ element }) => {
  return (
    <div className="card m-4 justify-content-center shadow p-3 mb-5 text-center border-dark" style={{ width: "18rem" }}>
      <img src={element.img} className="card-img-top" alt={element.name} />
      <div className="card-body">
        <h5 className="card-title">{element.name}</h5>
        <p className="card-text">{element.description}</p>
        <p className="card-text">${element.price}</p>
        <Link to={`/itemDetail/${element.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};
