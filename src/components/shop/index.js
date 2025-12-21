//Mounting Phase - constructor, static getDerivedStateFromProps, render, componentDidMount
//Updating Phase - static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate
//Unmounting Phase - componentWillUnmount
//Error Handling Phase - static getDerivedStateFromError, componentDidCatch

// =======================
// IMPORT SECTION
// =======================

// React and Component class
import React, { Component } from "react";

// =======================
// REACT LIFECYCLE PHASES
// =======================

// Mounting Phase:
// - constructor
// - static getDerivedStateFromProps
// - render
// - componentDidMount

// Updating Phase:
// - static getDerivedStateFromProps
// - shouldComponentUpdate
// - render
// - getSnapshotBeforeUpdate
// - componentDidUpdate

// Unmounting Phase:
// - componentWillUnmount

// Error Handling Phase:
// - static getDerivedStateFromError
// - componentDidCatch

// =======================
// SHOP COMPONENT
// =======================

class Shop extends Component {
  // -----------------------
  // CONSTRUCTOR (Mounting)
  // -----------------------
  // Runs once when the component is created
  // Used to initialize state and bind methods

  constructor(props) {
    super(props);
    console.log("constructor called");

    this.state = {
      // totalTodos holds the count of todos
      // Initially set to 0
      totalTodos: 0
    };
  }

  // -----------------------
  // CUSTOM METHOD
  // -----------------------
  // Fetches todo data from API
  // Simulates API delay using setTimeout

  getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Todos fetched:", data);

        // Simulating loading delay of 5 seconds
        this.timer = setTimeout(() => {
          // Updating state triggers re-render
          this.setState({ totalTodos: data.length });
        }, 5000);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }

  // -----------------------
  // componentDidMount (Mounting)
  // -----------------------
  // Called AFTER the first render
  // Best place for API calls and subscriptions

  componentDidMount() {
    console.log("componentDidMount called");
    this.getTodos();
  }

  // =======================
  // UPDATING PHASE
  // =======================

  // -----------------------
  // shouldComponentUpdate
  // -----------------------
  // Decides whether component should re-render
  // Used for performance optimization

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true; // allow re-render
  }

  // -----------------------
  // componentDidUpdate
  // -----------------------
  // Called AFTER component re-renders
  // Used to compare previous and current state

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
    console.log("Previous State:", prevState);

    if (prevState.totalTodos !== this.state.totalTodos) {
      console.log(
        `Total todos updated from ${prevState.totalTodos} to ${this.state.totalTodos}`
      );
    }
  }

  // =======================
  // UNMOUNTING PHASE
  // =======================

  // -----------------------
  // componentWillUnmount
  // -----------------------
  // Called just before component is removed
  // Used to clean up timers, subscriptions, listeners

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearTimeout(this.timer);
  }

  // =======================
  // RENDER METHOD
  // =======================
  // Responsible for displaying UI
  // Runs on mount and every update

  render() {
    console.log("render called");

    return (
      <div>
        <h2>Shop Component</h2>

        {/* Conditional Rendering */}
        {/* Shows Loading until totalTodos is updated */}

        {this.state.totalTodos ? (
          <p>Total Todos: {this.state.totalTodos}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

// Exporting Shop component
export default Shop;
