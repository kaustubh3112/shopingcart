import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import {
  ShoppingCartIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

const Cart = () => {
  const useCart = useContext(CartContext);
  const [cartList, setCartList] = useState([]);

  const getData = () => {
    const data = localStorage.getItem("Cart");
    if (data) {
      setCartList(
        JSON.parse(data).map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }))
      );
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = cartList.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartList(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };

  const removeItems = (index) => {
    const updatedCart = [...cartList];
    updatedCart.splice(index, 1);
    setCartList(updatedCart);
    localStorage.setItem("Cart", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () =>
    cartList.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

  useEffect(() => {
    getData();
  }, [useCart]);

  return (
    <>
      {cartList.length > 0 ? (
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Shopping Cart
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100">
                  <th className="text-left p-5 text-gray-700 font-semibold">
                    Product
                  </th>
                  <th className="text-center p-5 text-gray-700 font-semibold">
                    Quantity
                  </th>
                  <th className="text-center p-5 text-gray-700 font-semibold">
                    Price
                  </th>
                  <th className="text-center p-5 text-gray-700 font-semibold">
                    Total
                  </th>
                  <th className="text-center p-5 text-gray-700 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((product, index) => (
                  <tr
                    className="border-b hover:bg-gray-50 transition-colors"
                    key={`product-${index}`}
                  >
                    <td className="flex items-center p-5 space-x-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <span className="text-gray-800 font-medium">
                        {product.title}
                      </span>
                    </td>
                    <td className="text-center p-5">
                      <input
                        type="number"
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                        value={product.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            index,
                            Math.max(1, +e.target.value || 1)
                          )
                        }
                      />
                    </td>
                    <td className="text-center p-5 text-gray-800 font-semibold">
                      {product.price}
                    </td>
                    <td className="text-center p-5 text-gray-800 font-semibold">
                      {(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="text-center p-5">
                      <button
                        onClick={() => removeItems(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-6">
            <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Cart Summary
              </h3>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="text-center">
            <ShoppingCartIcon className="w-10 h-10 mb-5 mx-auto text-red-500" />
            <h3 className="text-lg font-semibold">
              Your shopping cart is empty
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
