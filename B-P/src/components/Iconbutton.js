import React from "react";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

const MyIconbutton = (props) => {
  const { onClick, val, variant } = props;
  return (
    <IconButton onClick={onClick} variant={variant} size="small">
      {val}
    </IconButton>
  );
};

export default MyIconbutton;
