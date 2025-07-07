import { useContext } from "react";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, remoceFromCart } = useContext(storecontext);

  return (
    <div className="cart">
      Cart
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default Cart;
