import MyButton from "../../components/Button"
import React from 'react'
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Notify() {
  return (
    <div>
      <MyButton
      label={"mybutton"}
      startIcon={<AcUnitIcon />}

      />
    </div>
  )
}
