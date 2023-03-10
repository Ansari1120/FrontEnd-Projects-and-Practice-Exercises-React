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
        multiline={true}
        id="outlined-basic"
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

//input form 03 

// const { label } = props;
// return <TextField multiline={true} rows={4} label={label} />;


//Styling

// style={{
//   backgroundColor: "white",
//   border: "1px solid grey",
//   borderRadius: "5px",
//   padding: 5,
//   margin: 3,
//   boxShadow: "0px 8px 12px rgba(0,0,0,.2)",
// }}