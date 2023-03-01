import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/posts";

  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(api, {
        body: "Custom Body",
        title: "ABH",
        userId: 1,
      })
      .then((res) => {
        console.log("Data send Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .put(api + "/1", { body: "Custom Body" })
      .then((res) => {
        console.log("Data send Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .delete(api)
      .then((res) => {
        console.log("Data Deleted Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <Button onClick={getAPIData} variant="contained">
          Get Data
        </Button>
        {data.map((e, i) => (
          <div>
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
