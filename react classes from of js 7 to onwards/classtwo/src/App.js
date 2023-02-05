// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // var  , function    dom(getElementByID) replacer called useState updates state through function saves result in variable in left.
  let Add = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount("no more count accepted limit exceeded !");
    }
  };
  const [arr, setArr] = useState([]);
  const done = () => {
    arr.push("haz"); // add new value in array
    setArr([...arr]); // made a new array and add arr copy into this new array through spread operator
    console.log(arr);
    // if we try to add arr like :  setArr(arr) then it says no new value push so no new state change detect reason no changes appear into ui
  };
  return (
    <div className="App">
      <p>push strings into an array</p>
      {arr.map((x) => (
        <div>
          <p> {x} </p>
        </div>
      ))}
      <button onClick={done}>Push</button>
      <br />
      <br />
      <p>increment count variable by 1</p>
      <p>{count}</p>
      <button onClick={Add}>add</button>
    </div>
  );
}

export default App;
