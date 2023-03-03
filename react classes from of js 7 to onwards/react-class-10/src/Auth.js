import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Auth = () => {
  const [isSignup, setSignup] = useState(false);
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
            <TextField
              margin="normal"
              type={"text"}
              placeholder={"Name"}
              variant="outlined"
            />
          )}
          <TextField
            margin="normal"
            type={"email"}
            placeholder={"Email"}
            variant="outlined"
          />
          <TextField
            margin="normal"
            type={"password"}
            placeholder={"Password"}
            variant="outlined"
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
