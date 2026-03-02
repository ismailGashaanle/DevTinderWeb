import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_URL, default_Profile_Image } from '../utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/RequestSlice'
import ShimmerUI from './ShimmerUI'
 

const Requests = () => {
     const UsersReuqests=useSelector((store)=>store.request)
  const dispatch=useDispatch();


       const ReviewReuqest=async(status,_id)=>{

        const res=await axios.post(Base_URL + "/request/review/" + status + "/" + _id ,{},{withCredentials:true})
 console.log(res.data.data)
    dispatch(removeRequest(_id))

        try{

        }catch(err){
            console.log(err.response.data.data)
        }

       }



    const GetFetchUserRequestRecieved= async(status,_id)=>{

        try{
            const res=await axios.get(Base_URL +"/user/requests/received",
              {withCredentials:true} );
         
                dispatch(addRequest(res.data.data))
                //console.log(res.data.data)

        }catch(Err){
            console.log(Err.response.data)
        }


    }

    useEffect(()=>{
  GetFetchUserRequestRecieved();

    },[])
 
        if(!UsersReuqests) return <h1>Not Found requests</h1>
       
 

  return (
       <div className='flex gap-2 cursor-pointer flex-col w-full justify-center p-3 items-center'>
           <h1 className='text-3xl font-bold text-white'>Requests</h1>
       
       
           {
            UsersReuqests.map((user)=>{
                const {firstName,lastName,Gender,location,Skilss,Age,photoURL,_id}=user.fromUserId
               return(
                <div key={_id} className='bg-base-300 rounded-lg w-6/12  px-2 justify-between py-2 flex gap-2 items-center'>
                  <img src={photoURL} alt="image profile" className='w-26 rounded-full' />
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center text-sm font-bold text-white'> <h1> {firstName}</h1>  <h1>{lastName}</h1> </div>
                  <div className='flex gap-2 items-center text-sm font-bold text-white'> <h1> {Age}</h1>  <h1>{Gender}</h1> </div>
                  <div className='flex gap-2 items-center text-sm font-bold text-white'> <h1> {Skilss}</h1>  <h1>{location}</h1> </div>
                  <div className='flex gap-2 items-center'>
                    <button className='rounded-lg py-3 px-4 text-center cursor-pointer shadow bg-red-500 text-white'
                    
                    onClick={()=>ReviewReuqest("rejected",user._id)}

                    >rejected</button>
                    <button className='rounded-lg py-3 px-4 text-center cursor-pointer shadow bg-blue-500 text-white'
                     onClick={()=>ReviewReuqest("accepted",user._id)}
                    >accepted</button>
                  </div>
                  </div>
                 
                </div>
               )
            })
           }
       
       </div>
  )
}

export default Requests
