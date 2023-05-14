import React from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function MyButton(props) {
  const {
    loading,
    loadingPosition,
    variant,
    label,
    onClick,
    disabled,
    startIcon,
    endIcon,
    sx,
    color,
  } = props;

  return (
    <>
      <Button
        sx={sx}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={loading ? "disabled" : disabled}
        onClick={onClick}
        variant={variant}
        loadingPosition={loadingPosition}
        loading={loading}
        color={color}
        // onClick={props.click}
        // className={props.className ? props.className : "primary-button"}
      >
        {loading ? <CircularProgress color="inherit" /> : label}
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

//button form 3

{
  /* <Button startIcon={<AcUnitIcon />} color="warning" variant="contained">
{props.btnValue}
</Button> */
}
