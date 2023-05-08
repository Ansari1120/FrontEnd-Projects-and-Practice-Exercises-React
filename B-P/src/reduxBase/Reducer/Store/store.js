import { configureStore } from "@reduxjs/toolkit";
import loginslice from "../LoginSlice/loginslice";
import cardSlice from "../CardSlice/cardSlice";

 const store = configureStore ({
reducer:{
    Login:loginslice,
    cart:cardSlice,
},

 });

 export default store;