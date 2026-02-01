// =======================
// IMPORT SECTION
// =======================

// Importing React library
// Required to create React components and use JSX
import React from "react";

// =======================
// COUNTER COMPONENT
// =======================

// Counter is a FUNCTIONAL component
// It receives data and functions from its parent using props
// Props used here:
// - count       → current counter value
// - onIncrement → function to increment count

function Counter({ count, onIncrement }) {
  // -----------------------
  // JSX (RENDER)
  // -----------------------
  // Displays the count value
  // Calls parent function when button is clicked

  return (
    <div className="counter">
      {/* Displaying dynamic value using props */}
      <p>Incremented count is {count}</p>

      {/* 
        Button click handler
        - Calls onIncrement function passed from parent
        - Parent updates the state
      */}
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

// Exporting Counter component so it can be used in other files
export default Counter;
