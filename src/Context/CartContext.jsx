import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [count, setCount] = useState(0);

  const getData = () => {
    const data = localStorage.getItem("Cart");
    if (data) {
      const parsedData = JSON.parse(data);
      setCartList(parsedData);
      setCount(parsedData.length);
    }
  };

  const addToCarthandler = (product) => {
    const cart = JSON.parse(localStorage.getItem("Cart")) || [];
    const productExist = cart.some((item) => item.id === product.id);
    if (!productExist) {
      cart.push(product);
      setCartList(cart);
      setCount(cart.length);
      localStorage.setItem("Cart", JSON.stringify(cart));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setCount(cartList.length);
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{ cartList, setCartList, addToCarthandler, count }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
