import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    counter < stock && setCounter(counter + 1);
  };

  const restar = () => {
    counter > initial && setCounter(counter - 1);
  };

  return (
    <div>
      {/* <CustomButton  /> */}
      <button onClick={sumar}>Sumar</button>
      <span>{counter}</span>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
