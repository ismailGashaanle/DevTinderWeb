
import { createSlice } from '@reduxjs/toolkit';
 

const ConnectionsSlice=createSlice({

    name:"connection",
    initialState:null,
    reducers:{
        addConnections:(state,action)=>{
            return action.payload
        },
        removeConnections:(state,action)=>{
            return null
        }
    }
})

export default  ConnectionsSlice.reducer;
export const {addConnections,removeConnections}=ConnectionsSlice.actions