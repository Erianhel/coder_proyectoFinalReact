import Swal from "sweetalert2";
import { useContext, useState, useEffect } from "react";
import { Form } from "../form/Form";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../cartItem/CartItem";
import { Link } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Orders } from "../orders/Orders";

export const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const [comprar, setComprar] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [order, setOrder] = useState({});

  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders");
      const ref = doc(orderCollection, orderId);
      getDoc(ref)
        .then((res) => {
          setOrder({
            id: res.id,
            ...res.data(),
          });
        })
        .catch((err) => console.log(err));
    }
  }, [orderId]);

  if (orderId) {
    return (
      <div className="m-4 justify-content-center">
        <Orders order={order} />
        <Link className="btn btn-primary mt-1 ms-5" to="/">
          Volver a comprar
        </Link>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-around">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      {cart.length > 0 ? (
        <div className="card text-center m-4 justify-content-center shadow p-2 mb-4 border-dark" style={{ width: "18rem", height: "22rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-2">Total de productos</h5>
            <p className="card-text text-center fs-5">Precio total: ${getTotalPrice()}</p>
            {comprar ? (
              <Form
                cart={cart}
                getTotalPrice={getTotalPrice}
                setOrderId={setOrderId}
                clearCart={clearCart}
              />
            ) : (
              <>
                <button
                  className="btn btn-primary m-1"
                  onClick={() => setComprar(true)}
                >
                  Comprar
                </button>
                <button className="btn btn-danger m-1" onClick={clearCart}>
                  Limpiar carrito
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
      
    </div>
  );
};
