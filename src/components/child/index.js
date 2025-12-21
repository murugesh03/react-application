// =======================
// IMPORT SECTION
// =======================

// Importing React library
// Needed to create React components and use JSX
import React from "react";

// =======================
// CHILD COMPONENT
// =======================

// Child is a FUNCTIONAL component
// It receives data from its parent using "props"
function Child(props) {
  // Logs all props received from the parent
  console.log("Child props:", props);

  // -----------------------
  // OBJECT DESTRUCTURING
  // -----------------------
  // Extracting 'name' from props
  // Same as: const name = props.name;
  const { name } = props;

  // -----------------------
  // HELPER FUNCTION
  // -----------------------
  // Determines the user type based on name

  const getUserType = () => {
    // Convert name to lowercase to avoid case issues
    if (name.toLowerCase() === "satish") {
      return "Admin";
    } else {
      return "User";
    }
  };

  // -----------------------
  // JSX (RENDER)
  // -----------------------
  // Displays welcome message and user type

  return (
    <div>
      {/* Displaying dynamic data using props */}
      <p>Welcome onboard, {name}!</p>

      {/* Calling helper function inside JSX */}
      <p>User Type: {getUserType()}</p>
    </div>
  );
}

// Exporting Child component so it can be used by Parent
export default Child;
