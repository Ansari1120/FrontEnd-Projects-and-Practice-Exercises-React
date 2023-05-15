import React, { useState } from "react";
import ScreenHeader from "../../components/screenheader";
import { Box, Grid, TextField, Typography } from "@mui/material";
import MyInput from "../../components/Input";
import { Usersignup, fbPost } from "../../config/firebasemethods";
import MyButton from "../../components/Button";
import SaveIcon from "@mui/icons-material/Save";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddInstitutes = () => {
  const [Data, setData] = useState({});
  const [loading, setloading] = useState(false);
  const save = () => {
    setloading(true);
    fbPost("ListedInstitutes", Data)
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
        // setOpen(true);
        // setRes(err);
        // setmsgOpen(true);
        // setCondition("error");
        // setRes(res);
      });
  };
  return (
    <>
      <ScreenHeader
        title="Add Institute Form"
        buttonsList={[
          {
            displayField: (
              <MyButton
                label="Save"
                // onClick={{()=>save();
                //   addCridentials();}}
                onClick={() => {
                  save();
                  addCridentials();
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
            <MyInput
              label="Instiute Name"
              type="text"
              value={Data.InstName}
              onChange={(e) => setData({ ...Data, InstName: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Instiute short Name"
              type="text"
              value={Data.shortName}
              onChange={(e) => setData({ ...Data, shortName: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Instiute Address"
              type="text"
              value={Data.Address}
              onChange={(e) => setData({ ...Data, Address: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="no of Campuses"
              type="number"
              value={Data.No_of_Campuses}
              onChange={(e) =>
                setData({ ...Data, No_of_Campuses: e.target.value })
              }
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <TextField
              label="Instiute email"
              type="email"
              value={Data.Email}
              onChange={(e) => setData({ ...Data, Email: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <TextField
              label="Instiute password"
              type="password"
              value={Data.password}
              onChange={(e) => setData({ ...Data, password: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Instiute UserName"
              type="text"
              value={Data.userName}
              onChange={(e) => setData({ ...Data, userName: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <Typography>Upload Institute's Logo</Typography>
            <TextField
              type={"file"}
              value={Data.picture}
              onChange={(e) => setData({ ...Data, picture: e.target.files[0] })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Instiute Details"
              type="text"
              value={Data.Details}
              onChange={(e) => setData({ ...Data, Details: e.target.value })}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Instiute Contact"
              type="text"
              value={Data.Contact}
              onChange={(e) => setData({ ...Data, Contact: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Instiute owner Contact"
              type="text"
              value={Data.OwnerContact}
              onChange={(e) =>
                setData({ ...Data, OwnerContact: e.target.value })
              }
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label={"Institute Type"}
                  value={Data.Type}
                  onChange={(e) => setData({ ...Data, Type: e.target.value })}
                >
                  <MenuItem value={"University"}>University</MenuItem>
                  <MenuItem value={"School"}>School</MenuItem>
                  <MenuItem value={"Institute"}>Institute</MenuItem>
                  <MenuItem value={"College"}>College</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddInstitutes;
