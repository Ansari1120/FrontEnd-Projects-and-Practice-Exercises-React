import React, { useEffect, useState } from "react";
// import Studentregistration from "../StudentRegistrationScreen/studentregistration";
import Switch from "@mui/material/Switch";
import { fbCustomPost, fbGet } from "../../config/firebasemethods";

function Registration() {
  const [model, setmodel] = useState({});

  const save = () => {
    model.courseList = [
      { courseName: "TypeScript", id: "TS101" },
      { courseName: "MobileRepairing", id: "MR101" },
    ];
    fbCustomPost("coursecontrol", model)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const getDt = () => {
    fbGet("coursecontrol")
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
      <h1>Registration Control </h1>
      <div>
        <div>
          <Switch
            label="Course Open"
            defaultChecked
            onChange={(e) =>
              setmodel({ ...model, RegistrationOpen: e.target.checked })
            }
          />
        </div>
        <div>
          <button onClick={save}>Course Open</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
