import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../pages/home";
import Profile from "../pages/profile";
import LoginPage from "../pages/login";
import AccessRole from "../components/HOC/AccessRole";
import Protectedroute from "./Protectedroute";
import ProductPage from "../pages/productPage";
import CheckoutPage from "../pages/checkout";

const ProtectedHome = AccessRole(Homepage);
const ProtectedProfile = AccessRole(Profile);

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedHome authenticated={true} />} />
      <Route
        path="/profile"
        element={
          <Protectedroute>
            <ProtectedProfile authenticated={true} />
          </Protectedroute>
        }
      />
      <Route
        path="/productPage/:productId"
        element={
          <Protectedroute>
            <ProductPage />
          </Protectedroute>
        }
      />
      <Route
        path="/checkout"
        element={
          <Protectedroute>
            <CheckoutPage />
          </Protectedroute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default RouterPage;
