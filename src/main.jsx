import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./Context/CartContext.jsx";
import { FireBaseProvider } from "./Context/Firebase.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FireBaseProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FireBaseProvider>
  </React.StrictMode>
);
