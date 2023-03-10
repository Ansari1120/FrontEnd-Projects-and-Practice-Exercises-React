import { Button, Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "../../components/SearchResults";
import SMGrid from "../../components/SMGrid";
import Sortout from "../../components/sortout";
import { Get } from "../../config/apibasemethods";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const [loader, setLoader] = useState(false);

  const navigation = useNavigate();
  const [filterResults, setfilterResults] = useState([]);
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
      searchAble: true,
    },
    {
      displayName: "Name",
      key: "name",
      searchAble: true,
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
        console.log(res.data);
        setCommentsData(...[res.data]);
        setfilterResults(...[res.data]);
      })

      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getCommentsData();
    //  MatchSearch();
  }, []);
  return (
    <>
      <Box>
        <Container>
          <Box>
            <SearchResults
              commentsData={commentsData}
              setfilterResults={setfilterResults}
              columns={columns}
            />
          </Box>
          <Box>
            <Sortout
              datasource={filterResults}
              setDatasource={setfilterResults}
            />
          </Box>
          <Box>
            <SMGrid
              isLoading={loader}
              title="Comments"
              datasource={filterResults}
              columns={columns}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default Comments;
