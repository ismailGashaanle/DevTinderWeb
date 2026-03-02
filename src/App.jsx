

import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"
import { Provider } from "react-redux"
import AppStore from './utils/AppStore';
import Feed from "./component/Feed"
import NotFound from "./component/NotFound"
import Connections from "./component/Connections"
import Requests from "./component/Requests"
import SignUp from "./component/SignUp"

function App() {

    return (

      <div>

       <Provider store={AppStore}>
          <BrowserRouter>
<Routes>
  <Route path="/" element={<Body/>}>
  <Route path="/" element={<Feed/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="*" element={<NotFound/>} />
  <Route path="/connection" element={<Connections/>} />
  <Route path="/requests" element={<Requests/>} />
  <Route path="/signup" element={<SignUp/>} />

  </Route>
</Routes>
      </BrowserRouter>
     
       </Provider>

    
      </div>
    )
  
}

export default App
