import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
// import About from "./pages/about";
import Product from "./pages/product";
import Details from "./pages/details";
// import Contact from "./pages/contact";
import Header from "./component/header";
import Footer from "./component/footer";
import PageNotFound from "./component/pageNotFound";
import Login from "./pages/auth/login";
import { useState } from "react";
import Register from "./pages/auth/register";
import ForegtPassword from "./pages/auth/forgetPassword";
import Cart from "./pages/cart";
import PrivateRoute from "./component/privateRoute";

function Routing() {
  return (
    <div className="flex flex-col h-[100vh] ">
      <Header />
      <div className="grow-[1] pt-[90px]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forget" element={<ForegtPassword />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/products" element={<Product />} />
            <Route exact path="/products/details/:id" element={<Details />} />
            <Route exact path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Routing;
