// import logo from "./logo.svg";
import "./App.css";

function App() {
  let obj = [
    { id: 1, name: "abc", category: "A", city: "karachi" },
    { id: 2, name: "cfg", category: "Y", city: "nowshehra" },
    { id: 3, name: "TRE", category: "J", city: "hyderabad" },
    { id: 4, name: "kae", category: "P", city: "sukkhur" },
    { id: 5, name: "jsa", category: "P", city: "islamabad" },
    { id: 6, name: "iow", category: "Q", city: "lahore" },
    { id: 7, name: "pqp", category: "W", city: "nawabshah" },
    { id: 8, name: "law", category: "M", city: "quetta" },
    { id: 9, name: "hja", category: "O", city: "peshawar" },
    { id: 10, name: "cas", category: "J", city: "rawalpindi" },
    { id: 11, name: "ewd", category: "X", city: "sialkot" },
    { id: 12, name: "tbw", category: "Z", city: "mansehra" },
  ];

  return (
    <div className="App"> 
      <header className="App-header">
        <h1>Hello From React</h1>
        <label>This is Assignment one From Ahmed Ali Ansari</label>
        {
        obj.map((x) => {
          return (
            <div className="card">
              <p>{x.keys}</p>
              <p>ID: {x.id} </p>
              <p>Name: {x.name}</p>
              <p>category: {x.category}</p>
              <p>City: {x.city}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
