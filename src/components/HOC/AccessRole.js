import React from "react";

//Higher order functions example
function fun() {
  console.log("Function called with params");
}

function fun2(action) {
  action();
}
fun2(fun);

// Higher Order Component (HOC)
// - A function that takes a component and returns a new component
// - Used for reusing component logic
// - Common use cases: authentication, theming, logging, access control

const AccessRole = (WrappedComponent) => {
  function WithAccessRole(props) {
    // Role logic (can later come from API / context)
    const { authenticated } = props;
    console.log("User Role:", authenticated);

    // Authorization check
    if (!authenticated) {
      return <div>This is protected page</div>;
    }

    // Pass role + original props
    return <WrappedComponent {...props} />;
  }

  return WithAccessRole;
};

export default AccessRole;
