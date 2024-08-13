import { createSlice } from "@reduxjs/toolkit";
import ChangeColor from "../components/ChangeColor";


const initialStateValue=''
export const themeSlice=createSlice({
   name:'theme',// name of a state
   initialState:{value:initialStateValue},
   reducers:{
       ChangeColor :(state,action)=>{
state.value=action.payload
       },
       
   }
})
export  const {ChangeColor} =themeSlice.actions
export default themeSlice.reducer