import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { fbCustomPost } from "../config/firebasemethods";

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [model, setmodel] = React.useState({});
  const navigation = useNavigate();
  const Nav = (myval) => {
    console.log(myval);
    setmodel({ ...model, mytype: myval });
  };

  const send = () => {
    fbCustomPost("myconsumetype", model)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
    navigation("/userloginsignup");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Navigation To Login Screen</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Login Type</InputLabel>

              <Select
                native
                onChange={(e) => Nav(e.target.value)}
                input={
                  <OutlinedInput label="Login Type" id="demo-dialog-native" />
                }
              >
                <option aria-label="None" value="" />
                <option value={"std"}>Student Login</option>
                <option value={"Inst"}>Institute Login</option>
                <option value={"adm"}>Admin Login</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={send}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
