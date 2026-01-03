import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "../pages/home";
import Profile from "../pages/profile";
import LoginPage from "../pages/login";
import AccessRole from "../components/HOC/AccessRole";
import Protectedroute from "./Protectedroute";
import ProductPage from "../pages/productPage";
import CheckoutPage from "../pages/checkout";
import { UserContext } from "../context/UserContext";

const ProtectedHome = AccessRole(Homepage);
const ProtectedProfile = AccessRole(Profile);

const RouterPage = () => {
  const [userInfo, setUserInfo] = React.useState({
    loginTime: "",
    email: ""
  });
  return (
    <Routes>
      <Route path="/" element={<ProtectedHome authenticated={true} />} />
      <Route
        path="/profile"
        element={
          <Protectedroute>
            {/* <UserContext.Provider
              value={{ user: userInfo, setUser: setUserInfo }}
            > */}
            <ProtectedProfile authenticated={true} />
            {/* </UserContext.Provider> */}
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
      <Route
        path="/login"
        element={
          // <UserContext.Provider
          //   value={{ user: userInfo, setUser: setUserInfo }}
          // >
          <LoginPage />
          // </UserContext.Provider>
        }
      />
    </Routes>
  );
};

export default RouterPage;
