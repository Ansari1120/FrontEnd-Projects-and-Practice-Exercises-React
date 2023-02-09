// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");

  const Add = () => {
    text.push(input);
    setText([...text]);
    setInput("");
  };
  let edit = (i) => {
    let a = prompt("enter text : ", text[i]);
    text[i] = a;
    setText([...text]);
  };
  const del = (i) => {
    let removed = text.splice(i, 1);
    console.log(removed);
    setText([...text]);
    setInput("");
  };
  return (
    <div className="App">
      <input
        placeholder="enter text "
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      ></input>
      <button onClick={Add}>Add Text</button>
      <Button click={Add} className="danger-button" label="add todo" />
      <Input
        change={input}
        className="dark-button"
        label="change in input field"
      />
      <table className="tb">
        <tr>
          <th>Ids | Todos</th>
        </tr>
        <tr>
          {text.map((x, i) => (
            <div>
              <td>{i} | </td>
              <td>
                {x} <button onClick={() => del(i)}>Delete button</button>
                <button onClick={() => edit(i)}>edit button</button>
              </td>
            </div>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default App;
