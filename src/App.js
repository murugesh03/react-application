import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Parent from "./components/parent";
import { add } from "./utils/utils";
import Counter from "./components/counter";
//stateless Component - Function based component after React 16.8 functional component with hooks
//stateful Component - Class based component

function App() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    console.log("count state value before update", count);
    console.log(add(count, 1));
    setCount(add(count, 1));
  };
  console.log("count state value after update", count);

  return (
    <div className="App">
      <header className="App-header">
        <Counter count={count} onIncrement={handleIncrement} />
      </header>
    </div>
  );
}

export default App;
