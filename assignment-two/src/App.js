// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");

  const Add = () => {
    text.push(input);
    setText([...text]);
    setInput("");
  };
  const del = (i) => {
    let removed = text.splice(i, 1);
    console.log(removed);
    setText([...text]);
    setInput("");
  };
  return (
    <div className="App">
      {/* {<button onClick={()=>del(i)}></button>} */}
      <input
        placeholder="enter text "
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input.length === null ? null : input}
      ></input>
      <button onClick={Add}>Add Text</button>
      <table className="tb">
        <tr>
          <th>Ids | Todos</th>
        </tr>
        <tr>
          {text.map((x, i) => (
            <div>
              <td>{i} | </td>
              <td>
                {x} <button onClick={() => del(i)}>Delete</button>
              </td>
            </div>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default App;
