import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fbGet } from "../../config/firebasemethods";
import SMGrid from "../../components/SMGrid";
import { useNavigate } from "react-router-dom";
const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [loader, setloader] = useState(false);
  const [displayObj, setdisplayObj] = useState();
  const navigation = useNavigate();
  const NavigateToSingleData = (id) => {
    navigation(`/SingleDetail/${id}`);
  };
  const col = [
    ,
    {
      key: "FullName",
      displayName: "Student Name",
      searchAble: true,
    },
    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <Button onClick={() => NavigateToSingleData(e.id)} variant="contained">
          View Details
        </Button>
      ),
      searchAble: true,
    },
  ];

  const getStudents = () => {
    setloader(true);
    fbGet("StudentRegistrationData")
      .then((res) => {
        setStudents([...res]);
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };

  console.log(students);
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <>
      <h1>Students Details</h1>
      <label>(To see Each student's Detail Tap on its view Button !)</label>
      <SMGrid datasource={students} columns={col} isLoading={loader} />
    </>
  );
};

export default StudentDetails;
