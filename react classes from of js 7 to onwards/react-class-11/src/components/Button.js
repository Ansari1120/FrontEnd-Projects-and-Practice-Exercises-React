import React from "react";
import { Button } from "@mui/material";
export default function Button(props) {
  const { label, onClick, disabled, startIcon, endIcon } = props;

  return (
    <>
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        onClick={onClick}
        variant="contained"
        // onClick={props.click}
        // className={props.className ? props.className : "primary-button"}
      >
        {label}
        {/* {props.label} */}
      </Button>
    </>
  );
}


//button form another 


// function Input(props){
//   console.log(props)
//   return <button onChange={props.change} className={props.change.length >= 1 ? props.className : "primary-button"}>{props.label}</button>
// }

// export default Input;