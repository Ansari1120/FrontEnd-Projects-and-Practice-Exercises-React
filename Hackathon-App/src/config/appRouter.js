import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLoginSignin from "../screens/UserLoginSignin";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../screens/AdminScreens/admin";
import Carcards from "../screens/UserScreens/Carcards";
import SingleCard from "../screens/UserScreens/SingleCard";
import BookNow from "../screens/UserScreens/BookNow";
import Profile from "../screens/UserScreens/Profile";
import SelectedCar from "../screens/UserScreens/SelectedCar";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Carcards />} />
          <Route path="/SingleCard" element={<SingleCard />} />
          <Route path="/SelectedCar" element={<SelectedCar />} />
          <Route
            path="/BookNow"
            element={<ProtectedRoute Component={BookNow} />}
          />

          <Route path="/userloginsignup" element={<UserLoginSignin />} />
          <Route path="/Profile" element={<Profile />} />

          <Route
            path="admin/*"
            element={<ProtectedRoute Component={Admin} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
