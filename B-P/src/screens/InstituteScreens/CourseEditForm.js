import React, { useEffect, useState } from "react";
import { fbPost } from "../../config/firebasemethods";
import { Form, useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MyInput from "../../components/Input";
import ScreenHeader from "../../components/screenheader";
import MyButton from "../../components/Button";
import SaveIcon from "@mui/icons-material/Save";
import MySnackBarMessage from "../../components/ShowMessage";
import { Button } from "react-bootstrap";

function CourseEditForm() {
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(false);
  const [barmsg, setBarmsg] = useState({});
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState();
//   const location = useLocation();
//   console.log(location);
  //   console.log(Data.id);

  const save = () => {
    setLoading(true);
    fbPost("CourseForm", model, model.id)
      .then(() => {
        setLoading(false);
        console.log("Data Updated SuccessFully !");
        setOpen(true);
        setBarmsg("Data Updated SuccessFully !");
        setSeverity("success");
      })
      .catch((err) => {
        console.log(err);
        setOpen(false);
        setBarmsg(err);
        setSeverity("error");
      });
  };
//   useEffect(() => {
//     setModel(location.state);
//   }, []);
  return (
    <>
      <ScreenHeader
        title="Course Edit Form"
        buttonsList={[
          {
            displayField: (
              <MyButton
                label="Save"
                onClick={save}
                startIcon={<SaveIcon />}
                loading={loading}
                variant="contained"
              />
            ),
          },
        ]}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}></Grid>
        <Form>
          <Form.Group className="mt-5 mb-3" controlId="formBasicEmail">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course to Allocate"
              onChange={(e) =>
                setModel({ ...model, CourseName: e.target.value })
              }
            />

            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="number"
              placeholder="Course Credit hours"
              onChange={(e) => setModel({ ...model, Duration: e.target.value })}
            />

            <Form.Label>fee</Form.Label>
            <Form.Control
              type="number"
              placeholder="Course Fee"
              onChange={(e) => setModel({ ...model, fee: e.target.value })}
            />
            <Form.Label>teacher</Form.Label>
            <Form.Control
              type="text"
              placeholder="Teacher Name"
              onChange={(e) => setModel({ ...model, teacher: e.target.value })}
            />
          </Form.Group>

          <Button onClick={save} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <MySnackBarMessage
          open={open}
          label={barmsg}
          severity={severity}
          vairant="contained"
        />
      </Box>
    </>
  );
}

export default CourseEditForm;
