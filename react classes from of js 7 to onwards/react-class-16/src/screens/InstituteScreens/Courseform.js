import { Box } from "@mui/system";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Grid from "@mui/material/Grid";
import { fbGet, fbPost } from "../../config/firebasemethods";
import MySnackBarMessage from "../../components/ShowMessage";
import ScreenHeader from "../../components/screenheader";

function SMCoursefrom() {
  const [model, setModel] = useState({});
  const [barmsg, setBarmsg] = useState({});
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState();
  const save = (event) => {
    event.preventDefault();
    fbPost("CourseForm", model)
      .then(() => {
        console.log("Save SuccessFully !");
        setOpen(true);
        setBarmsg("Course Alllocated SuccessFully !");
        setSeverity("success");
      })
      .catch((err) => {
        console.log(err);
        setOpen(false);
        setBarmsg(err);
        setSeverity("error");
      });
  };

  return (
    <>
      <ScreenHeader title="Course Form" />
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

export default SMCoursefrom;
