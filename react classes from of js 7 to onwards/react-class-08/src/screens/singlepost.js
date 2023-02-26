import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const SinglePost = () => {
  //useParams used to get hitted element id
  const params = useParams();
  console.log(params);
  const [data, setData] = useState([]);
  let api = `https://jsonplaceholder.typicode.com/photos/${params.id}`;
  // let api1 = "https://jsonplaceholder.typicode.com/todos/2";

  let getApIData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log("respones", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApIData();
    console.log(data);
  }, []);

  return (
    <>
     
      <div>
        <h1>This is Dynamic Routing where we hit one element in the list and gets its detail , as you see below</h1>
        <h1> ID : {data.id}</h1>
        <p> Title : {data.title}</p>
        <img alt="my img1" src={data.url} />
        <br />
        <br />
        <img alt="my img2" src={data.thumbnailUrl} />
      </div>
    </>
  );
};

export default SinglePost;
