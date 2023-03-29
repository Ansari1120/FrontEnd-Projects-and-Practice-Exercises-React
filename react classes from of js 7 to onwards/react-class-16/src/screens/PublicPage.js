import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbCustomPost } from "../config/firebasemethods";

//swtiching between institute and student login signup wont work resolve it
export default function PublicPage() {
  const [model, setmodel] = useState({});
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

  return (
    <>
      <button onClick={(e) => Nav(e.target.value)} value="std">
        Select Type student login{" "}
      </button>
      <button onClick={(e) => Nav(e.target.value)} value="Inst">
        select type for Instituteloginsignup{" "}
      </button>
      <button onClick={send}>Click here to to login </button>
    </>
  );
}
