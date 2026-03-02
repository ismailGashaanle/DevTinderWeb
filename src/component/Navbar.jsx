import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RemoveUser } from '../utils/UserSlice'
import axios from 'axios'
import { Base_URL, default_Profile_Image } from '../utils/Constant'

const Navbar = () => {
// const userLogout=useSelector((store)=>store?.userLogout)
    const User=useSelector((store)=>store.user)
    const dispatch=useDispatch();
    const Navigate=useNavigate()

    
        
      const HandleLogout=async()=>{
        try{const userLogout = await axios.post(Base_URL +'/logout',{},{withCredentials:true});
         dispatch(RemoveUser())
        return  Navigate("/login")

        }catch(err){
        console.log(err.message)
    }
        


    }


  
 

  return (
      
         <div className="navbar bg-base-300 px-4 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
  <div className="flex  mx-10">
    
    
    {
        User  &&
           <div className="dropdown dropdown-end  justify-end flex gap-2 items-center">
          
               <div className='w-2/12 flex gap-2 items-center'>
                <span>{User?.firstName}</span>
              <img
              className='rounded-full mr-10'
            alt="user photo image"
              src={default_Profile_Image || User?.photoURL} />
                
                 </div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full flex gap-2 items-center">
        
              
         
        
        </div>
      
      </div>
      <ul
        tabIndex="-1"
        className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-20 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connection">friends</Link></li>
        <li><Link to="/requests">requests</Link></li>
        <li onClick={HandleLogout}><Link>Logout</Link></li>
      </ul>
    </div>
        
    }
 
  </div>
</div>
    
  )
}

export default Navbar
