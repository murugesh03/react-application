// import React from "react";
// import { Navigate } from "react-router";
// // localStorage.setItem("authToken", true);
// // localStorage.removeItem("authToken");

// function isAuthenticated() {
//   const userAuthenticated = localStorage.getItem("authToken");
//   console.log(userAuthenticated, "userAuthenticated");
//   // Replace this with your actual authentication logic
//   return userAuthenticated ? true : false; // or false based on authentication status }
// }

// const Protectedroute = ({ children }) => {
//   console.log("Protectedroute rendered", isAuthenticated());
//   console.log("Protectedroute children:", children);
//   if (!isAuthenticated()) {
//     return <Navigate to="/login" replace={true} />;
//   }
//   return children;
// };

// export default Protectedroute;

import { Navigate } from "react-router-dom";

const Protectedroute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protectedroute;
