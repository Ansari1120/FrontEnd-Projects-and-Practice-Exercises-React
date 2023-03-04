import { Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetById, Post } from "../config/apibasemethods";

function CommentsForm() {
  const [model, setModel] = useState({});
  const params = useParams();

  let getSingleComment = () => {
    GetById("comments", params.id)
      .then((res) => {
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //editing existing comment already getting comment's id so just need to pass new body data and save it with onClick Button
  let saveComments = () => {
    // console.log(`Before :  ${model.body}`);
    Post("comments", model);
  };

  useEffect(() => {
    getSingleComment();
  }, []);

  return (
    <>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <TextField
              label="body"
              // onChange={() => {
              //   setModel(model.body);
              // }}
              // value={model}
            />
          </Grid>
          <Grid item md={6}>
            <TextField label="email" />
          </Grid>
          <Grid item md={6}>
            <TextField label="name" />
          </Grid>
        </Grid>
        {/* <Grid>
          <Button onClick={() => saveComments()} variant="outlined">
            Edit Comment
          </Button>
        </Grid> */}
      </Container>
    </>
  );
}
export default CommentsForm;
