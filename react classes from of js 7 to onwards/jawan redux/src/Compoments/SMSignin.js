import React, { useState } from "react";
import { loginUser, signUpUser } from "../Config/firebasemethod";

function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let SignIn = (e) => {
    signUpUser(email, pass)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <input placeholder="enter" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="enter" onChange={(e) => setPass(e.target.value)} />
      <button onClick={SignIn}>SignIn</button>
    </div>
  );
}

export default Signup;
