import React from "react";
import { TextField } from "@mui/material";

export default function InputField(props) {
  const { name, value, type, placeholder, variant, onChange, margin } = props;
  return (
    <TextField
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      variant={variant}
      onChange={onChange}
      margin={margin}
    />
  );
}
