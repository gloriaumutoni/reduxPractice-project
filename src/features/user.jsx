 import { createSlice } from "@reduxjs/toolkit";

 export const userSlice=createSlice({
    name:'user',// name of a state
    initialState:{value:{name:'ds',age:10,email:''}},
    reducer:{
        login:(state,action)=>{
state.value=action.payload
        }
    }
 })

 export default userSlice.reducer