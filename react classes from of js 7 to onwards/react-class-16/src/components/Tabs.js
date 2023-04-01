import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { fbCustomPost } from "../config/firebasemethods";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Studentregistration from "../screens/StudentScreens/StudentRegistration";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MyTabs() {
  const [value, setValue] = React.useState(0);
  const [model, setmodel] = React.useState({});
  const navigation = useNavigate();
  const Nav = (myval) => {
    console.log(myval);
    setmodel({ ...model, mytype: myval });
  };

  const send = () => {
    fbCustomPost("myconsumetype", model)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
    navigation("/userloginsignup");
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Registration Form" {...a11yProps(0)} />
          <Tab label="Login Screens" {...a11yProps(1)} />
          <Tab label="Result" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Studentregistration />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <button onClick={(e) => Nav(e.target.value)} value="std">
          Select student login
        </button>
        <button onClick={(e) => Nav(e.target.value)} value="Inst">
          select type Instituteloginsignup
        </button>
        <button onClick={(e) => Nav(e.target.value)} value="adm">
          select type Admin login
        </button>
        <button onClick={send}>click to login</button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InputGroup className="mb-3 mt-3">
          <Form.Control
            placeholder="Enter Roll Number"
            aria-label="Enter Roll Number"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </TabPanel>
    </Box>
  );
}

//continue from refining login screens ui
//add quiz (add new questions and render them in student's quiz)
