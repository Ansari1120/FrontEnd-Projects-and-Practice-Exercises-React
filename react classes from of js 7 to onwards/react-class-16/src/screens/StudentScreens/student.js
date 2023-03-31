import React from "react";
import DashboardLayout from "../../components/dashboardLayout";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const Student = (props) => {
  const { checked } = props;
  const auth = getAuth();
  const [UserName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
      <DashboardLayout UserName={UserName} switching={checked} />{" "}
    </>
  );
};

export default Student;
