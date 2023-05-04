import { createSlice } from "@reduxjs/toolkit";


const CardSlice   = createSlice({
    name:"cart",
    initialState:[],
    reducers :{
        add(state,action){
            state.push(action.payload)
        },
        del(state,action){
            let i = state.findIndex(x=>x.id == action.payload)
            if(i > -1){
                state.splice(i,1)
            }
        }
    },
});

export const {add,del} = CardSlice.actions
export default CardSlice.reducer;