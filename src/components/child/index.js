import React from "react";

function Child(props) {
  console.log("Child props:", props);
  const { name } = props; //Object destructuring
  const getUserType = () => {
    if (name.toLowerCase() === "satish") {
      return "Admin";
    } else {
      return "User";
    }
  };
  return (
    <div>
      <p>Welcome onboard, {name}!</p>
      <p>User Type: {getUserType()}</p>
    </div>
  );
}

export default Child;
