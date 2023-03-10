import "./App.css";
// import Auth from "./auth/Auth";
import AppRouter from "./config/appRouter";
// import Navbar from "./components/navbarLayout";
import UserLoginSignin from "./screens/UserLoginSignin";
function App() {
  return (
    <div className="App">
      {/* <Auth /> */}
      {/* <Navbar /> */}
      <AppRouter />
      <UserLoginSignin />
    </div>
  );
}

export default App;
