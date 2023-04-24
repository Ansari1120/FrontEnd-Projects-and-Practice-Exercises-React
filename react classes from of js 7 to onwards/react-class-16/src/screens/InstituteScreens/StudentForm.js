import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import SaveIcon from "@mui/icons-material/Save";
import MySnackBarMessage from "../../components/ShowMessage";
import { fbGet, fbPost, Usersignup } from "../../config/firebasemethods";
import MyStack from "../../components/Stack";
import { useParams } from "react-router-dom";
import SmModal from "../../components/SmModal";
import MyInput from "../../components/Input";
import MyButton from "../../components/Button";
import { TextField } from "@mui/material";

const StudentForm = () => {
  const [instData, setinstData] = useState({});
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [msgopen, setmsgOpen] = useState(false);
  const [loader, setloader] = useState(false);
  const [res, setRes] = useState();
  const [condition, setCondition] = useState("");
  const [model, setModel] = useState({});
  const [confrm, setConfrm] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setmsgOpen(false);
  };

  let getSingleComment = () => {
    fbGet("StudentRegistrationData", params.id)
      .then((res) => {
        setinstData({ ...res });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let createUser = () => {
    Usersignup(model)
      .then((res) => {
        console.log(`Student's Credentials created Successfully! ${res}`);
        setOpen(false);
        setloader(false);
        setmsgOpen(true);
        setCondition("success");
        setRes("Student's Credentials created Successfully!");
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        setOpen(true);
        setRes(err);
        setmsgOpen(true);
        setCondition("error");
        setRes(res);
      });
  };

  let saveFeed = () => {
    setloader(true);
    fbPost("InstituteStudentData", instData, params.id)
      .then(() => {
        console.log("Save SuccessFully !");
        setOpen(false);
        setloader(false);
        setmsgOpen(true);
        setCondition("success");
        setRes("Save SuccessFully !");
        let updatedmodel = {
          userName: instData.userName,
          email: instData.email,
          password: instData.password,
        };
        setModel({ ...updatedmodel });
        console.log("username and id pass : ", updatedmodel);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        setOpen(true);
        setRes(err);
        setmsgOpen(true);
        setCondition("error");
      });
    setConfrm(!confrm);
  };
  console.log(model);

  useEffect(() => {
    getSingleComment();
  }, []);
  return (
    <>
      <h1>Student's Detail</h1>
      <label>Registraion Data</label>
      <img src={instData.fileUpload} alt={"profile"} />
      <MyStack title="City" data={instData.SelectCity} />
      <MyStack title="Name" data={instData.FullName} />
      <MyStack title="Father Name" data={instData.FatherName} />
      <MyStack title="Course" data={instData.SelectCourse} />
      <MyStack title="E-mail" data={instData.email} />
      <MyStack title="CNIC" data={instData.CNIC} />
      <MyStack title="Father's CNIC" data={instData.FatherCnic} />
      <MyStack title="Date Of Birth" data={instData.date} />
      <MyStack title="Gender" data={instData.SelecGender} />
      <MyStack title="Last Qualification" data={instData.LastQualification} />
      <MyStack title="Have Laptop" data={instData.HaveLaptop} />
      <MyStack title="PROFILE PICTURE" data={instData.fileUpload} />

      {/*............................................................................................*/}

      <>
        <SmModal
          Title="User Form"
          innerContent={
            <Box>
              <Grid container>
                <Grid className="p-2" item md={6}>
                  <MyInput
                    value={instData.userName}
                    onChange={(e) =>
                      setinstData({ ...instData, userName: e.target.value })
                    }
                    label="User Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid className="p-2" item md={6} marginTop="10px">
                  <TextField
                    value={instData.password}
                    onChange={(e) =>
                      setinstData({ ...instData, password: e.target.value })
                    }
                    label="Password"
                    type={"password"}
                  />
                  <MyInput
                    value={instData.institute}
                    onChange={(e) =>
                      setinstData({ ...instData, institute: e.target.value })
                    }
                    label="institute"
                    type={"text"}
                  />
                </Grid>
              </Grid>
            </Box>
          }
          modalFooter={
            <Box align="right">
              <MyButton
                label="Save"
                variant="contained"
                onClick={() => saveFeed()}
                loadingPosition="start"
                loading={loader}
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
            label="Add Student's Cridentials"
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          />
        </Box>
        <Box>
          <MyButton
            label="Confirm Cridentials"
            variant="contained"
            disabled={confrm}
            onClick={() => createUser()}
          />
        </Box>
        <Box>
          <MySnackBarMessage
            variant="outlined"
            open={msgopen}
            severity={condition}
            onClose={handleClose}
            label={res}
          />
        </Box>
      </>
    </>
  );
};

export default StudentForm;
