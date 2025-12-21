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
import Shop from "./components/shop/shop";
// import Shop from "./components/shop";

// Utility function
// add() is a helper function that returns sum of two numbers
import { add } from "./utils/utils";

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

  return (
    <div className="App">
      <header className="App-header">
        {/* 
          Counter component example (commented)
          - count is passed as prop
          - handleIncrement is passed as function prop
        */}
        {/*
        <Counter count={count} onIncrement={handleIncrement} />
        */}

        {/* 
          Example of Event Bubbling Control
          - stopPropagation() prevents event from reaching parent
        */}
        {/*
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("Decrement Clicked");
          }}
        >
          Decrement
        </button>
        */}

        {/* 
          Shop Component
          - Can be functional or class-based
          - Used to demonstrate lifecycle methods / hooks
        */}
        <Shop />
      </header>
    </div>
  );
}

// Exporting App component so it can be used in index.js
export default App;
