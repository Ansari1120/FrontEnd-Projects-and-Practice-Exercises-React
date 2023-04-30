import React, { useState } from "react";
import { loginUser } from "../Config/firebasemethod";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import SMButton from "../Compoments/SMButton";

function Signup() {
  const [modal, setModal] = useState({});
  const [loading, setLoading] = useState(false);

  let ValueSentFirebase = (e) => {
    setLoading(true);
    loginUser(modal)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <Box
        className="d-flex justify-content-center align-item-center flex-column "
        style={{ height: 550 }}
      >
        <Box className="my-3">
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            onChange={(e) => setModal({ ...modal, username: e.target.value })}
          />
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            label="Emial"
            variant="outlined"
            onChange={(e) => setModal({ ...modal, email: e.target.value })}
          />
        </Box>

        <Box className="my-3">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setModal({ ...modal, password: e.target.value })}
          />
        </Box>

        <Box>
          <Button
            variant="primary"
            style={{ width: "10vw" }}
            onClick={ValueSentFirebase}
          >
            Log in
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Signup;
