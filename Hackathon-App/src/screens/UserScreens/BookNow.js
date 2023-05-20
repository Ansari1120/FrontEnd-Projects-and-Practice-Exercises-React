import React, { useEffect, useState } from "react";
import MyIconbutton from "../../components/Iconbutton";
import { fbPost, userSignOut } from "../../config/firebasemethods";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ScreenHeader from "../../components/screenheader";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { getAuth } from "firebase/auth";

const BookNow = () => {
  const auth = getAuth();
  const navigation = useNavigate();
  const [model, setModel] = useState({});
  const [UserName, setUserName] = useState("");
  const [SingleCar, setSingleCar] = useState({});
  const location = useLocation();

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
  const SaveCartoBook = () => {
    fbPost("CartoBook", SingleCar)
      .then(() => {
        console.log("Save SuccessFully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setSingleCar({ ...SingleCar, UserName: UserName });
    setModel({
      ...model,
      UserName: UserName,
      Car: SingleCar.car,
      carImg: SingleCar.carImg,
      car_color: SingleCar.car_color,
      car_model: SingleCar.car_model,
      car_model_year: SingleCar.car_model_year,
      availability: SingleCar.availability,
      availableStatus: SingleCar.available,
    });
    console.log("username", model.UserName);
  }, [model.AllCarDetails]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else setUserName("");
    });
    setSingleCar(location.state);
  }, []);
  console.log(SingleCar);
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
                    })
                    .catch((err) => {
                      console.log(err);
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