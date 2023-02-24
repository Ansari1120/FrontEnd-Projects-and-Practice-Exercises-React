import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/posts";
  // let api1 = "https://jsonplaceholder.typicode.com/todos/2";

  // https = protocol
  // jasonplaceholder = sitename / domain name
  // typicode.com = domain / top level domain
  // todos =  endpoint
  // /2 = id number of particular endpoint's data

  // REST API = Repsresentational State Transfer

  // Api is a promise basically

  // Application programming Interface used to make communcation between database and client side

  // practicing api site : https://jsonplaceholder.typicode.com/
  let getApIData = () => {
    //fetch data
    axios
      .get(api)
      // .get(api1)
      .then((res) => {
        console.log(res);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    //add data
    axios
      .post(api, { body: "abcsd", userId: 10121, title: "foara" })
      .then((res) => {
        console.log("data added successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .put(api + "/2", { body: "3d3d3d" })
      .then((res) => {
        console.log("data updated successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .delete(api)
      .then((res) => {
        console.log("data deleted sucessfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={getApIData}>hit to get api data</button>
      {data.map((t, i) => {
        return (
          <>
            <div key={i}>{t.userId}</div>
            <div>{t.body}</div>
            <div>{t.title}</div>
          </>
        );
      })}
    </div>
  );
}

export default App;
