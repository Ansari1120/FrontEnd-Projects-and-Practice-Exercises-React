// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import HomePage from "./component/HomePage";
import ChatsPage from "./component/ChatsPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatsPage} />
    </div>
  );
}

export default App;
