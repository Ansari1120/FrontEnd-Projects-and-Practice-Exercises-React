import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SMGrid from "../../components/SMGrid";
import { fbGet } from "../../config/firebasemethods";

export default function SMCourse() {
  const [listData, setlistData] = React.useState([]);

  const navigation = useNavigate();

  const pagegoestoCourseFrom = () => {
    navigation("/institute/coursefrom");
  };

  React.useEffect(() => {
    showData();
  }, []);
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

  const col = [
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

  return (
    <>
      <SMGrid datasource={listData} columns={col} />

      <Box className="my-2 d-flex justify-content-end">
        <Button variant="outlined" onClick={pagegoestoCourseFrom}>
          Course Form
        </Button>
      </Box>
    </>
  );
}
