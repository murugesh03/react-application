import React from "react";
import { Button as MuiButton } from "@mui/material";
const Button = React.memo(function Button({ text, type }) {
  console.log("Button rendered:", text);
  return (
    <>
      {type === "text" ? (
        <MuiButton type="text" variant="contained">
          {text}
        </MuiButton>
      ) : (
        <MuiButton variant="contained">{text}</MuiButton>
      )}
    </>
  );
});

export default Button;
