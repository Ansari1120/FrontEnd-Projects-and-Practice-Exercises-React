import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fbGet } from "../../config/firebasemethods";
import SMGrid from "../../components/SMGrid";
import { useNavigate } from "react-router-dom";
import StudentForm from "./StudentForm";

const StudentDetails = () => {
  const [listData, setlistData] = useState([]);
  const [loader, setloader] = useState(false);
  const [displayObj, setdisplayObj] = useState();
  const navigation = useNavigate();
  const [myData, setMyData] = useState({});

  const [barmsg, setBarmsg] = useState({});
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState();
  const [msgopen, setmsgOpen] = useState(false);
  const [res, setRes] = useState();
  const [condition, setCondition] = useState("");
  const [cridentials, setCridentials] = useState({});

  const col = [
    {
      key: "FullName",
      displayName: "Name",
      searchAble: true,
    },
    {
      key: "FatherName",
      displayName: "Father Name",
      searchAble: true,
    },
    {
      key: "Email",
      displayName: "Account Email",
      searchAble: true,
    },
    {
      key: "CNIC",
      displayName: "CNIC",
      searchAble: true,
    },
    {
      key: "HaveLaptop",
      displayName: "HaveLaptop",
      searchAble: true,
    },
    {
      key: "LastQualification",
      displayName: "LastQualification",
      searchAble: true,
    },
    {
      key: "PhoneNumber",
      displayName: "PhoneNumber",
      searchAble: true,
    },
    {
      key: "SelecGender",
      displayName: "SelecGender",
      searchAble: true,
    },
    {
      key: "SelectCity",
      displayName: "City",
      searchAble: true,
    },
    {
      key: "SelectCourse",
      displayName: "Course",
      searchAble: true,
    },
    {
      key: "date",
      displayName: "Date of Birth",
      searchAble: true,
    },
    {
      key: "userName",
      displayName: "Account UserName",
      searchAble: true,
    },
    {
      key: "password",
      displayName: "Account Password",
      searchAble: true,
    },
    {
      key: "institute",
      displayName: "Institute",
      searchAble: true,
    },
  ];
  // const NavigateToSingleData = (id) => {
  //   navigation(`/institute/SingleDetail/${id}`);
  // };

  let showData = () => {
    fbGet("InstituteStudentData")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setlistData([...res]);
        console.log("user Cridentials", cridentials);
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
  };
  useEffect(() => {
    showData();
  }, []);
  return (
    <>
      <h1>Intitute's Students</h1>
      <label>
        NOTE: This are the those Students whom officially admitted into the
        institute in thier respective Course
      </label>
      <SMGrid datasource={listData} columns={col} isLoading={loader} />
    </>
  );
};

export default StudentDetails;
