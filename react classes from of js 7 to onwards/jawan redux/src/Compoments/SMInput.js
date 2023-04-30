import React from "react";
import { TextField } from "@mui/material";
export default function MyInput(props) {
  const { rows, variant, color, value, label, disabled, onChange } = props;
  return (
    <>
      <TextField
        value={value}
        color={color}
        onChange={onChange}
        disabled={disabled}
        variant={variant}
        label={label}
        multiline={true}
        rows={rows}
        id="outlined-basic"
      />
    </>
  );
}
