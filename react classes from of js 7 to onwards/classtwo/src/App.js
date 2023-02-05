// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // var  , function    dom(getElementByID) replacer called useState updates state through function saves result in variable in left.
  let Add = (howmuch) => {
    if (count < 10) {
      setCount(count + howmuch);
    } else {
      setCount("no more count accepted limit exceeded !");
    }
  };
  let dec = (howmuch) => {
    setCount(count - howmuch);
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
      <p>increment count </p>
      <p>{count}</p>
      <button onClick={()=>Add(1)}>increment by 1</button>
      <button onClick={()=> Add(2)}>incrementby 2</button>
      <p>decrement count </p>
      <button onClick={()=>dec(1)}>decrementby 1</button>
      <button onClick={()=>dec(2)}>decrementby 2</button>

    </div>
  );
}

export default App;
