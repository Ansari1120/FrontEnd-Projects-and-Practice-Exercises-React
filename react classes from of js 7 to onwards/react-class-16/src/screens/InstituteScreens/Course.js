import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Navigate, useNavigate } from "react-router-dom";
import SMGrid from "../../components/SMGrid";
import { fbDelete, fbGet, fbPost } from "../../config/firebasemethods";
import ScreenHeader from "../../components/screenheader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MyIconbutton from "../../components/Iconbutton";
import SmModal from "../../components/SmModal";
import MyButton from "../../components/Button";
import { Grid } from "@mui/material";
import MyInput from "../../components/Input";

export default function SMCourse() {
  const [listData, setlistData] = React.useState([]);
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [msgopen, setmsgOpen] = React.useState(false);
  const [loader, setloader] = React.useState(false);
  const [condition, setCondition] = React.useState("");
  const col = [
    {
      key: "",
      displayName: "Delete",
      displayField: (e) => (
        <MyIconbutton
          val={<DeleteIcon />}
          onClick={() => {
            DeleteItem(e);
          }}
        />
      ),
      searchAble: true,
    },
    {
      key: "",
      displayName: "Edit",
      displayField: (e) => (
        <MyIconbutton
          val={<EditIcon />}
          onClick={() => {
            openEdit(e);
            setOpen(true);
          }}
        />
      ),
      searchAble: true,
    },
    {
      key: "CourseName",
      displayName: "CourseName",
      searchAble: true,
    },
    {
      key: "Duration",
      displayName: "Duration",
      searchAble: true,
    },
    {
      key: "fee",
      displayName: "fee",
      searchAble: true,
    },

    {
      key: "teacher",
      displayName: "teacher",
      searchAble: true,
    },
  ];
  const [newQuestion, setNewQuestion] = React.useState({
    CourseName: "",
    Duration: "",
    fee: "",
    teacher: "",
  });
  const pagegoestoCourseFrom = () => {
    navigation("/institute/coursefrom");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setmsgOpen(false);
  };

  let openEdit = (obj) => {
    setNewQuestion({
      CourseName: obj.CourseName,
      Duration: obj.Duration,
      fee: obj.fee,
      teacher: obj.teacher,
      id: obj.id,
    });
  };

  const editFeedData = () => {
    if (
      newQuestion.CourseName === "" &&
      newQuestion.Duration === "" &&
      newQuestion.fee === "" &&
      newQuestion.teacher === ""
    ) {
      console.log("dont update null data");
    } else {
      fbPost("CourseForm", newQuestion, newQuestion.id)
        .then(() => {
          console.log("Data Updated SuccessFully !");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setNewQuestion({
      CourseName: "",
      Duration: "",
      fee: "",
      teacher: "",
    });
  };

  let DeleteItem = (obj) => {
    console.log(obj);
    fbDelete("CourseForm", obj.id)
      .then(() => {
        console.log("data Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let showData = () => {
    fbGet("CourseForm")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setlistData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    showData();
  }, []);
  return (
    <>
      <ScreenHeader
        title="Courses List"
        buttonsList={[
          {
            displayField: (
              <MyIconbutton
                onClick={() => pagegoestoCourseFrom()}
                val={<AddCircleOutlineIcon />}
                variant="contained"
              />
            ),
          },
        ]}
      />

      <SmModal
        Title="Course Edit Form"
        innerContent={
          <Box>
            <Grid container>
              <Grid className="p-2" item md={6}>
                <MyInput
                  value={newQuestion.CourseName}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      CourseName: e.target.value,
                    })
                  }
                  label="Course Name"
                  variant="outlined"
                />
              </Grid>

              <Grid className="p-2" item md={6} marginTop="10px">
                <MyInput
                  value={newQuestion.Duration}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      Duration: e.target.value,
                    })
                  }
                  label="Duration"
                  type={"text"}
                />
              </Grid>

              <Grid className="p-2" item md={6} marginTop="10px">
                <MyInput
                  value={newQuestion.fee}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      fee: e.target.value,
                    })
                  }
                  label="Fee"
                  type={"text"}
                />
              </Grid>
              <Grid className="p-2" item md={6} marginTop="10px">
                <MyInput
                  value={newQuestion.teacher}
                  onChange={(e) =>
                    setNewQuestion({
                      ...newQuestion,
                      teacher: e.target.value,
                    })
                  }
                  label="Teacher"
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
              onClick={() => editFeedData()}
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

      <SMGrid datasource={listData} columns={col} />
    </>
  );
}

//Add open new courses registration at student portal directly
