import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");
  let [edit_val, setEditval] = useState("");
  const [checkChange, setcheckChange] = useState(true);
  // let [status, setStatus] = useState(["Pending", "completed", "not started"]);
  let status = ["Pending", "completed", "not started"];
  const Add = () => {
    if (input.length >= 1) {
      text.push(input);
      setText([...text]);
      setInput("");
      setcheckChange(true);
    } else {
      console.log();
      console.log("input required !", input);
      alert("input required !");
    }
  };
  const del = (i) => {
    let removed = text.splice(i, 1);
    console.log(removed);
    setText([...text]);
    setInput("");
  };
  let [current_text, setCurrentText] = useState("");

  let managechange = (i) => {
    let rebackInput = text[i];
    console.log(rebackInput);
    setEditval(rebackInput);
    setCurrentText(rebackInput);
    setcheckChange(false);
  };

  let edit = () => {
    console.log("value needs to be edited : ", current_text);

    console.log("value recieved to edit : ", edit_val);

    let bring_change;
    bring_change = text.map((x) => {
      return x.replace(current_text, edit_val);
    });

    console.log(bring_change);
    setText([...bring_change]);
    setEditval("");
    setcheckChange(true);
  };
  let removeall = () => {
    setText([]);
  };
  return (
    <div className="App">
      {checkChange ? (
        <input
          placeholder="enter text "
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        ></input>
      ) : (
        <input
          placeholder="change text "
          onChange={(e) => {
            setEditval(e.target.value);
          }}
          value={edit_val}
        ></input>
      )}
      {checkChange ? (
        <button onClick={Add}>Add Text</button>
      ) : (
        <button onClick={edit}>Edit</button>
      )}
      {<button onClick={removeall}>Remove All</button>}
      <table className="tb">
        <tr>
          <th>Ids | Todos | Delete | Edit | Status</th>
        </tr>
        <tr>
          {text.map((x, i) => (
            <div>
              <td>{i} | </td>
              <td>
                {x} | <button onClick={() => del(i)}>Delete</button> |{" "}
                <button onClick={() => managechange(i)}>change todo</button>|{" "}
                <select onChange={(e) => e.target.value}>
                  <option>Select status</option>
                  {status.map((s, t) => {
                    return <option key={t}>{s}</option>;
                  })}
                </select>
              </td>
            </div>
          ))}
        </tr>
      </table>
      <footer>App Developed by Ahmed Ali Ansari of ID : KWOWWM8025 </footer>
    </div>
  );
}

export default App;
