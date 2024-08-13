 import { createSlice } from "@reduxjs/toolkit";


 const initialStateValue={name:'ds',age:10,email:''}
 export const userSlice=createSlice({
    name:'user',// name of a state
    initialState:{value:initialStateValue},
    reducers:{
        login:(state,action)=>{
state.value=action.payload
        },
        logout:(state)=>{
            state.value=initialStateValue
        }
    }
 })
export  const {login,logout} =userSlice.actions
 export default userSlice.reducer