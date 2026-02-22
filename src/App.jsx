

import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"

function App() {

    return (

      <div>

      <BrowserRouter>
<Routes>
  <Route path="/" element={<Body/>}>
  <Route path="/login" element={<Login/>} />
  <Route path="/profile" element={<Profile/>} />

  </Route>
</Routes>
      </BrowserRouter>

    
      </div>
    )
  
}

export default App
