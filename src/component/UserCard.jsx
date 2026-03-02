import React from 'react'
import { Base_URL, default_Profile_Image } from '../utils/Constant'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeFeed } from '../utils/FeedSlice'

const UserCard = ({user}) => {
    
    if(!user) return null;
    const {firstName,lastName,Gender,Age,location,skills,photoURL,_id}=user
  const dispatch=useDispatch();

    
   const SendRequest=async(status,_id)=>{
    try{
        
        const userRequest=await axios.post(Base_URL + "/request/send/" + status + "/" + _id,{},{withCredentials:true})

           dispatch(removeFeed(_id))

    }catch(err){
          console.log(err.message)
    }
   }





  return (
    <div className="card bg-base-300 w-66 shadow-sm flex items-center py-2  justify-center gap-2 flex-col">
  {/* <figure>
    <img
      src={photoURL} 
      alt="photo profile image" />
  </figure> */}
   <figure>
        <img
        className='rounded-full'
          src={photoURL || default_Profile_Image}
          alt="photo profile"
          onError={(e) => { e.target.src = default_Profile_Image}}
        />
      </figure>
   
  <div className="card-body">
    <h2 className="card-title">
      {firstName + " " + lastName} 
      <div className="badge badge-secondary">{Age}</div>
      <div className="badge badge-secondary">{location}</div>
    </h2>
    <p>{skills}</p>
    <div className="card-actions justify-end"> 
      <button className=" cursor-pointer bg-sky-600 text-white   py-2 ring-1 shadow-lg ring-outline-none px-3 rounded-lg"
       onClick={()=>SendRequest("ignored",_id)}>  ignored </button>
      <button className=" cursor-pointer  bg-pink-400 text-white py-2 ring-1 shadow-lg ring-outline-none px-3 rounded-lg " 
      onClick={()=>SendRequest("interested",_id)}>send request</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
