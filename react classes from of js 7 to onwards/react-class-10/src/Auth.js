import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import InputField from "./Non-Functional Components/InputField";

const Auth = () => {
  const [isSignup, setSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.value]: e.target.value,
    }));
    console.log(input);
  };
  return (
    <div>
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
            <InputField
              margin="normal"
              type={"text"}
              placeholder={"Name"}
              variant="outlined"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          )}
          <InputField
            margin="normal"
            name="email"
            type={"email"}
            placeholder={"Email"}
            variant="outlined"
            value={input.email}
            onChange={handleChange}
          />
          <InputField
            margin="normal"
            name="password"
            value={input.password}
            type={"password"}
            placeholder={"Password"}
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            sx={{ maringTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "Signup " : "Login"}
          </Button>
          <Button
            onClick={() => setSignup(!isSignup)}
            sx={{ maringTop: 3, borderRadius: 3 }}
          >
            {isSignup
              ? "Already Have an Account ! login Here "
              : "  No Account ! signup here"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
