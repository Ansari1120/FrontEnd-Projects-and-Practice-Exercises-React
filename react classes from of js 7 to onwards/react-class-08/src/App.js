import axios from "axios";
import React, { useState, useEffect } from "react";
import AppRouter from "./config/appRouter"
function App() {
 

  return (
   <AppRouter />
  );
}

export default App;

// use effect use cases

// Running once on mount: fetch API data
// Running on state change: validating input field
// Running on state change: live filtering
// Running on state change: trigger animation on new array value
// Running on props change: update paragraph list on fetched API data update
// Running on props change: updating fetched API data to get BTC updated price
