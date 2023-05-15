import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/adminLayout";
import { getAuth } from "firebase/auth";

const Admin = () => {
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
      <AdminLayout UserName={UserName} />
    </>
  );
};

export default Admin;





