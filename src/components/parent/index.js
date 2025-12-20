import React, { useState } from "react";
import Child from "../child";
// functional component are called as stateless component until react 16.8
// after react 16.8 functional component with hooks can have state also

function Parent() {
  const [name, setName] = useState("Satish"); // array destructuring
  const handleChangeUserName = () => {
    setName("Kumar Satish");
  };

  return (
    <div>
      <p>Hello i'm from parent</p>
      <Child name={name} />
      <button onClick={handleChangeUserName}>Change User Name</button>
    </div>
  );
}

export default Parent;
