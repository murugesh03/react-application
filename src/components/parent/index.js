// =======================
// IMPORT SECTION
// =======================

// Importing React and useState hook
// useState is used to manage state in functional components
import React, { useState } from "react";

// Importing Child component
// Parent will pass data to Child using props
import Child from "../child";

// =======================
// NOTES FOR BEGINNERS
// =======================

// Before React 16.8:
// - Functional components were called "stateless components"

// After React 16.8:
// - Hooks were introduced
// - Functional components can now manage state
// - Hence, functional components can be stateful

// =======================
// PARENT COMPONENT
// =======================

function Parent() {
  // -----------------------
  // STATE DECLARATION
  // -----------------------
  // name     → state variable
  // setName  → function to update name
  // useState returns an array (array destructuring)
  // Initial value of name is "Satish"

  const [name, setName] = useState("Satish");

  // -----------------------
  // EVENT HANDLER FUNCTION
  // -----------------------
  // Updates the name state when button is clicked

  const handleChangeUserName = () => {
    setName("Kumar Satish");
  };

  // -----------------------
  // JSX (RENDER)
  // -----------------------
  // Parent passes "name" state to Child using props

  return (
    <div>
      {/* Static text from Parent component */}
      <p>Hello I'm from parent</p>

      {/* 
        Passing data from Parent → Child
        name is passed as a prop
      */}
      <Child name={name} />

      {/* 
        Button click updates the state
        State change triggers re-render
      */}
      <button onClick={handleChangeUserName}>Change User Name</button>
    </div>
  );
}

// Exporting Parent component
export default Parent;
