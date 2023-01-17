import { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (elemento) => {
    if (isInCart(elemento)) {
      setCart(newArray);
      let newArray = cart.map((item) => {
        if (item.id === elemento.id) {
          let newItem = {
            ...item,
            counter: elemento.counter,
          };
          return newItem;
        } else {
          return item;
        }
      });
    } else {
      setCart([...cart, elemento]);
    }
  };
  const isInCart = (elemento) => {
    return cart.some((item) => item.id === elemento.id);
  };

  const deleteProductById = (id) => {
    const newArray = cart.filter((producto) => producto.id !== id);
    setCart(newArray);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCantidadById = (id) => {
    const product = cart.find((item) => item.id === id);
    return product?.counter;
  };

  const getTotalPrice = () => {
    const total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.counter;
    }, 0);
    return total;
  };

  const getTotalProducts = () => {
    const total = cart.reduce((acc, elemento) => {
      return acc + elemento.counter;
    }, 0);
    return total;
  };

  const data = {
    cart,
    addToCart,
    clearCart,
    getCantidadById,
    getTotalPrice,
    getTotalProducts,
    deleteProductById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
