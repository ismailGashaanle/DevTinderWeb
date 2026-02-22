import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [email,setemail]=useState("naasir@gmail.com");
    const [password,setpassword]=useState("Hafsa!@");
  


    const handleLogin = async()=>{

        try{
            axios.post("http://localhost:3000/login",{
                email,
                password
            },{withCredentials:true});

        }catch(err){
            console.log(err.message)
        }

    }

  return (
    <div className='flex justify-center h-full w-full my-4'>
     <div className='my-2 w-4/12'>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-white w-full flex gap-2  flex-col text-black shadow-2xl rounded-lg ring-1 p-4'>


            <div className='flex flex-col'>
                <label className='py-2'>Email </label>
            <input className='px-4 py-2 rounded-sm focus:outline-none ring-1 ring-gray-300' placeholder='nimco@gmail.com'
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
            </div>


            <div className='flex flex-col'>
                <label className='py-2'>password </label>
            <input className='px-4 py-2 rounded-sm focus:outline-none ring-1 ring-gray-300' placeholder='********'
             value={password}
             onChange={(e)=>setpassword(e.target.value)}
            />
            </div>

            <button onClick={handleLogin} className='bg-green-600 text-white rounded-lg p-3  cursor-pointer'>login</button>

        </form>
     </div>
    </div>
  )
}

export default Login
