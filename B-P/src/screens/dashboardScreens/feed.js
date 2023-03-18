import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MyButton from "../../components/Button";
import MyInput from "../../components/Input";
import SmModal from "../../components/SmModal";
import SaveIcon from "@mui/icons-material/Save";
import { fbGet, fbPost } from "../../config/firebasemethods";
import SMGrid from "../../components/SMGrid";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Feed() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState({});
  const [loader, setloader] = useState(false);
  const [listData, setlistData] = useState([]);
  const [displayObj, setdisplayObj] = useState({});

  const col = [
    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <Button
          onClick={() =>
            setdisplayObj({
              ...displayObj,
              userName: e.userName,
              email: e.email,
              message: e.message,
            })
          }
          variant="contained"
        >
          View
        </Button>
      ),
    },
    {
      key: "userName",
      displayName: "User",
    },
    {
      key: "email",
      displayName: "E-mail",
    },
    {
      key: "message",
      displayName: "Message",
    },
  ];
  //saving user email,name,message in a node(Feeds) at firebase
  let saveFeed = () => {
    setloader(true);
    fbPost("Feeds", model)
      .then(() => {
        console.log("Save SuccessFully !");
        setOpen(false);
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };

  //Fetch data from a firabase node

  let showData = () => {
    fbGet("Feeds")
      .then((res) => {
        console.log("Data Fetched Successfully  ", res);
        setlistData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(displayObj.userName);
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <SmModal
        Title="User Form"
        innerContent={
          <Box>
            <Grid container>
              <Grid className="p-2" item md={6}>
                <MyInput
                  value={model.userName}
                  onChange={(e) =>
                    setModel({ ...model, userName: e.target.value })
                  }
                  label="User Name"
                  variant="outlined"
                />
              </Grid>
              <Grid className="p-2" item md={6}>
                <MyInput
                  value={model.email}
                  onChange={(e) =>
                    setModel({ ...model, email: e.target.value })
                  }
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid className="p-2" item md={6} marginTop="10px">
                <MyInput
                  value={model.message}
                  onChange={(e) =>
                    setModel({ ...model, message: e.target.value })
                  }
                  label="Message"
                  multiline
                  rows={4}
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
        <Button
          variant={"contained"}
          onClick={() => {
            setOpen(true);
          }}
        >
          Add FeedBack
        </Button>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={9} marginRight={-128}>
            <SMGrid datasource={listData} columns={col} />
          </Grid>
          <Grid item md={3} className="p-2">
            <Box
              className="text-center shadow-lg bg-white p-2"
              sx={{ borderRadius: "20px", height: 500 }}
              item
              md={3}
              position="relative"
            >
              <Typography variant="h5" className="fw-bold ">
                NAME :{displayObj.userName}
              </Typography>
              <Typography variant="h5" className="fw-bold">
                E-Mail :{displayObj.email}
              </Typography>

              <Typography variant="h5" className="fw-bold ">
                Message :{displayObj.message}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
