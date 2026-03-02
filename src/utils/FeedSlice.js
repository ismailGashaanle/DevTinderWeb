import { createSlice } from "@reduxjs/toolkit";

 
const FeedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload
        },
        removeFeed:(state,action)=>{
            const newFeeds= state.filter((newFeed)=>newFeed._id !==action.payload )
            return newFeeds
        }
    }
})


export default FeedSlice.reducer;
export const {addFeed,removeFeed}=FeedSlice.actions