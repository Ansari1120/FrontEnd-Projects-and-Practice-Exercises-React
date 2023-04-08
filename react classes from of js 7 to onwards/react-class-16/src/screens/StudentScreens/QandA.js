import React, { useEffect, useState } from "react";
import { fbGet, fbPost } from "../../config/firebasemethods";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SMGrid from "../../components/SMGrid";

const QandA = () => {
  const [userprompt, setPrompt] = useState({});

  const sentPrompt = (e) => {
    e.preventDefault();
    fbPost("userQuestions", userprompt)
      .then(() => {
        console.log("data sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {" "}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ask Questions</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Question"
            value={userprompt.question}
            onChange={(e) => {
              setPrompt({ ...userprompt, question: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={sentPrompt}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default QandA;
