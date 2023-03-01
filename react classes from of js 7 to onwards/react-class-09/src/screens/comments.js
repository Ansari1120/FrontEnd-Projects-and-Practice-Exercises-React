import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SMGrid from "../components/SMGrid";
import { Get } from "../config/apibasemethods";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const [loader, setLoader] = useState(false);

  const navigation = useNavigate();

  let openAddForm = (id) => {
    navigation(`/commentform/${id}`);
  };

  let columns = [
    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <Button onClick={() => openAddForm(e.id)} variant="contained">
          View
        </Button>
      ),
    },
    {
      displayName: "Email",
      key: "email",
      displayField: (e) => <a href={`mailto:${e.email}`}>{e.email}</a>,
    },
    {
      displayName: "Name",
      key: "name",
    },
    {
      displayName: "Message",
      key: "body",
    },
  ];

  let getCommentsData = () => {
    setLoader(true);
    Get("comments")
      .then((res) => {
        setLoader(false);
        setCommentsData([...res.data]);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };
  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <>
      <SMGrid
        isLoading={loader}
        title="Comments"
        datasource={commentsData}
        columns={columns}
      />
    </>
  );
}
export default Comments;
