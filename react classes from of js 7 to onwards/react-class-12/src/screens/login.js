import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { loginUser } from "../config/firebasemethods";

function Login() {
  const [model, setModel] = useState({});

  let signIn = () => {
    loginUser(model)
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
          <Typography variant="h3">Login</Typography>
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
            <Button onClick={signIn} variant="contained">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Login;
