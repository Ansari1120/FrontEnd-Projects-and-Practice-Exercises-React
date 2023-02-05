// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState("");
  let [edit_val, setEditval] = useState("");
  const [checkChange, setcheckChange] = useState(true);
  // let [current_text, setCurrentText] = useState("");

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
  // let editpnChange = (i) => {
  //   let current_text = text[i];
  //   console.log(current_text);
  //   console.log(edit_val);
  //   // let bring_change = text.replace(current_text, edit_val);
  //   // console.log(bring_change);
  //   // setText([...bring_change]);
  //   // setEditval("");
  //   setcheckChange(false);
  // };
  let managechange = (i) => {
    console.log(" At manage change value needs to be edited : ", text[i]);

    setcheckChange(false);
  };

  let edit = (i) => {
    let current_text = text[i];
    console.log("value needs to be edited : ", current_text);

    console.log("value recieved to edit : ", edit_val);

    let bring_change;
    bring_change = text.map((x) => {return x.replace(current_text, edit_val)});

    console.log(bring_change);
    setText([...bring_change]);
    setEditval("");
    setcheckChange(true);
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
        text.map((x, i) => (
          <div>
            <button onClick={() => edit(i)}>Edit</button>
          </div>
        ))
      )}
      <table className="tb">
        <tr>
          <th>Ids | Todos | Delete | Edit </th>
        </tr>
        <tr>
          {text.map((x, i) => (
            <div>
              <td>{i} | </td>
              <td>
                {x} | <button onClick={() => del(i)}>Delete</button> |{" "}
                <button onClick={() => managechange(i)}>Edit</button>
              </td>
            </div>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default App;
