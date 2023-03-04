import "./App.css";
// import Auth from "./auth/Auth";
import AppRouter from "./config/appRouter";
import Navbar from "./components/navbarLayout";
function App() {
  return (
    <div className="App">
      {/* <Auth /> */}
      {/* <Navbar /> */}
      <AppRouter />
    </div>
  );
}

export default App;
