import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({

    name:"user",
    initialState:null,
    reducers:{
        AddUser:(state,action)=>{
            return action.payload
        },
        RemoveUser:(state,action)=>{
            return null
        }
    }
})


export default UserSlice.reducer;
export const {AddUser,RemoveUser}=UserSlice.actions