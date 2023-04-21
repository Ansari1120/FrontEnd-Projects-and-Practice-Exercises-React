import React, { useEffect, useState } from "react";
import { fbGet } from "../../config/firebasemethods";
import { getAuth } from "firebase/auth";
import MyStack from "../../components/Stack";
import { Typography } from "@mui/material";

const StudentDetails = () => {
  const auth = getAuth();
  const [data, setData] = useState([]);
  const [UserName, setUserName] = useState("");
  const col = [
    {
      displayName: "Your Name",
      key: "FullName",
    },
    {
      displayName: "Your Father Name",
      key: "FatherName",
    },
    {
      displayName: "E-mail",
      key: "email",
    },
    {
      displayName: "Your City",
      key: "SelectCity",
    },
    {
      displayName: "Date Of Birth",
      key: "date",
    },
    {
      displayName: "Your Phone Number",
      key: "PhoneNumber",
    },
    {
      displayName: "Gender",
      key: "SelectGender",
    },
    {
      displayName: "Qualification",
      key: "LastQualification",
    },
    {
      displayName: "Your CNIC",
      key: "CNIC",
    },
    {
      displayName: "Father's CNIC",
      key: "FatherCnic",
    },
    {
      displayName: "Home Address",
      key: "Address",
    },
    {
      displayName: "User Name",
      key: "userName",
    },
    {
      displayName: "Home Address",
      key: "Address",
    },
    {
      displayName: "Student Portal Password",
      key: "password",
    },
  ];

  const getData = () => {
    fbGet("InstituteStudentData")
      .then((res) => {
        setData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CurrentStudent = data.filter((x) => x.userName === UserName);
  console.log("CurrentStudent : ", CurrentStudent, " of userName ", UserName);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else setUserName("");
    });

    getData();
  }, []);
  return (
    <>
      <Typography variant="h5" color="black">
        Your Personal And Instiutes Associated Details
      </Typography>
      {CurrentStudent.map((x, i) => {
        return (
          <>
            <img key={i} src={x.fileUpload} alt={"profile"} />
            <MyStack title="Name" data={x.FullName} />
            <MyStack title="Father Name" data={x.FatherName} />
            <MyStack title="User Name" data={x.userName} />
            <MyStack title="Course" data={x.SelectCourse} />
            <MyStack title="E-mail" data={x.Email} />
            <MyStack title="City" data={x.SelectCity} />
            <MyStack title="CNIC" data={x.CNIC} />
            <MyStack title="Father's CNIC" data={x.FatherCnic} />
            <MyStack title="Date Of Birth" data={x.date} />
            <MyStack title="Gender" data={x.SelecGender} />
            <MyStack title="Last Qualification" data={x.LastQualification} />
            <MyStack title="Have Laptop" data={x.HaveLaptop} />
            <MyStack title="Portal Password" data={x.password} />
          </>
        );
      })}
    </>
  );
};

export default StudentDetails;
