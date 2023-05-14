import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { fbGet } from "../../config/firebasemethods";

const Profile = () => {
  const auth = getAuth();
  const [UserName, setUserName] = useState("");
  const [BookingData, setBookingData] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else setUserName("");
    });
  }, []);

  const getBookingStatus = () => {
    fbGet("UserRequirments")
      .then((res) => {
        setBookingData([...res]);
        console.log("data get sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Filter = () => {
    const filteredUser = BookingData.map((x) => x.UserName === UserName);
    setBookingData([...filteredUser]);
    console.log("After", BookingData);
  };
  useEffect(() => {
    console.log("Before", BookingData);
    getBookingStatus();
    Filter();
  }, []);
  return <></>;
};

export default Profile;
