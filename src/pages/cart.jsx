import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";

const Cart = () => {
  const useCart = useContext(CartContext);

  const [cartList, setCartList] = useState([]);
  const [inputCount, setInputCount] = useState(0);

  const getData = () => {
    const data = localStorage.getItem("Cart");
    if (data) {
      setCartList(JSON.parse(data));
    }
  };

  const quantityHandler = (product) => {};

  useEffect(() => {
    getData();
  }, [useCart]);

  return (
    <>
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
              {cartList.length > 0 &&
                cartList.map((product, index) => {
                  return (
                    <>
                      <tr
                        className="border-b hover:bg-gray-50 transition-colors"
                        key={index}
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
                            onChange={(product) => quantityHandler(product)}
                            value={inputCount || 0}
                          />
                        </td>

                        <td className="text-center p-5 text-gray-800 font-semibold">
                          {product.price}
                        </td>
                        <td className="text-center p-5 text-gray-800 font-semibold">
                          $20.00
                        </td>
                        <td className="text-center p-5">
                          <button className="text-red-500 hover:text-red-700 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
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
              <span>$40.00</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-4">
              <span>Tax</span>
              <span>$3.00</span>
            </div>
            <div className="flex justify-between text-gray-800 font-bold mb-6">
              <span>Total</span>
              <span>$43.00</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
