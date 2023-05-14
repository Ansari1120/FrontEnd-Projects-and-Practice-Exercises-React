import React, { useEffect, useState } from "react";
import MyIconbutton from "../../components/Iconbutton";
import { fbPost, userSignOut } from "../../config/firebasemethods";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ScreenHeader from "../../components/screenheader";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { getAuth } from "firebase/auth";

const BookNow = () => {
  const auth = getAuth();
  const navigation = useNavigate();
  const [model, setModel] = useState({});
  const [UserName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else setUserName("");
    });
  }, []);
  const save = (event) => {
    event.preventDefault();

    fbPost("UserRequirments", model)
      .then(() => {
        console.log("Save SuccessFully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // let / = () => {
  //   let randomNumber = Math.floor(Math.random() * 1000) + 1;

  //   // generate a random string of three uppercase letters
  //   let randomLetters = "";
  //   for (let i = 0; i < 3; i++) {
  //     randomLetters += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  //   }

  //   // combine the random number and letters to create the UserIdGenerator
  //   let rollNumber = randomLetters + randomNumber;
  //   // setRollNum(rollNumber);
  //   // output the UserIdGenerator to the console
  //   console.log("Your UserIdGenerator is: " + rollNumber);
  //   setModel({ ...model, UserId: rollNumber });
  // };
  useEffect(() => {
    setModel({ ...model, UserName: UserName });
    console.log("username", model.UserName);
  }, [model.AllCarDetails]);
  return (
    <>
      <ScreenHeader
        title="Book Now"
        buttonsList={[
          {
            displayField: (
              <MyIconbutton
                onClick={() =>
                  userSignOut()
                    .then(() => {
                      navigation("/");
                      //   msgopen(true);
                      //   setRes("Logged Out Successfully !");
                      //   setCondition("success");
                    })
                    .catch((err) => {
                      console.log(err);
                      //   msgopen(true);
                      //   setRes(err);
                      //   setCondition("error");
                    })
                }
                val={<ExitToAppIcon />}
                variant="contained"
              />
            ),
          },
        ]}
      />

      <Box sx={{ flexGrow: 1 }}>
        <h1>User Car Booking Form</h1>

        <Form>
          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Label>Car Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="All Car Details"
              onChange={(e) =>
                setModel({ ...model, AllCarDetails: e.target.value })
              }
            />
            <Form.Label>Starting location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Starting location"
              onChange={(e) =>
                setModel({ ...model, Startinglocation: e.target.value })
              }
            />
            <Form.Label>Ending location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ending location"
              onChange={(e) =>
                setModel({ ...model, Endinglocation: e.target.value })
              }
            />

            <Form.Label>Cancelation Policy</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cancelation Policy"
              onChange={(e) =>
                setModel({ ...model, CancelationPolicy: e.target.value })
              }
            />

            <Form.Label>Date of Booking</Form.Label>

            <Form.Control
              type="date"
              onChange={(e) =>
                setModel({ ...model, DateofBooking: e.target.value })
              }
            />
          </Form.Group>
          <Form.Label>Rent booking Start Time</Form.Label>

          <div className="row p-2">
            <div className="col-lg-12">
              <Form.Control
                type="text"
                placeholder="Rent booking Start Time
                "
                onChange={(e) =>
                  setModel({ ...model, RentbookingStartTime: e.target.value })
                }
              />
            </div>
            <Form.Label>Rent booking Ending Time</Form.Label>

            <div className="col-lg-12">
              <Form.Control
                type="text"
                placeholder="Rent booking Ending Time
                "
                onChange={(e) =>
                  setModel({ ...model, RentbookingEndingTime: e.target.value })
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
  );
};

export default BookNow;
