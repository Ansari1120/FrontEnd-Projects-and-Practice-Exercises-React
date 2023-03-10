import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ScreenHeader from "../../components/screenheader";
import { Get } from "../../config/apibasemethods";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import SMModal from "../../components/ammodal";

function Posts() {
  const [listData, setListData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  let getdata = () => {
    setLoader(true);
    Get("posts")
      .then((res) => {
        setLoader(false);
        setListData([...res.data]);
      })
      .catch((err) => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <SMModal
        modalTitle="Add Post"
        innerContent={
          <Box>
            <Grid container>
              <Grid item md={6}>
                <TextField label="abc" variant="standard" />
              </Grid>
              <Grid item md={6}>
                <TextField label="abc" variant="standard" />
              </Grid>
              <Grid item md={6}>
                <TextField label="abc" variant="standard" />
              </Grid>
            </Grid>
          </Box>
        }
        modalFooter={
          <Box>
            <Button>Save</Button>
          </Box>
        }
        close={(e) => setOpenModal(e)}
        open={openModal}
      />
      <ScreenHeader
        title="Posts"
        buttonsList={[
          {
            tooltip: "Add Post",
            displayField: (
              <IconButton
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <AddIcon />
              </IconButton>
            ),
          },
        ]}
      />

      {loader ? (
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
            alt="Loading ..."
          />
        </div>
      ) : listData && listData.length < 1 ? (
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRP9gJwRfimsV5YFbTp39bAItgIuMM4ec_-w&usqp=CAU"
            alt="No Data Found"
          />
        </div>
      ) : listData && listData.length > 0 ? (
        listData.map((x, i) => (
          <div key={i} className="bg-light rounded shadow p-2 mb-3">
            <h1>{x.title}</h1>
            <p>{x.body}</p>
          </div>
        ))
      ) : null}
    </>
  );
}
export default Posts;
