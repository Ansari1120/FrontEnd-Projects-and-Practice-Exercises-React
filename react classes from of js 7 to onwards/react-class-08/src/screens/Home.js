import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/photos";
  // let api1 = "https://jsonplaceholder.typicode.com/todos/2";
  const navigate = useNavigate();

  let getApIData = () => {
    let Fectch_data = axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // immediately re rendered extracs inside it when the page reloads

  //useEffect conditionally runs particulars inside its body
  // accepts two arguments first function second [].

  useEffect(() => {
    getApIData();
  }, []); //[] inside it is the dependency placed whenever variable inside it is updated automatically function inside useEffect runs

  const HitToNavigate = (i) => {
    navigate(`/singlepost/${i}`);
  };

  return (
    <div className="App">
      {data.map((t, i) => {
        return (
          <div key={i}  onClick={() => HitToNavigate(t.id)}>
            <div>{t.id}</div>
            <div>{t.title}</div>
            <img src={t.url} />
            <img src={t.thumbnailUrl} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;

// use effect use cases

// Running once on mount: fetch API data
// Running on state change: validating input field
// Running on state change: live filtering
// Running on state change: trigger animation on new array value
// Running on props change: update paragraph list on fetched API data update
// Running on props change: updating fetched API data to get BTC updated price
