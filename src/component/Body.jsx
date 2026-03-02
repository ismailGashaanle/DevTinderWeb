import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Base_URL } from '../utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { AddUser, RemoveUser } from '../utils/UserSlice'

const Body = () => {
    const Navigate=useNavigate();
    const dispatch=useDispatch()
    const userdata=useSelector((store)=>store.user)


   
   

    const GetUser=async()=>{

        try{
            if(userdata) return
            const res = await axios.get(Base_URL + "/profile/view",{withCredentials:true})
             dispatch(AddUser(res?.data))
             
        }catch(err){
            console.log(err.message)
           if (err.response?.status === 401) {
                Navigate("/login")
             }
        }

    }

    useEffect(()=>{

        GetUser();

    },[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default Body
