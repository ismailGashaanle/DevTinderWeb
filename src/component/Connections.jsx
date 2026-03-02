import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_URL, default_Profile_Image } from '../utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/ConnectionSlice'
import ShimmerUI from './ShimmerUI'
 
 
 

const Connections = () => {
 const con=useSelector((store)=>store.connection)
 const dispatch=useDispatch();

 
     const getConnections=async()=>{
        try{
        
            const res= await axios.get(Base_URL + "/user/connection",{withCredentials:true});
           // console.log(res.data.friends)

        //   dispatch(res.friends)
        dispatch(addConnections(res.data.friends)) 

        }catch(err){
          console.log(err.response?.data || err.message);
        }
    }


    useEffect(()=>{
        getConnections();
    },[])


     if(!con) return <div className='w-screen'><ShimmerUI className="w-screen" /></div>;
     if(con.length === 0) return <h1>Not Found Connections</h1>
   
   
  return (
   
    <div className='flex gap-2 cursor-pointer flex-col w-6/12 justify-center p-3 items-center'>
        <h1 className='text-3xl font-bold text-white'>friends</h1>
    
    {
        con.map((user)=>(
            <div key={user._id} className='bg-base-300 p-2  rounded-lg flex flex-col gap-2  w-full'>

            <img 
            className="w-20 h-20 rounded-full object-cover"
            src={default_Profile_Image || user?.photoURL}
            alt={user.firstName}
            />
            <div className='flex gap-2 items-center'>
                <h1>{user.firstName}</h1>
                <p>{user.lastName}</p>
            </div>

            <div className='flex gap-2 items-center'>
                <h1>{user.Age}</h1>
                <p>{user.Gender}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <h1>{user.skills.join(' ')}</h1>
              
            </div>

            </div>
        ))
    }
    
    </div>
  )
}

export default Connections
