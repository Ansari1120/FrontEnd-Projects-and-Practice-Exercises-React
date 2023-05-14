import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { fbGet, userSignOut } from "../../config/firebasemethods";
import ScreenHeader from "../../components/screenheader";
import SMGrid from "../../components/SMGrid";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MyIconbutton from "../../components/Iconbutton";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const auth = getAuth();
  const navigation = useNavigate();
  const [UserName, setUserName] = useState("");
  const [BookingData, setBookingData] = useState([]);
  const [userDetails, setuserDetails] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
      } else setUserName("");
    });
  }, []);
  let columns = [
    {
      displayName: "All Car Details",
      key: "AllCarDetails",
      searchAble: true,
    },
    {
      displayName: "Date of Booking",
      key: "DateofBooking",
      searchAble: true,
    },
    {
      displayName: "Cancelation Policy",
      key: "CancelationPolicy",
      searchAble: true,
    },
    {
      displayName: "Starting location",
      key: "Startinglocation",
      searchAble: true,
    },
    {
      displayName: "Ending location",
      key: "Endinglocation",
      searchAble: true,
    },

    {
      displayName: "Cancelation Policy",
      key: "CancelationPolicy",
      searchAble: true,
    },
  ];

  let columns2 = [
    {
      displayName: "UserName",
      key: "userName",
      searchAble: true,
    },
    {
      displayName: "E-mail",
      key: "email",
      searchAble: true,
    },
    {
      displayName: "Password",
      key: "password",
      searchAble: true,
    },
    {
      displayName: "Contact Number",
      key: "ContactNumber",
      searchAble: true,
    },
  ];

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

  const getUserDetails = () => {
    fbGet("users")
      .then((res) => {
        setuserDetails([...res]);
        console.log("data get sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBookingStatus();
    getUserDetails();
  }, []);
  const filteredUser = BookingData.filter((x) => x.UserName === UserName);
  const FilterDetails = userDetails.filter((x) => x.userName === UserName);
  console.log("filtered User", filteredUser);
  return (
    <>
      <ScreenHeader
        title="Profile Details"
        buttonsList={[
          {
            displayField: (
              <MyIconbutton
                onClick={() =>
                  userSignOut()
                    .then(() => {
                      navigation("/");
                      //   msgopen(true);
                      //   setRes("Logged Out Successfully !");
                      //   setCondition("success");
                    })
                    .catch((err) => {
                      console.log(err);
                      //   msgopen(true);
                      //   setRes(err);
                      //   setCondition("error");
                    })
                }
                val={<ExitToAppIcon />}
                variant="contained"
              />
            ),
          },
        ]}
      />
      <SMGrid
        title="Personal Info"
        columns={columns2}
        datasource={FilterDetails}
      />
      <SMGrid
        title="Car Bookings"
        columns={columns}
        datasource={filteredUser}
      />
    </>
  );
};

export default Profile;
