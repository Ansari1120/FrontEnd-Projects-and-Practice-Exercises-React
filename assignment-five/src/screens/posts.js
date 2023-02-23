import axios from "axios";
import React, { useState } from "react";
export default function Posts() {
  const [postsData, setpostsData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/posts";
  let getApidata = () => {
    axios.get(api).then((res) => {
      console.log(res);
      //todosData.push(res);
      setpostsData([...res.data]);
    });
  };
  return (
    <>
      <h1>Posts Page</h1>
      {getApidata()}
      {postsData.map((x, i) => {
        return (
          <>
            <div>{"Post : " + x.id}</div>
            <ul key={i}>
              <li>{x.title}</li>
            </ul>
          </>
        );
      })}
    </>
  );
}
