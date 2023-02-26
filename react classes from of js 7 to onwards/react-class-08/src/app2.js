import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/posts";
  // let api1 = "https://jsonplaceholder.typicode.com/todos/2";


  let getApIData = () => {
   let FetchData =  axios
      .get(api)
      // .get(api1)
      .then((res) => {
        console.log(res);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(api, { body: "abcsd", id: 10121 })
      .then((res) => {
        console.log("data added successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .put(api + "/2", { body: "3d3d3d", id: 39999999 })
      .then((res) => {
        console.log("data updated successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
    
      {data.map((t, i) => {
        return <div key={i}>{t.title}</div>;
      })}
    </div>
  );
}

export default App;


//useEffect conditionally runs particulars inside its body
// accepts two arguments first function second [].


