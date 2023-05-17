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
    ReviewsAndRatings: [
      {
        UserName: "",
        StarRating: "",
        Description: "",
      },
    ],
    availability: [
      {
        Days: "Monday , Teusday , Saturday",
        Timings: "9 to 5",
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
  const ReviewsAndRatings = [
    {
      UserName: "",
      StarRating: "",
      Description: "",
    },
  ];
  const availability = [
    {
      Days: "",
      Timings: "",
    },
  ];
  const [open, setOpen] = useState(false);
  const [Revopen, setRevOpen] = useState(false);
  const [Avopen, setAvOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const save = () => {
    setloading(true);
    fbPost("AvailableCars", Data)
      .then(() => {
        setloading(false);
        console.log("Data Posted Successfully !");
        setData({});
        if (selectedFile) {
          const storageRef = storage().ref();
          const fileRef = storageRef.child(selectedFile.name);
          fileRef.put(selectedFile).then(() => {
            fileRef.getDownloadURL().then((url) => {
              setData({ ...Data, carImg: url });
            });
          });
        }
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
    setOpen(false);
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

  const handleReviewsAndRatingsChange = (index, field, value) => {
    setData((prevData) => {
      const updatedData = { ...prevData };
      const updatedFeatures = [...updatedData.ReviewsAndRatings];
      updatedFeatures[index][field] = value;
      updatedData.Features = updatedFeatures;
      return updatedData;
    });
  };
  const handleavailabilityChange = (index, field, value) => {
    setData((prevData) => {
      const updatedData = { ...prevData };
      const updatedFeatures = [...updatedData.availability];
      updatedFeatures[index][field] = value;
      updatedData.Features = updatedFeatures;
      return updatedData;
    });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const storageRef = storage().ref();
      const fileRef = storageRef.child(selectedFile.name);
      fileRef.put(selectedFile).then(() => {
        fileRef.getDownloadURL().then((url) => {
          // setImageUrl(url);
          setData({ ...Data, carImg: url });
        });
      });
    }
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
              // value={Data.carImg}
              onChange={(e) => handleFileChange(e)}
            />
          </Grid>
          <Grid item className="p-2" md={4}>
            <Typography>Multiple Features Select</Typography>
            <SmModal
              Title="Multiple Features Select"
              innerContent={
                <Box>
                  {Feature.map((feature, index) => (
                    <div key={index}>
                      <TextField
                        label="Feature One"
                        // value={feature.featureOne}
                        onChange={(event) =>
                          handleFeatureChange(
                            index,
                            "featureOne",
                            event.target.value
                          )
                        }
                      />
                      <TextField
                        label="Feature Two"
                        //value={feature.featureOne}
                        onChange={(event) =>
                          handleFeatureChange(
                            index,
                            "featureTwo",
                            event.target.value
                          )
                        }
                      />
                      <TextField
                        label="Feature Three"
                        //value={feature.featureThree}
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
                        //   value={feature.featureFour}
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
                </Box>
              }
              modalFooter={
                <Box align="right">
                  <MyButton
                    label="Save"
                    variant="contained"
                    onClick={() => saveFeed()}
                    loadingPosition="start"
                    //loading={loader}
                    startIcon={<SaveIcon />}
                  />
                </Box>
              }
              open={open}
              //close is working in child to parent context
              close={(e) => setOpen(e)}
            />
            <Box>
              <MyButton
                label="Multiple Features Select"
                variant="contained"
                onClick={() => {
                  setOpen(true);
                }}
              />
            </Box>
          </Grid>
          <Grid item className="p-2" md={4}>
            <Typography>Add Reviews And Ratings</Typography>
            <SmModal
              Title="Reviews and Ratings"
              innerContent={
                <Box>
                  {ReviewsAndRatings.map((rating, index) => (
                    <div key={index}>
                      <TextField
                        label="User Name"
                        //value={rating.UserName}
                        onChange={(event) =>
                          handleReviewsAndRatingsChange(
                            index,
                            "UserName",
                            event.target.value
                          )
                        }
                      />
                      <TextField
                        label="Star Rating"
                        // value={rating.StarRating}
                        onChange={(event) =>
                          handleReviewsAndRatingsChange(
                            index,
                            "StarRating",
                            event.target.value
                          )
                        }
                      />
                      <TextField
                        label="Description"
                        // value={rating.Description}
                        onChange={(event) =>
                          handleReviewsAndRatingsChange(
                            index,
                            "Description",
                            event.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </Box>
              }
              modalFooter={
                <Box align="right">
                  <MyButton
                    label="Save"
                    variant="contained"
                    onClick={() => saveFeed()}
                    loadingPosition="start"
                    // loading={loader}
                    startIcon={<SaveIcon />}
                  />
                </Box>
              }
              open={Revopen}
              //close is working in child to parent context
              close={(e) => setRevOpen(e)}
            />
            <Box>
              <MyButton
                label="Add Reviews and Ratings"
                variant="contained"
                onClick={() => {
                  setRevOpen(true);
                }}
              />
            </Box>
          </Grid>
          <Grid item className="p-2" md={4}>
            <Typography>Add Availibility</Typography>
            <SmModal
              Title="Add Availibility"
              innerContent={
                <Box>
                  {availability.map((avail, index) => (
                    <div key={index}>
                      <TextField
                        label="Days"
                        // value={avail.Days}
                        onChange={(event) =>
                          handleavailabilityChange(
                            index,
                            "Days",
                            event.target.value
                          )
                        }
                      />
                      <TextField
                        label="Timings"
                        //value={avail.Timings}
                        onChange={(event) =>
                          handleavailabilityChange(
                            index,
                            "Timings",
                            event.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </Box>
              }
              modalFooter={
                <Box align="right">
                  <MyButton
                    label="Save"
                    variant="contained"
                    onClick={() => saveFeed()}
                    loadingPosition="start"
                    //loading={loader}
                    startIcon={<SaveIcon />}
                  />
                </Box>
              }
              open={Avopen}
              //close is working in child to parent context
              close={(e) => setAvOpen(e)}
            />
            <Box>
              <MyButton
                label="Add Availibility"
                variant="contained"
                onClick={() => {
                  setAvOpen(true);
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddCars;
