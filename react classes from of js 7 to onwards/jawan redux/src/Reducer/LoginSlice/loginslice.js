import { createSlice } from "@reduxjs/toolkit";





const LoginSlice   = createSlice({
    name:"Login",
    initialState:{
        dummy:"yoo...."
    },
    reducers :{
        add(state,payload){},
        del(state,payload){}
    },
});

export const {add,del} = LoginSlice.actions
export default LoginSlice.reducer;