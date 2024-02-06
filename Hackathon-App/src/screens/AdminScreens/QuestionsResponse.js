import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { fbGet, fbPost } from "../../config/firebasemethods";

const QuestionsResponse = () => {
  const [userprompt, setPrompt] = useState({});
  const [dataget, setdataget] = useState([]);
  const params = useParams();

  console.log(params);
  const sentPrompt = (e) => {
    e.preventDefault();
    fbPost("IslamicAnswer", userprompt)
      .then(() => {
        console.log("data sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getdata = () => {
    fbGet("userQuestions")
      .then((res) => {
        console.log(res);
        setdataget([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      {/* <div>Question : {collectdata.question}</div> */}

      {dataget.map((x, i) => (
        <div>{x.question} </div>
      ))}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Answer Question</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Question"
            // value={userprompt.answer}
            onChange={(e) => {
              setPrompt({ ...userprompt, answer: e.target.value });
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

export default QuestionsResponse;
