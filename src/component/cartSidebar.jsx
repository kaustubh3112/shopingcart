import React from "react";
function CartSidebar() {
  const cart = JSON.parse(localStorage.getItem("Cart")) || [];

  return (
    <div className="fixed right-0 top-0 w-full bg-black/70 flex justify-end h-full z-[99]">
      <div className="bg-white shadow-lg w-[50%] h-full overflow-y-auto">
        <ul>
          <li className="grid grid-cols-7 gap-7 border-b border-slate-300 px-5 py-5 bg-slate-200">
            <span className="col-span-1">Product </span>
            <span className="col-span-2">Product Name</span>
            <span className="col-span-1">Category</span>
            <span className="col-span-1">Quantity</span>
            <span className="col-span-1">Price</span>
          </li>
          {cart.map((item, index) => (
            <li
              key={index}
              className="grid grid-cols-7 gap-7 border-b border-slate-300 px-5 py-5"
            >
              <span className="col-span-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[60px] max-w-[60px]"
                />
              </span>
              <span className="col-span-2">{item.title}</span>
              <span className="col-span-1">{item.category}</span>
              <span className="col-span-1">
                <input
                  type="number"
                  placeholder=""
                  className="border border-slate-300 w-[80px] p-2"
                />
              </span>
              <span className="col-span-1">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartSidebar;
