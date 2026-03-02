import React from 'react'
import UserCard from './UserCard'
import ShimmerUI from './ShimmerUI';

const UserList = ({user}) => {
     if (!user || user.length === 0) return <ShimmerUI/>;

  return (
    <div className='flex gap-2 items-center justify-center my-6 flex-col'>
   
   {
    user.map((feed)=>(
        <UserCard key={feed._id} user={feed} />
    ))
   }
      
    </div>
  )
}

export default UserList
