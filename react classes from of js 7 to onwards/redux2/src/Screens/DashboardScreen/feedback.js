import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import MyButton from '../../Compoments/SMButton';
import SMCheckbox from "../../Compoments/SMCheckbox"
import SMModal from '../../Compoments/SMModal';
import { fbGet, fbPost } from '../../Config/firebasemethod';
import SaveIcon from "@mui/icons-material/Save";
import MyInput from '../../Compoments/SMInput';
import SMGrid from "../../Compoments/SMGrid"
import { Form } from 'react-bootstrap';

function Feedback() {
   const [model, setModel] = useState({});
  const [loader, setloader] = useState(false);
  const [ listData ,setlistData] = useState([])
  const [displayObj, setdisplayObj] = useState({})
  const [open, setOpen] = useState(false);


    const col = [
      {
        displayName: "Action",
        key: "",
        displayField: (e) => (
          <Button
            onClick={() =>
              setdisplayObj({...e})
            }
            variant="contained"
          >
            View
          </Button>
        ),
        searchAble: true,
      },
      {
        key: "userName",
        displayName: "userName",
        searchAble: true,
      },
      {
        key: "email",
        displayName: "email",
        searchAble: true,
      },
      {
        key: "message",
        displayName: "message",
        searchAble: true,
      },
    ];

    console.log(displayObj);


  


     let Save = (event) => {
       event.preventDefault();
       setloader(true);
       fbPost("courseform", model)
         .then(() => {
           console.log("Save SuccessFully !");
           setloader(false);
         })
         .catch((err) => {
           console.log(err);
           setloader(false);
         });
     };


       let showData = () => {
         fbGet("courseform")
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
    <div>
      <SMModal
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
              onClick={Save}
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
          <Grid item md={9}>
            <SMGrid datasource={listData} columns={col} />
          </Grid>
          <Grid item md={3} className="p-2">
            <Box
              className="text-center shadow-lg bg-white p-2"
              sx={{ borderRadius: "20px", height: 500 }}
              md={3}
            >
              <Typography
                variant="body1"
                style={{ fontSize: "14px" }}
                className="fw-bold p-2  "
              >
                NAME :{displayObj.userName}
              </Typography>
              <Typography
                variant="body1"
                style={{ fontSize: "14px" }}
                className="fw-bold p-2" 
              >
                E-Mail :{displayObj.email}
              </Typography>

              <Typography
                variant="body1"
                style={{ fontSize: "14px" }}
                className="fw-bold p-2"
              >
                Message :{displayObj.message}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Feedback