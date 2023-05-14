import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { fbGet, fbPost } from "../../config/firebasemethods";

function Studentregistration() {
  const [model, setModel] = useState({});
  const [loader, setloader] = useState(false);
  const [displayObj, setdisplayObj] = useState({});
  const [Courses, setCourses] = useState([
    {
      RegistrationOpen: true,
    },
    {
      courseList: [
        { courseName: "TypeScript", id: "TS101" },
        { courseName: "MobileRepairing", id: "MR101" },
      ],
    },
  ]);

  let [RegStatus, setRegStatus] = useState({
    RegistrationOpen: true,
  });

  const col = [
    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <Button
          onClick={() =>
            setdisplayObj({
              ...displayObj,
              userName: e.userName,
              email: e.email,
              message: e.message,
            })
          }
          variant="contained"
        >
          View
        </Button>
      ),
      searchAble: true,
    },
    {
      key: "userName",
      displayName: "User",
      searchAble: true,
    },
    {
      key: "email",
      displayName: "E-mail",
      searchAble: true,
    },
    {
      key: "message",
      displayName: "Message",
      searchAble: true,
    },
  ];

  const save = (event) => {
    event.preventDefault();
    console.log("hasjdhas");
    fbPost("StudentRegistrationData", model)
      .then(() => {
        console.log("Save SuccessFully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(model);

  const getStatus = () => {
    setloader(true);
    fbGet("coursecontrol")
      .then((res) => {
        setloader(false);
        console.log("Firebase data", res);
        setRegStatus({ ...res, RegistrationOpen: res });
        // setCourses([...res]);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };

  useEffect(() => {
    getStatus();
  }, []);

  const courseName = Courses[1].courseList[0].courseName;
  console.log(courseName); // Output: "TypeScript"
  const courseName1 = Courses[1].courseList[1].courseName;
  console.log(courseName1); // Output: "mobile Repairing"

  console.log(Courses);
  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : RegStatus.RegistrationOpen[0] ? (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <h1>Student Registration Form</h1>
            <div className="row p-2">
              <div className="col-lg-6">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) =>
                    setModel({ ...model, SelectCity: e.target.value })
                  }
                >
                  <option>SelectCity</option>
                  <option value="karachi">karachi</option>
                  <option value="All Pakistan">All pakistan</option>
                </Form.Select>
              </div>
              <div className="col-lg-6">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) =>
                    setModel({ ...model, SelectCourse: e.target.value })
                  }
                >
                  <option>SelectCourse</option>
                  {/* <option value={checks}>{checks}</option> */}
                  <option
                    value={
                      model.SelectCity === "All Pakistan"
                        ? courseName1
                        : courseName
                    }
                  >
                    {model.SelectCity === "All Pakistan"
                      ? courseName1
                      : courseName}
                  </option>
                </Form.Select>
              </div>
            </div>

            <Form>
              <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter fullname"
                  onChange={(e) =>
                    setModel({ ...model, FullName: e.target.value })
                  }
                />

                <Form.Control
                  type="text"
                  placeholder="father name"
                  onChange={(e) =>
                    setModel({ ...model, FatherName: e.target.value })
                  }
                />

                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setModel({ ...model, Email: e.target.value })
                  }
                />

                <Form.Control
                  type="number"
                  placeholder="phone"
                  onChange={(e) =>
                    setModel({ ...model, PhoneNumber: e.target.value })
                  }
                />

                <Form.Control
                  type="number"
                  placeholder="CNIC"
                  onChange={(e) => setModel({ ...model, CNIC: e.target.value })}
                />

                <Form.Control
                  type="number"
                  placeholder="father CNIC"
                  onChange={(e) =>
                    setModel({ ...model, FatherCnic: e.target.value })
                  }
                />

                <Form.Control
                  type="date"
                  onChange={(e) => setModel({ ...model, date: e.target.value })}
                />

                <div className="row p-2">
                  <div className="col-lg-6">
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) =>
                        setModel({ ...model, SelecGender: e.target.value })
                      }
                    >
                      <option>SelectGender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>

              <div className="row p-2">
                <div className="col-lg-12">
                  <Form.Control
                    type="text"
                    placeholder="Addres"
                    onChange={(e) =>
                      setModel({ ...model, Address: e.target.value })
                    }
                  />
                </div>

                <div className="col-lg-12 p-2 ">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) =>
                      setModel({ ...model, LastQualification: e.target.value })
                    }
                  >
                    <option>Last Qualification</option>
                    <option value="matric">matric</option>
                    <option value="Intermidate">Intermidate</option>
                  </Form.Select>
                </div>

                <div
                  className="col-lg-12 p-2 "
                  onChange={(e) =>
                    setModel({ ...model, HaveLaptop: e.target.value })
                  }
                >
                  <Form.Select aria-label="Default select example">
                    <option>Do You Have Laptop</option>
                    <option value="yes">yes </option>
                    <option value="No">No</option>
                  </Form.Select>
                </div>

                <div className="col-lg-12 p-2 ">
                  <Form.Control
                    type="file"
                    placeholder="file"
                    onChange={(e) =>
                      setModel({ ...model, fileUpload: e.target.value })
                    }
                  />
                </div>
              </div>

              <Button onClick={save} variant="contained" type="submit">
                Submit
              </Button>
            </Form>
          </Box>
        </>
      ) : (
        <div>Form Closed !</div>
      )}
    </>
  );
}

export default Studentregistration;
