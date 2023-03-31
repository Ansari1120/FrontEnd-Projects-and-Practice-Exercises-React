import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fbGet } from "../../config/firebasemethods";
import SMGrid from "../../components/SMGrid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StudentFormAndCridentials = () => {
  const [students, setStudents] = useState([]);
  const [loader, setloader] = useState(false);
  const navigation = useNavigate();

  // const pagegoestoCourseFrom = () => {
  //   navigation("/institute/StudentForm");
  // };

  const NavigateToSingleData = (id) => {
    navigation(`/institute/studentform/${id}`);
  };

  const col = [
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
    <div>
      <h1>
        Allocate Student email and passowrd + Associate Student with this
        Institute
      </h1>
      <SMGrid datasource={students} columns={col} isLoading={loader} />
      <Box className="my-2 d-flex justify-content-end"></Box>
    </div>
  );
};

export default StudentFormAndCridentials;
