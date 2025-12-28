import React from "react";

const Input = React.memo(function Input({ name, value, onChange, label }) {
  console.log("Input rendered:", label);

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Enter text here"
      />
    </div>
  );
});

export default Input;
