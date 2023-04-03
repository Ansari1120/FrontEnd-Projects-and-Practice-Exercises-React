import React, { useState } from "react";
import ScreenHeader from "../../components/screenheader";
import { Box, Grid, TextField, Typography } from "@mui/material";
import MyInput from "../../components/Input";
import { fbPost } from "../../config/firebasemethods";
import MyButton from "../../components/Button";
import SaveIcon from "@mui/icons-material/Save";

const AddInstitutes = () => {
  const [Data, setData] = useState({});
  const [loading, setloading] = useState(false);
  const save = () => {
    setloading(true);
    fbPost("ListedInstitutes", Data)
      .then(() => {
        setloading(false);
        console.log("Data Posted Successfully !");
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
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
                onClick={save}
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
            <Typography>Upload Instiute's Logo</Typography>
            <TextField
              type={"file"}
              value={Data.picture}
              onChange={(e) => setData({ ...Data, picture: e.target.files[0] })}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddInstitutes;
