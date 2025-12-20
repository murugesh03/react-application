import React from "react";

function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Incremented count is {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
