import { getAuth } from "firebase/auth";
import React from "react";
import DashboardLayout from "../components/dashboardLayout";
import { useEffect, useState } from "react";


export default function Dashboard() {
 const auth = getAuth();
  const [UserName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName)
      } else setUserName("");
    });
  }, []);
  return (
    <div>
      <DashboardLayout  UserName = {UserName}/>{" "}
    </div>
  );
}
