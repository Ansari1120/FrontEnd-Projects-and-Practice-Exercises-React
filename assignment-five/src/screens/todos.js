import axios from "axios";
import React, { useState } from "react";

export default function Todos() {
  const [todosData, settodosData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/todos";
  let getApidata = () => {
    axios.get(api).then((res) => {
      console.log(res);
      //todosData.push(res);
      settodosData([...res.data]);
    });
  };
  return (
    <>
      <h1>Todos Page</h1>
      <div>{getApidata()}</div>
      <div>
        {todosData.map((x, i) => {
          return (
            <ul key={i}>
              <li>{x.title}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
