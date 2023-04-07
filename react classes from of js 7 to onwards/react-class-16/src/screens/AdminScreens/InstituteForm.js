import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScreenHeader from "../../components/screenheader";
import { Box, Grid } from "@mui/material";
import MyInput from "../../components/Input";
import MyButton from "../../components/Button";
import SaveIcon from "@mui/icons-material/Save";
import { fbPost } from "../../config/firebasemethods";

const InstituteForm = () => {
  const [Data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location);
  console.log(Data.id);

  const save = () => {
    setLoading(true);
    fbPost("ListedInstitutes", Data, Data.id)
      .then(() => {
        setLoading(false);
        console.log("Data Updated SuccessFully !");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    setData(location.state);
  }, []);
  return (
    <>
      <ScreenHeader
        title="Institute Edit Form"
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
            <MyInput
              label="Instiute email"
              type="email"
              value={Data.Email}
              onChange={(e) => setData({ ...Data, Email: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
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
        </Grid>
      </Box>
    </>
  );
};

export default InstituteForm;
