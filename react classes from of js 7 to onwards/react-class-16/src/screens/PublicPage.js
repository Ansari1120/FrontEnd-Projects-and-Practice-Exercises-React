import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbCustomPost } from "../config/firebasemethods";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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

  // const reg = () => {
  //   navigation;
  // };
  return (
    <>
      <h1>Login Screens</h1>
      <button onClick={(e) => Nav(e.target.value)} value="std">
        Select student login
      </button>
      <button onClick={(e) => Nav(e.target.value)} value="Inst">
        select type Instituteloginsignup
      </button>
      <button onClick={(e) => Nav(e.target.value)} value="adm">
        select type Admin login
      </button>
      <button onClick={send}>Click here to to login </button>
      <h1>Public routes</h1>
      <button onClick={() => navigation("/studentRegistration")}>
        Registration Form
      </button>

      <h1>Find Results</h1>
      <InputGroup className="mb-3 mt-3">
        <Form.Control
          placeholder="Enter Roll Number"
          aria-label="Enter Roll Number"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </>
  );
}
