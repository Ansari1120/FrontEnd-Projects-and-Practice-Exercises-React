import { configureStore } from "@reduxjs/toolkit";
import loginslice from "../LoginSlice/loginslice";

 const store = configureStore ({
reducer:{
    Login:loginslice,
},

 });

 export default store;