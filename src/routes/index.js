import React, { lazy } from "react";
import { Route, Routes, HashRouter } from "react-router";
import Homepage from "../pages/home";
// import Profile from "../pages/profile";
import LoginPage from "../pages/login";
import AccessRole from "../HOC/AccessRole";
import Protectedroute from "./Protectedroute";
import ProductPage from "../pages/productPage";
import CheckoutPage from "../pages/checkout";
import Signup from "../pages/signup";

const ProtectedHome = AccessRole(Homepage);
// const ProtectedProfile = AccessRole(Profile);
const ProtectedProfile = lazy(() => import("../pages/profile"));

const RouterPage = () => {
  // const [userInfo, setUserInfo] = React.useState({
  //   loginTime: "",
  //   email: ""
  // });
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
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default RouterPage;
