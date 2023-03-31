import React, { useEffect, useState } from "react";
// import Studentregistration from "../StudentRegistrationScreen/studentregistration";
import Switch from "@mui/material/Switch";
import { fbCustomPost, fbGet } from "../../config/firebasemethods";

const QuizControl = () => {
  const [model, setmodel] = useState({});

  const save = () => {
    fbCustomPost("quizcontrol", model)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const getDt = () => {
    fbGet("quizcontrol")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDt();
  }, []);

  return (
    <div>
      <h1>Quiz Control (open or close quiz for Intitute's students)</h1>
      <div>
        <div>
          <Switch
            label="Quiz Open"
            defaultChecked
            onChange={(e) => setmodel({ ...model, QuizOpen: e.target.checked })}
          />
        </div>
        <div>
          <button onClick={save}>Quiz Open</button>
        </div>
      </div>
    </div>
  );
};

export default QuizControl;
