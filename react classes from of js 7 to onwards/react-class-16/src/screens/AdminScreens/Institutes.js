import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ScreenHeader from "../../components/screenheader";
import DeleteIcon from "@mui/icons-material/Delete";
import MyIconbutton from "../../components/Iconbutton";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { fbDelete, fbGet } from "../../config/firebasemethods";
import MySwitch from "../../components/Switch";

const Institutes = () => {
  const [InstituteList, setInstituteList] = useState([
    {
      InstLogo:
        "https://png.pngtree.com/png-vector/20211003/ourmid/pngtree-educational-institution-logo-vector-png-image_3968842.png",
      InstName: "Indus",
      No_of_Campuses: 3,
      Active_InActive: false,
    },
    {
      InstLogo:
        "https://png.pngtree.com/png-vector/20211003/ourmid/pngtree-educational-institution-logo-vector-png-image_3968842.png",
      InstName: "SAIMS",
      No_of_Campuses: 5,
      Active_InActive: true,
    },
    {
      InstLogo:
        "https://png.pngtree.com/png-vector/20211003/ourmid/pngtree-educational-institution-logo-vector-png-image_3968842.png",
      InstName: "SMUI",
      No_of_Campuses: 2,
      Active_InActive: false,
    },
    {
      InstLogo:
        "https://png.pngtree.com/png-vector/20211003/ourmid/pngtree-educational-institution-logo-vector-png-image_3968842.png",
      InstName: "KU",
      No_of_Campuses: 3,
      Active_InActive: true,
    },
  ]);

  const [Cridentials, setCridentitals] = useState([]);
  const navigate = useNavigate();

  let openDetail = (obj) => {
    navigate("/admin/SingleInstitute", { state: obj });
  };

  let openEdit = (obj) => {
    navigate("/admin/InstituteForm", { state: obj });
  };

  let openForm = () => {
    navigate("/admin/AddInstitutes");
  };

  let DeleteItem = (obj) => {
    console.log(obj);
    fbDelete("ListedInstitutes", obj.id)
      .then(() => {
        console.log("data Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getCridentitals = () => {
    fbGet("institute")
      .then((res) => {
        setCridentitals([...res]);
        console.log("inst cridentials", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let DeleteCridentials = (obj) => {
    //run a map on institutelist and match cridentials instname and instiutelist instname when matched delete cridentitals instname's id
    const obj1 = Cridentials.filter((x) => {
      return x.password === obj.password;
    });
    console.log("matched obj : ", obj1[0].id);
    fbDelete("institute", obj1[0].id)
      .then(() => {
        console.log("cridentials Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const save = () => {
    fbGet("ListedInstitutes")
      .then((res) => {
        console.log("Data retrieved SuccessFully !");
        setInstituteList([...res]);
        console.log(res);
        console.log(InstituteList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    save();
    getCridentitals();
    console.log("cridenttials", Cridentials);
  }, []);

  return (
    <>
      <ScreenHeader
        title="Institutes List"
        buttonsList={[
          {
            displayField: (
              <MyIconbutton
                onClick={() => openForm()}
                val={<AddCircleOutlineIcon />}
                variant="contained"
              />
            ),
          },
        ]}
      />
      <Box className="d-flex row mt-4 justify-content-between p-3 align-items-center">
        {InstituteList &&
        Array.isArray(InstituteList) &&
        InstituteList.length > 0
          ? InstituteList.map((x, i) => (
              <Paper
                key={i}
                className="p-2 my-2 border"
                onClick={() => openDetail(x)}
              >
                <Grid container>
                  <Grid item md={2}>
                    <Box className="m-2 p-2 text-center">
                      <img
                        src={x.InstLogo}
                        alt={x.InstName}
                        width={100}
                        height={100}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={2} variant="h5">
                    <Box className="mt-4 p-2">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="fw-bold text-muted"
                      >
                        Institute Name
                      </Typography>
                      <Typography>{x.InstName}</Typography>
                    </Box>
                  </Grid>
                  <Grid item md={2} variant="h5">
                    <Box className="mt-4 p-2">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="fw-bold text-muted"
                      >
                        Number of Campuses
                      </Typography>
                      <Typography>{x.No_of_Campuses}</Typography>
                    </Box>
                  </Grid>

                  <Grid item md={2}>
                    <Box className="mt-4  align-middle p-2">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="fw-bold text-muted"
                      >
                        Active / InActive
                      </Typography>

                      <Typography>
                        <FiberManualRecordIcon
                          color={x.Active_InActive ? "error" : ""}
                        />
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={2}>
                    <Box className="mt-4 align-middle p-2">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="fw-bold text-muted"
                      >
                        Toggle Institute Activation
                      </Typography>
                      <MySwitch
                        checked={InstituteList.Active_InActive}
                        handleChangeonClick={(e) => {
                          e.stopPropagation();
                          setInstituteList((prevList) =>
                            prevList.map((item) =>
                              item.InstName === x.InstName
                                ? {
                                    ...item,
                                    Active_InActive: e.target.checked,
                                  }
                                : item
                            )
                          );
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={1}>
                    <Box className="mt-4">
                      <MyIconbutton
                        val={<DeleteIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          DeleteItem(x);
                          DeleteCridentials(x);
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={1}>
                    <Box className="mt-4">
                      <MyIconbutton
                        val={<EditIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          openEdit(x);
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            ))
          : null}
      </Box>
    </>
  );
};

export default Institutes;

//do edit work here and add institutes work also and delete work of institutes.
