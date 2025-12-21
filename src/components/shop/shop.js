// =======================
// IMPORT SECTION
// =======================

// React library
import React from "react";

// =======================
// REACT HOOKS (REFERENCE)
// =======================

// Common Hooks:
// useState    → manage state
// useEffect   → lifecycle behavior
// useRef      → persist values without re-render
// useContext  → consume context
// useReducer  → complex state logic
// useMemo     → memoize values
// useCallback → memoize functions

// =======================
// SHOP COMPONENT
// =======================

// Functional Component
// Uses Hooks instead of lifecycle methods
const Shop = () => {
  // -----------------------
  // STATE (useState)
  // -----------------------
  // totalTodos → state variable
  // setTotalTodos → function to update state
  // Initial value is 0

  const [totalTodos, setTotalTodos] = React.useState(0);

  // -----------------------
  // LOCAL VARIABLE
  // -----------------------
  // Used to store timeout reference
  // (Note: this resets on every render – OK for demo purpose)

  let timer = null;

  // This log runs on EVERY render
  console.log("Current totalTodos:", totalTodos);

  // -----------------------
  // CUSTOM FUNCTION
  // -----------------------
  // Fetches todo list from API
  // Simulates API delay using setTimeout

  const getTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Todos fetched:", data);

        // Simulating loading delay of 5 seconds
        timer = setTimeout(() => {
          // Updating state triggers re-render
          setTotalTodos(data.length);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  };

  // =======================
  // LIFECYCLE USING useEffect
  // =======================

  // -----------------------
  // componentWillUnmount
  // -----------------------
  // Cleanup logic
  // Runs when component is removed from DOM

  React.useEffect(() => {
    return () => {
      console.log("componentWillUnmount called");
      clearTimeout(timer);
    };
  }, []);

  // -----------------------
  // componentDidMount
  // -----------------------
  // Runs ONCE after first render
  // Best place for API calls

  React.useEffect(() => {
    console.log("componentDidMount called");
    getTodos();
  }, []);

  // -----------------------
  // componentDidUpdate
  // -----------------------
  // Runs AFTER state update
  // Only runs when totalTodos changes

  React.useEffect(() => {
    console.log("componentDidUpdate called");
  }, [totalTodos]);

  // =======================
  // JSX (RENDER)
  // =======================
  // Functional component body itself is the render

  return (
    <div>
      <h2>Shop Component</h2>

      {/* This log runs during render */}
      {console.log("render is called")}

      {/* Conditional Rendering */}
      {/* Show Loading until totalTodos is updated */}

      {totalTodos ? <p>Total Todos: {totalTodos}</p> : <p>Loading...</p>}
    </div>
  );
};

// Exporting component
export default Shop;
