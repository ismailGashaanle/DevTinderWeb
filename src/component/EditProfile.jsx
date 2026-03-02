
import React, { useState } from 'react'
import UserCard from './UserCard';
import { Base_URL, default_Profile_Image } from '../utils/Constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AddUser } from '../utils/UserSlice';

const EditProfile = ({user}) => {
    if(!user) return null;
    const dispatch=useDispatch()
    const [firstName,setfirstName]=useState(user.firstName)
    const [lastName,setlastName]=useState(user.lastName)
    const [Age,setAge]=useState(user.Age)
    const [photoURL,setphotoURL]=useState(user.photoURL)
    const [skills,setskills]=useState(user.skills)
    const [location,setlocation]=useState(user.location)
    const [Gender,setGender]=useState(user.Gender)
    const [phone,setphone]=useState(user.phone)
     
    const [showMesssageUpdateSuccess,seshowMesssageUpdateSuccess]=useState(false)


    const SavedProfile=async()=>{
       try{
        const res = await axios.patch(Base_URL + '/profile/edit',{
            firstName,
            lastName,
            photoURL,
            phone,
            skills,
            Age,
            location
        },{withCredentials:true})
            
         dispatch(AddUser(res.data.data))
           seshowMesssageUpdateSuccess(true)
         setTimeout(()=>{
              
                seshowMesssageUpdateSuccess(false)
             
         },2000)
         
 
       }catch(err){
           console.log(err.response.data)
       }

    }



  return (
   <div className='flex gap-2 items-center justify-center '>

     {showMesssageUpdateSuccess &&  <div className="toast absolute top-12 toast-center">

  <div className="alert alert-success">
    <span className='text-white font-bold'> update profile successfully.</span>
  </div>
   

</div>}

     <div className='my-2 mx-3  w-5/12 '>
     <fieldset className="fieldset bg-base-300 w-full border-base-300 rounded-box  border p-4 overflow-auto">
         <label className="label text-white font-bold text-2xl py-2">Edit profile</label>
 <form onSubmit={(e)=>e.preventDefault()} className='overflow-auto'>
     {/* <legend className="fieldset-legend text-center p-4">Edit profile</legend> */}
 
  <div className="flex gap-2 items-center">

  <span className='flex flex-col w-full'>  
    <label className="label py-2 text-sm">FirstName</label>
  <input type="text" className="input" placeholder=""
  value={firstName}
  onChange={(e)=>setfirstName(e.target.value)}
   />
  </span>
 
  <span className='flex flex-col w-full'>  
    <label className="label py-2 text-sm">lastName</label>
  <input type="text" className="input" placeholder=""
  value={lastName}
  onChange={(e)=>setlastName(e.target.value)}
   />
  </span>
 
  

 
  </div>

 

  <div className="flex gap-2 items-center">

  <span className='flex flex-col w-full'>  
    <label className="label py-2 text-sm">Age</label>
  <input type="text" className="input" placeholder=""
  value={Age}
  onChange={(e)=>setAge(e.target.value)}
   />
  </span>
 
  <span className='flex flex-col w-full'>  
    <label className="label py-2 text-sm">location</label>
  <input type="text" className="input" placeholder=""
  value={location}
  onChange={(e)=>setlocation(e.target.value)}
   />
  </span>
 
  

 
  </div>




  <div className="flex gap-2 items-center">

  <span className='flex flex-col w-full'>  
    <label className="label py-2 text-sm">phone</label>
  <input type="text" className="input" placeholder=""
  value={phone}
  onChange={(e)=>setphone(e.target.value)}
   />
  </span>
  <span className='flex flex-col w-full'>  
    <label className="label py-2 text-sm">Gender</label>
  <input type="text" className="input" placeholder=""
  value={Gender}
  onChange={(e)=>setGender(e.target.value)}
   />
  </span>
 

 
  

 
  </div>



   <div className="flex gap-2 items-center">

  <span className='flex flex-col w-full'>  
    <label className="label py-2 text-sm">photo</label>
  <input type="text" className="input" placeholder=""
  value={photoURL}
  onChange={(e)=>setphotoURL(e.target.value)}
   />
  </span>
 
 
 
  <span className='flex flex-col w-full'>  
    <label className="label py-2 text-sm">skills</label>
  <input type="text" className="input" placeholder=""
  value={skills}
  onChange={(e)=>setskills(e.target.value)}
   />
  </span>
  

 
  </div>

 
 
 

  <button className='my-2 py-2 px-4 text-center bg-blue-500 cursor-pointer text-white font-bold text-lg rounded-lg' onClick={SavedProfile} >Save profile</button>
 </form>
</fieldset>
    </div>
    

      <div className="card bg-base-300 w-66 shadow-sm flex items-center py-2  justify-center gap-2 flex-col">
      
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
        </h2>
        <p>{skills}</p>
        <p>{location}</p>
        <p>{Gender}</p>
        <p>{phone}</p>
         
      </div>
    </div>


   </div>
  )
}

export default EditProfile
