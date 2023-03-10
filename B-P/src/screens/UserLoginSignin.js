import {
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  Checkbox,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { userSignup } from "../config/firebasemethods";
import { userLogin } from "../config/firebasemethods";
import { useNavigate, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";

const UserLoginSignin = () => {
  const navigate = useNavigate();
  const [isSignup, setSignup] = useState(false);
  const [model, setModel] = useState({});

  // const [input, setInput] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  // });

  let createUser = () => {
    console.log(model);
    userSignup(model)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let loginUser = () => {
    userLogin(model)
      .then((res) => {
        console.log(`User Logged in Successfully ! ${res}`);
        navigate(`dashboard`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleChange = (e) => {
  //   setInput((prevState) => ({
  //     ...prevState,
  //     [e.target.value]: e.target.value,
  //   }));
  //   console.log(input);
  // };
  return (
    <Container maxWidth="xs">
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          maringTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px  5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" textAlign={"center"} padding="3">
            {isSignup ? "SignUp" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              margin="normal"
              autoComplete="given-name"
              type={"text"}
              placeholder={"Name"}
              variant="outlined"
              name="name"
              required
              // fullWidth
              autoFocus
              // value={input.name}
              // onChange={handleChange}
              onChange={(e) => setModel({ ...model, userName: e.target.value })}
            />
          )}
          <TextField
            margin="normal"
            name="email"
            type={"email"}
            placeholder={"Email"}
            variant="outlined"
            // onChange={handleChange}
            required
            autoFocus
            autoComplete="given-name"
            onChange={(e) => setModel({ ...model, email: e.target.value })}
          />
          <TextField
            margin="normal"
            name="password"
            // value={input.password}
            type={"password"}
            placeholder={"Password"}
            variant="outlined"
            // onChange={handleChange}
            onChange={(e) => setModel({ ...model, password: e.target.value })}
          />
          {!isSignup && (
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          )}
          <Button
            sx={{ maringTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            onClick={isSignup ? ()=>createUser() : ()=>loginUser()}
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => setSignup(!isSignup)}
            sx={{ maringTop: 3, borderRadius: 3 }}
          >
            {isSignup
              ? "Already Have an Account ! login Here "
              : "  No Account ! signup here"}
          </Button>
          {!isSignup ? (
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          ) : null}
          <Box>
            <Routes>
              <Route path="dashboard/*" element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default UserLoginSignin;
