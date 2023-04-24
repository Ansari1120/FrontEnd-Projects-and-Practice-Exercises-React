import React, { useEffect, useState } from "react";
import { fbGet } from "../../config/firebasemethods";
import SMGrid from "../../components/SMGrid";
import { getAuth } from "firebase/auth";

const YourStats = () => {
  const auth = getAuth();
  const [UserName, setUserName] = useState("");
  const [stats, setStats] = useState([]);
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);
  const col = [
    {
      displayName: "User Name",
      key: "UserName",
      searchAble: true,
    },
    {
      displayName: "Roll Number",
      key: "RollNum",
      searchAble: true,
    },
    {
      displayName: "Percentage",
      key: "Percentage",
      searchAble: true,
    },
    {
      displayName: "Score",
      key: "Score",
      searchAble: true,
    },
    {
      displayName: "Status",
      key: "Status",
      searchAble: true,
    },
    {
      displayName: "Total marks",
      key: "Total_marks",
      searchAble: true,
    },
  ];

  const col1 = [
    {
      displayName: "Courses",
      key: "CourseName",
      searchAble: true,
    },
    {
      displayName: "Duration",
      key: "Duration",
      searchAble: true,
    },
    {
      displayName: "Fees",
      key: "Fee",
      searchAble: true,
    },
    {
      displayName: "Instructor Name",
      key: "teacher",
      searchAble: true,
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

  const getStats = () => {
    fbGet("Results")
      .then((res) => {
        setStats([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMoreDetails = () => {
    fbGet("CourseForm")
      .then((res) => {
        setCourses([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getit = data.filter((x) => x.userName === UserName);
  console.log("kas", getit);

  const getPersonCourse = courses.filter((elem) =>
    getit.map((ele) => ele.SelectCourse).includes(elem.CourseName)
  );

  console.log("course filtered", getPersonCourse);

  const getPersonStats = stats.filter((x) => x.UserName === UserName);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else setUserName("");
    });
    getData();
    getStats();
    getMoreDetails();
  }, []);

  return (
    <>
      <SMGrid
        datasource={getPersonStats}
        title="Your Entry Test(Quiz) Statistics"
        columns={col}
      />
      <SMGrid
        datasource={getPersonCourse}
        title="Your Program Statistics"
        columns={col1}
      />
    </>
  );
};

export default YourStats;
