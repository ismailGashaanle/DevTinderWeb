import { createSlice } from "@reduxjs/toolkit";

const SignUpSlice=createSlice({

    name:"signup",
    initialState:{
        user:null,
        
    },
    reducers:{
        addSignUp:(state,action)=>{
             state.user=action.payload
             
        
        }
    }
})


export default SignUpSlice.reducer;
export const {addSignUp}=SignUpSlice.actions