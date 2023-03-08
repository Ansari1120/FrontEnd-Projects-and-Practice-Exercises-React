import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Dashboard from "../screens/dashboard";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
