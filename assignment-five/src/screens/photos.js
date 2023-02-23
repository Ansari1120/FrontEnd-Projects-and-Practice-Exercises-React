import axios from "axios";
import React, { useState } from "react";
export default function Photos() {
  const [photosData, setphotosData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/photos";
  let getApidata = () => {
    axios.get(api).then((res) => {
      console.log(res);
      //todosData.push(res);
      setphotosData([...res.data]);
    });
  };
  return (
    <>
      <h1>Photos Page</h1>
      {getApidata()}
      {photosData.map((x, i) => {
        return (
          <>
            <div key={i}>{"ID : "+x.id}</div>
            <div key={i}>{"Title : "+x.title}</div>
            <div key={i}>{"URL : "+x.url}</div>
          </>
        );
      })}
    </>
  );
}
