import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const data = localStorage.getItem("Cart");
  const getData = () => {
    if (data) {
      setCartList(JSON.parse(data));
    }
  };

  const addToCarthandler = (product) => {
    const cart = JSON.parse(localStorage.getItem("Cart")) || [];
    const productExist = cart.some((item) => item.id === product.id);
    if (!productExist) {
      cart.push(product);
    }
    localStorage.setItem("Cart", JSON.stringify(cart));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartContext.Provider value={{ cartList, setCartList, addToCarthandler }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
