import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_URL } from '../utils/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/FeedSlice'
import UserList from './UserList'

 
const Feed = () => {

    const feeds=useSelector((store)=>store.feed)
    const dispatch=useDispatch();  
 

    const gedFeeds= async()=>{

        if(feeds) return

        try{
             const  feedUser= await axios(Base_URL + "/feed",{withCredentials:true});
              dispatch(addFeed(feedUser.data))

        }catch(err){
         //handle error
        }

    }
   

    useEffect(()=>{
        <h1>loading......</h1>
        gedFeeds();
    },[])

  
   
 



  return (
    <div>
      <UserList user={feeds}/>
    </div>
  )
}

export default Feed




