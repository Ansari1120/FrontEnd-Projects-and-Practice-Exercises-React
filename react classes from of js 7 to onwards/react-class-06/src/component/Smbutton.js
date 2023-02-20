
import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function Smbutton(props) {
    const {label,onclick,disabled} = props;
  return (
   <Button label={label} disabled = {disabled} onclick={onclick} variant="contained"></Button>
  )
}
