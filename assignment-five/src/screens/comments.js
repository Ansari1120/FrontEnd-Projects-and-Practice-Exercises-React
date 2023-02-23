import axios from "axios";
import React, { useState } from "react";
export default function Comments() {
  const [commentsData, setcommentsData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/comments";
  let getApidata = () => {
    axios.get(api).then((res) => {
      console.log(res);
      //todosData.push(res);
      setcommentsData([...res.data]);
    });
  };
  return (
    <>
      <h1>Comments Page</h1>
      {getApidata()}
      {commentsData.map((x, i) => {
        return (
          <>
            <div key={i}>{"ID : " + x.id}</div>
            <div key={i}>{"Name : " + x.name}</div>
            <div key={i}>{"Body : " + x.body}</div>
            <div key={i}>{"Email : " + x.email}</div>
          </>
        );
      })}
    </>
  );
}
