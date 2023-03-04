import React from "react";
import { TextField } from "@mui/material";
export default function Input(props) {
  const { label, disabled, onChange } = props;
  return (
    <>
      <TextField
        color="error"
        onChange={onChange}
        disabled={disabled}
        variant="standard"
        label={label}
      />
    </>
  );
  
}

//input form 02

/* <Box
component="form"
sx={{
  "& > :not(style)": { m: 1, width: "25ch" },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label={label} variant={variant} />
</Box> */






