import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScreenHeader from "../../components/screenheader";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import MyInput from "../../components/Input";
import MyButton from "../../components/Button";
import { Usersignup, fbPost } from "../../config/firebasemethods";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MultipleSelect from "../../components/MultiSelect";
import SmModal from "../../components/SmModal";
import SaveIcon from "@mui/icons-material/Save";

const AddCars = () => {
  const [Data, setData] = useState({
    Features: [
      {
        featureOne: "",
        featureTwo: "",
        featureThree: "",
        featureFour: "",
      },
    ],
  });
  const Feature = [
    {
      featureOne: "",
      featureTwo: "",
      featureThree: "",
      featureFour: "",
    },
  ];
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const save = () => {
    setloading(true);
    fbPost("AvailableCars", Data)
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
  const saveFeed = () => {
    console.log("nested data added");
  };
  console.log(Data);

  const handleFeatureChange = (index, field, value) => {
    setData((prevData) => {
      const updatedData = { ...prevData };
      const updatedFeatures = [...updatedData.Features];
      updatedFeatures[index][field] = value;
      updatedData.Features = updatedFeatures;
      return updatedData;
    });
  };

  return (
    <>
      <ScreenHeader
        title="Add New Cars Form"
        buttonsList={[
          {
            displayField: (
              <MyButton
                label="Save"
                // onClick={{()=>save();
                //   addCridentials();}}
                onClick={() => {
                  save();
                  //addCridentials();
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
              label="Car Name"
              type="text"
              value={Data.car}
              onChange={(e) => setData({ ...Data, car: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Car Model"
              type="text"
              value={Data.car_model}
              onChange={(e) => setData({ ...Data, car_model: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Car Color"
              type="text"
              value={Data.car_color}
              onChange={(e) => setData({ ...Data, car_color: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <MyInput
              label="Model Year"
              type="number"
              value={Data.car_model_year}
              onChange={(e) =>
                setData({ ...Data, car_model_year: e.target.value })
              }
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <TextField
              label="Car Price"
              type="number"
              value={Data.price}
              onChange={(e) => setData({ ...Data, price: e.target.value })}
            />
          </Grid>

          <Grid item className="p-2" md={4}>
            <MyInput
              label="Car Id"
              type="number"
              value={Data.userName}
              onChange={(e) => setData({ ...Data, id: e.target.value })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <Typography>Upload Car's Picture</Typography>
            <TextField
              type={"file"}
              value={Data.carImg}
              onChange={(e) => setData({ ...Data, carImg: e.target.files[0] })}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <Typography>Multiple Features Select</Typography>
            {Feature.map((feature, index) => (
              <div key={index}>
                <TextField
                  label="Feature One"
                  value={feature.featureOne}
                  onChange={(event) =>
                    handleFeatureChange(index, "featureOne", event.target.value)
                  }
                />
                <TextField
                  label="Feature Two"
                  value={feature.featureOne}
                  onChange={(event) =>
                    handleFeatureChange(index, "featureTwo", event.target.value)
                  }
                />
                <TextField
                  label="Feature Three"
                  value={feature.featureThree}
                  onChange={(event) =>
                    handleFeatureChange(
                      index,
                      "featureThree",
                      event.target.value
                    )
                  }
                />
                <TextField
                  label="Feature Four"
                  value={feature.featureFour}
                  onChange={(event) =>
                    handleFeatureChange(
                      index,
                      "featureFour",
                      event.target.value
                    )
                  }
                />
              </div>
            ))}
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

export default AddCars;
