import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { signUpUser } from "../config/firebasemethods";

function Signup() {
  const [model, setModel] = useState({});

  let createUser = () => {
    console.log(model);
    signUpUser(model)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center "
      >
        <Box>
          <Typography variant="h3">Signup</Typography>
          <Box className="p-2">
            <TextField
              onChange={(e) => setModel({ ...model, userName: e.target.value })}
              variant="standard"
              label="Name"
            />
          </Box>
          <Box className="p-2">
            <TextField
              onChange={(e) => setModel({ ...model, email: e.target.value })}
              variant="standard"
              label="Email"
            />
          </Box>
          <Box className="p-2">
            <TextField
              onChange={(e) => setModel({ ...model, password: e.target.value })}
              variant="standard"
              label="Password"
            />
          </Box>
          <Box className="p-2">
            <Button onClick={createUser} variant="contained">
              Signup
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Signup;
