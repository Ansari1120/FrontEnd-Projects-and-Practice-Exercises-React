import {
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  Checkbox,
  Container,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { fbGet, Usersignup } from "../config/firebasemethods";
import { UserLogin } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/Button";
import MySnackBarMessage from "../components/ShowMessage";
import { FormControl } from "react-bootstrap";

const UserLoginSignin = () => {
  const navigation = useNavigate();
  const [isSignup, setSignup] = useState(false);
  const [model, setModel] = useState({});
  const [loader, setloader] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [err, setErr] = useState();
  const [mytype, setType] = useState({
    myconsumetype: "Inst",
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  let createUser = () => {
    console.log(model);
    setloader(true);
    Usersignup(
      model,
      mytype.myconsumetype === "Transporters" ? "Transporters" : ""
    )
      .then((res) => {
        console.log(`User signed in in Successfully ! ${res}`);
        if (mytype.myconsumetype === "Transporters") {
          navigation("/admin/*");
        } else {
          navigation("/BookNow");
        }
        setloader(false);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        setOpen(true);
        setErr(err);
      });
  };

  let Login = () => {
    setloader(true);
    UserLogin(
      model,
      mytype.myconsumetype === "Transporters" ? "Transporters" : ""
    )
      .then((res) => {
        console.log(`User Logged in Successfully ! ${res}`);
        if (mytype.myconsumetype === "Transporters") {
          navigation("/admin/*");
        } else {
          navigation("/BookNow");
        }
        setloader(false);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        setOpen(true);
        setErr(err);
      });
  };

  // const getStatus = () => {
  //   setloader(true);
  //   fbGet("myconsumetype")
  //     .then((res) => {
  //       setloader(false);
  //       console.log("Firebase data", res);
  //       setType({ ...res, myconsumetype: res });
  //       console.log("recieved type : ", res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setloader(false);
  //     });
  // };

  // useEffect(() => {
  //   getStatus();
  // }, []);
  console.log(mytype.myconsumetype);
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
              onChange={(e) => setModel({ ...model, userName: e.target.value })}
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
          {isSignup ? (
            <>
              <InputLabel id="demo-simple-select-label">
                Select Login Type
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mytype.myconsumetype}
                label="Select Login Type"
                onChange={(e) =>
                  setType({ ...mytype, myconsumetype: e.target.value })
                }
              >
                <MenuItem value={"User"}>User</MenuItem>
                <MenuItem value={"Transporters"}>Transporters</MenuItem>
              </Select>
            </>
          ) : (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mytype.myconsumetype}
              label="Select Login Type"
              onChange={(e) =>
                setType({ ...mytype, myconsumetype: e.target.value })
              }
            >
              <MenuItem value={"User"}>User</MenuItem>
              <MenuItem value={"Transporters"}>Transporters</MenuItem>
            </Select>
          )}
          <MyButton
            sx={{ maringTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            onClick={isSignup ? () => createUser() : () => Login()}
            label={isSignup ? "Signup" : "Login"}
            loading={loader}
          />

          <MyButton
            onClick={() => setSignup(!isSignup)}
            sx={{ maringTop: 3, borderRadius: 3 }}
            label={
              isSignup
                ? "Already Have an Account ! login Here "
                : "  No Account ! signup here"
            }
          />

          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>

          <MySnackBarMessage
            variant="outlined"
            open={open}
            severity="error"
            onClose={handleClose}
            label={err}
          />
        </Box>
      </form>
    </Container>
  );
};

export default UserLoginSignin;
