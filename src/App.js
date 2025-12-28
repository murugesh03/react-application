// =======================
// IMPORT SECTION
// =======================

// React library (needed for JSX and hooks)
import React from "react";

// Application styles
import "./App.css";

// Shop component
// This is a FUNCTIONAL component (uses hooks)
// Uncomment the class-based import if you want to test lifecycle methods
// import Shop from "./components/shop";

// Navbar component
import Navbar from "./components/navbar";

// Utility function
// add() is a helper function that returns sum of two numbers
import { add, generateRandomNumber } from "./utils/utils";
import LoginPage from "./pages/login";
import AccessRole from "./components/HOC/AccessRole";
import RouterPage from "./routes";

// =======================
// BASIC REACT CONCEPTS
// =======================

// Stateless Component:
// - Functional component without state
// - Example: function Component() { return <div /> }

// Stateful Component:
// - Component that manages state
// - Functional: useState hook
// - Class: this.state

// =======================
// EVENT CONCEPTS IN REACT
// =======================

// Event Bubbling:
// - Event starts from CHILD element
// - Then moves to PARENT element
// - Example: button → div → body

// Event Capturing:
// - Event starts from PARENT element
// - Then moves to CHILD element
// - Happens before bubbling phase

// Synthetic Event:
// - React wraps browser events into SyntheticEvent
// - Works same across all browsers
// - Methods like stopPropagation() and preventDefault() are available

// Common React Events:
// onClick, onChange, onSubmit, onMouseOver, onFocus, onBlur,
// onKeyDown, onKeyUp, onLoad, onError

// =======================
// APP COMPONENT
// =======================

const LoginPageWithHOC = AccessRole(LoginPage);

function App() {
  // -----------------------
  // STATE DECLARATION
  // -----------------------

  // count → current state value
  // setCount → function to update count
  // useState causes component to re-render when state changes
  const [count, setCount] = React.useState(0);

  // -----------------------
  // EVENT HANDLER FUNCTION
  // -----------------------

  const handleIncrement = () => {
    // This log shows the value BEFORE updating state
    console.log("count state value before update:", count);

    // add() is a utility function
    // Business logic is separated from UI
    const newCount = add(count, 1);

    // Updating state (this triggers re-render)
    setCount(newCount);

    // This will still print OLD value
    // Because state updates are asynchronous
    console.log("count state value after calling setCount:", count);
  };

  // This log runs on EVERY render
  console.log("rendering App component, count =", count);

  // -----------------------
  // JSX (UI RENDERING)
  // -----------------------
  console.log(generateRandomNumber(10)); //Impure function example
  console.log(add(5, 3));
  // Pure function example

  return (
    <div className="App">
      <Navbar />
      <RouterPage />
    </div>
  );
}

// Exporting App component so it can be used in index.js
export default App;
