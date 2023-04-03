import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SingleInstitute = () => {
  const [Institute, setInstitute] = useState({});
  const location = useLocation();
  console.log(Institute);
  useEffect(() => {
    setInstitute(location.state);
  }, []);
  return (
    <>
      <Paper className="p-2 my-2 border ">
        <Grid container className="d-grid column justify-content-center ">
          <Grid item md={5} className="text-center">
            <img
              src={Institute.InstLogo}
              alt={Institute.InstName}
              width={150}
              height={150}
            />
          </Grid>
          <Grid item md={10}>
            <Typography
              sx={{ fontSize: 22 }}
              className="fw-bold text-muted text-center"
            >
              Institute Name
            </Typography>
            {Institute.InstName}
          </Grid>
          <Grid item md={10}>
            <Typography
              sx={{ fontSize: 22 }}
              className="fw-bold text-muted text-center"
            >
              No_of_Campuses
            </Typography>
            {Institute.No_of_Campuses}
          </Grid>
          <Grid item md={10}>
            <Typography
              sx={{ fontSize: 22 }}
              className="fw-bold text-muted text-center"
            >
              Active / In_Active
            </Typography>
            <FiberManualRecordIcon
              color={Institute.Active_InActive ? "error" : ""}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default SingleInstitute;
