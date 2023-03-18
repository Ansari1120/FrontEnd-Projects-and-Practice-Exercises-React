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
import { Usersignup } from "../config/firebasemethods";
import { UserLogin } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";
const UserLoginSignin = () => {
  const navigation = useNavigate();
  const [isSignup, setSignup] = useState(false);
  const [model, setModel] = useState({});

  let createUser = () => {
    console.log(model);
    Usersignup(model)
      .then((res) => {
        console.log(`User signed in in Successfully ! ${res}`);
        navigation("dashboard/*");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let Login = () => {
    UserLogin(model)
      .then((res) => {
        console.log(`User Logged in Successfully ! ${res}`);
        navigation("dashboard/*");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          // maringTop={5}
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
              onChange={(e) =>
                setModel({ ...model, userName: e.target.value })
              }
            />
          )}
          <TextField
            margin="normal"
            name="email"
            type={"email"}
            placeholder={"Email"}
            variant="outlined"
            required
            autoFocus
            autoComplete="given-name"
            onChange={(e) => setModel({ ...model, email: e.target.value })}
          />
          <TextField
            margin="normal"
            name="password"
            type={"password"}
            placeholder={"Password"}
            variant="outlined"
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
            onClick={isSignup ? () => createUser() : () => Login()}
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
        </Box>
      </form>
    </Container>
  );
};

export default UserLoginSignin;
