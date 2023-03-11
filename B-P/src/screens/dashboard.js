import React from "react";
import DashboardLayout from "../components/dashboardLayout";

export default function Dashboard(props) {
  const {UserName} = props;
  return (
    <div>
      <DashboardLayout  UserName = {UserName}/>{" "}
    </div>
  );
}
