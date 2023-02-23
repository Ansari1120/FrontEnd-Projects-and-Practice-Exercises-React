import axios from "axios";
import React, { useState } from "react";
export default function Users() {
  const [usersData, setusersData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/users";
  let getApidata = () => {
    axios.get(api).then((res) => {
      console.log(res);
      //todosData.push(res);
      setusersData([...res.data]);
    });
  };
  return (
    <>
      <h1>Users Page</h1>
      {getApidata()}
      {usersData.map((x, i) => {
        return (
          <>
            <h4>{"ID : " + x.id}</h4>
            <p>{"Name : " + x.name}</p>
            <p>{"Username : " + x.username}</p>
            <p>{"Email : " + x.email}</p>
          </>
        );
      })}
    </>
  );
}
