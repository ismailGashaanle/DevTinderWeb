import { configureStore } from "@reduxjs/toolkit";

import useReducer from "./UserSlice";
import FeedReducer from './FeedSlice'
import ConnectionReducer from './ConnectionSlice'
import RequestRedcuer from './RequestSlice'
import SignUpReducer from './SingUpSlice'
 

const AppStore=configureStore({
    reducer:{
        user:useReducer,
        feed:FeedReducer,
        connection:ConnectionReducer,
        request:RequestRedcuer,
        signup:SignUpReducer
         


    }
})


export default AppStore