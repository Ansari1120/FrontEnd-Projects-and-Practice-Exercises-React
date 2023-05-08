import React, { useEffect, useState } from "react";
import { fbGet } from "../../config/firebasemethods";
import { getAuth } from "firebase/auth";
import MyStack from "../../components/Stack";
import { Typography } from "@mui/material";

const StudentDetails = () => {
  const auth = getAuth();
  const [data, setData] = useState([]);
  const [UserName, setUserName] = useState("");

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
            <MyStack title="E-mail" data={x.email} />
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
