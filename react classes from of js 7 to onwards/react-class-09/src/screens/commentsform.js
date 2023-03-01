import { Grid, TextField } from "@mui/material";
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

  let saveComments = () => {
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
            <TextField label="body" />
          </Grid>
          <Grid item md={6}>
            <TextField label="email" />
          </Grid>
          <Grid item md={6}>
            <TextField label="name" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default CommentsForm;
