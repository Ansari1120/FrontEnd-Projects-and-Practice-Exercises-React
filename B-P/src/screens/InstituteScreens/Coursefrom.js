import { Box } from '@mui/system';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { fbPost } from '../../config/firebasemethods';

function SMCoursefrom() {
    const [open, setOpen] = useState(false);
  const [msgopen, setmsgOpen] = useState(false);
  const [model, setModel] = useState({});
  const [loader, setloader] = useState(false);
  const [listData, setlistData] = useState([]);
  const [displayObj, setdisplayObj] = useState({});
  const [res, setRes] = useState();
  const [condition, setCondition] = useState("");


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
    event.preventDefault()
    console.log("hasjdhas")
    fbPost("CourseForm", model)
    .then((res) => {
        console.log("Save SuccessFully !");
        
      })
      .catch((err) => {
        console.log(err);
       
      });


  }


  let saveFeed = (event) => {
    event.preventDefault()
    setloader(true);
    fbPost("CourseForm", model)
      .then(() => {
        console.log("Save SuccessFully !");
        setOpen(false);
        setmsgOpen(true);
        setloader(false);
        setCondition("success");
        setRes("Save SuccessFully !");
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        setOpen(true);
        setRes(err);
        setmsgOpen(true);
        setCondition("error");
        setRes(res);
      });
  };


  let showData = () => {
    fbGet("CourseForm")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setlistData([...res]);
        setOpen(false);
        setloader(false);
        setmsgOpen(false);
        setRes("Data Fetched Successfully");
        setCondition("success");
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
        setRes(err);
        setmsgOpen(true);
        setCondition("error");
      });
    console.log(displayObj.userName);
  };




    const [value, setValue] = useState([1, 3]);




    const handleChange = (val) => setValue(val);
    return (
        <Box sx={{ flexGrow: 1 }} >

            <Grid container spacing={3}>

            </Grid>


            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={(e) =>
                    setModel({ ...model, CourseName: e.target.value })
                  } />

                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="number" placeholder="Enter email" onChange={(e) =>
                    setModel({ ...model, Duration: e.target.value })
                  } />

                    <Form.Label>fee</Form.Label>
                    <Form.Control type="number" placeholder="Enter email" onChange={(e) =>
                    setModel({ ...model, fee: e.target.value })
                  } />
                    <Form.Label>teacher</Form.Label>
                    <Form.Control type="text" placeholder="teacher" onChange={(e) =>
                    setModel({ ...model, teacher: e.target.value })
                  } />
                </Form.Group>




                <Button onClick={save} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Box>
    );
}

export default SMCoursefrom;