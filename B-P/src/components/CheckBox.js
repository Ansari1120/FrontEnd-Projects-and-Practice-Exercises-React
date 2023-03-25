import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function MyCheckBox(props) {
  const { onClick, color, icon } = props;
  return (
    <div>
      {" "}
      <Checkbox
        {...label}
        defaultChecked
        color={color}
        onClick={onClick}
        icon={
          icon
          // <BookmarkBorderIcon />
        }
      />
    </div>
  );
}
