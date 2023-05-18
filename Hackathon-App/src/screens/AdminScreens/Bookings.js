import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ScreenHeader from "../../components/screenheader";
import DeleteIcon from "@mui/icons-material/Delete";
import MyIconbutton from "../../components/Iconbutton";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { fbDelete, fbGet, fbPost } from "../../config/firebasemethods";
import MySwitch from "../../components/Switch";

const Bookings = () => {
  const [BookingList, setBookingList] = useState([]);
  const [singleObj, setSingleObj] = useState({});

  const [Cridentials, setCridentitals] = useState([]);
  const navigate = useNavigate();

  let openDetail = (obj) => {
    navigate("/admin/SingleInstitute", { state: obj });
  };

  let openEdit = (obj) => {
    navigate("/admin/AddCars", { state: obj });
  };

  let openForm = (obj) => {
    navigate("/admin/BookingForm", { state: obj });
  };

  let DeleteItem = (obj) => {
    console.log(obj);
    fbDelete("UserRequirments", obj.id)
      .then(() => {
        console.log("data Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getCridentitals = () => {
    fbGet("institute")
      .then((res) => {
        setCridentitals([...res]);
        console.log("inst cridentials", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let DeleteCridentials = (obj) => {
    //run a map on BookingList and match cridentials instname and instiutelist instname when matched delete cridentitals instname's id
    const obj1 = Cridentials.filter((x) => {
      return x.password === obj.password;
    });
    console.log("matched obj : ", obj1[0].id);
    fbDelete("institute", obj1[0].id)
      .then(() => {
        console.log("cridentials Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const save = () => {
    fbGet("UserRequirments")
      .then((res) => {
        console.log("Data retrieved SuccessFully !");
        setBookingList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sent = (x) => {
    fbPost("AvailableCars", x, x.id)
      .then(() => {
        console.log(
          "data sent Successfully ! new cars list should be with active_inActive",
          x
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Below useEffects are applied for different purposes and for different scenarios instead of using one useEffect
  useEffect(() => {
    save();
  }, []);
  console.log("List : ", BookingList);

  const handleActiveInactiveToggle = (index) => {
    const updatedBookingList = BookingList.map((inst, i) =>
      i === index ? { ...inst, available: !inst.available } : inst
    );
    setBookingList(updatedBookingList);
  };
  return (
    <>
      <ScreenHeader title="BookingList List" />
      <Box className="d-flex row mt-4 justify-content-between p-3 align-items-center">
        {BookingList && Array.isArray(BookingList) && BookingList.length > 0
          ? BookingList.map((x, i) => (
              <Paper
                key={i}
                className="p-2 my-2 border"
                onClick={() => openForm(x)}
              >
                <Grid container>
                  <Grid item md={2}>
                    <Box className="m-2 p-2 text-center">
                      <img
                        src={x.carImg}
                        alt={x.car}
                        width={100}
                        height={100}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={2} variant="h5">
                    <Box className="mt-4 p-2">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="fw-bold text-muted"
                      >
                        Car Name
                      </Typography>
                      <Typography>{x.Car}</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={2} variant="h5">
                    <Box className="mt-4 p-2">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="fw-bold text-muted"
                      >
                        Car Model
                      </Typography>
                      <Typography>{x.car_model}</Typography>
                    </Box>
                  </Grid>

                  <Grid item md={2}>
                    <Box className="mt-4  align-middle p-2">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="fw-bold text-muted"
                      >
                        Availibility / NotAvailable
                      </Typography>

                      <Typography>
                        <FiberManualRecordIcon
                          color={x.available ? "error" : ""}
                        />
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={2}>
                    <Box className="mt-4 align-middle p-2">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="fw-bold text-muted"
                      >
                        Toggle Availibility Activation
                      </Typography>

                      <MySwitch
                        checked={BookingList.availibility}
                        handleChangeonClick={(e) => {
                          e.stopPropagation();
                          handleActiveInactiveToggle(i);
                          sent(x);
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={1}>
                    <Box className="mt-4">
                      <MyIconbutton
                        val={<DeleteIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          DeleteItem(x);
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={1}>
                    <Box className="mt-4">
                      <MyIconbutton
                        val={<EditIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          openEdit(x);
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            ))
          : null}
      </Box>
    </>
  );
};

export default Bookings;
