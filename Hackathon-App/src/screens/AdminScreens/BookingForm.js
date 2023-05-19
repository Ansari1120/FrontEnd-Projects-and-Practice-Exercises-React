import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScreenHeader from "../../components/screenheader";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import MyInput from "../../components/Input";
import MyButton from "../../components/Button";
import { Usersignup, fbPost, storage } from "../../config/firebasemethods";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SmModal from "../../components/SmModal";
import SaveIcon from "@mui/icons-material/Save";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const BookingForm = () => {
  const [Data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    setData(location.state);
  }, []);
  const [open, setOpen] = useState(false);
  const [Revopen, setRevOpen] = useState(false);
  const [Avopen, setAvOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const save = () => {
    setloading(true);
    fbPost("UserRequirments", Data, Data.id)
      .then(() => {
        setloading(false);
        console.log("Data Posted Successfully !");
        setData({});
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  };

  const addCridentials = () => {
    setloading(true);
    let updatedmodel = {
      userName: Data.userName,
      email: Data.Email,
      password: Data.password,
    };
    Usersignup(updatedmodel, "institute")
      .then((res) => {
        console.log(`Student's Credentials created Successfully! ${res}`);
        setloading(false);
        updatedmodel = {};
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  };

  console.log(Data);

  return (
    <>
      <ScreenHeader
        title="Add Car Cost"
        buttonsList={[
          {
            displayField: (
              <MyButton
                label="Save"
                onClick={() => {
                  save();
                }}
                startIcon={<SaveIcon />}
                loading={loading}
                variant="contained"
              />
            ),
          },
        ]}
      />
      <Box>
        <Grid container>
          <Grid item className="p-2" md={4}>
            <TextField
              label="Car Price"
              type="number"
              onChange={(e) => setData({ ...Data, price: e.target.value })}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookingForm;
