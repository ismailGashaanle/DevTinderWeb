import axios from "axios";
import React, { useState } from "react";
import { Base_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addSignUp } from "../utils/SingUpSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

const dispatch=useDispatch()
const navigate=useNavigate();
const   [firstName,setfirstname]=useState("")
const   [lastName,setlastName]=useState("")
const   [Age,setAge]=useState("")
const   [location,setLocation]=useState("")
const   [DOB,setDOB]=useState("")
const   [Gender,setGender]=useState("")
const   [phone,setPhone]=useState("")
const   [photoURL,setPhotoURL]=useState("")
const   [skills,setSkills]=useState("")
const   [email,setemail]=useState("")
const   [password,setpassword]=useState("")
const [ErrorMessage,setErrorMessage]=useState(null)


    const AddSignUpRegister=async(e)=>{
      e.preventDefault();

        try{

            const res= await axios.post(Base_URL + "/signup",{
               firstName,
                lastName,
                Age,
                DOB,
                email,
                password,
                Gender,
                photoURL,
                location,
                phone,
                skills

            },{withCredentials:true})


            console.log(res.data.user)

     dispatch(addSignUp(res.data.user))
 setErrorMessage("")
   return  navigate("/login")

        }catch (Err) {
  if (Err.response) {
    setErrorMessage(Err.response.data?.message || "Server error");
  } else {
    setErrorMessage("Network error. Please try again.");
  }
}

    }



  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center p-4 ">
   
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-8 overflow-scroll relative">
       {
        ErrorMessage ?  <button className="text-sm rounded-lg  text-white px-4 py-2 absolute top-16 left-64 bg-red-500 font-bold text-center text-gray-800 ">
           {ErrorMessage ?ErrorMessage:null}
        </button> :null
       }
     
     
       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>
     

        <form onSubmit={AddSignUpRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e)=>setfirstname(e.target.value)}
              placeholder="Munasar"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
               value={lastName}
               onChange={(e)=>setlastName(e.target.value)}
              placeholder="Khadar Yusuf"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Date of Birth
            </label>
            <input
                value={DOB}
                  onChange={(e)=>setDOB(e.target.value)}
              type="date"
              name="DOB"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Age
            </label>
            <input
                value={Age}
                onChange={(e)=>setAge(e.target.value)}
              type="number"
              name="Age"
              placeholder="23"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              placeholder="roooblee@gmail.com"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Location
            </label>
            <input
              type="text"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
              name="location"
              placeholder="Erigavo"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Phone
            </label>
            <input
               value={phone}
               onChange={(e)=>setPhone(e.target.value)}
              type="text"
              name="phone"
              placeholder="764344"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Gender
            </label>
            <select
              name="Gender"
              value={Gender}
              onChange={(e)=>setGender(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-semibold text-gray-600">
              Skills
            </label>
            <input
              type="text"
              value={skills}
               onChange={(e)=>setSkills(e.target.value)}
              name="skills"
              placeholder="e.g React, Node"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Photo URL */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600">
              Profile Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e)=>setPhotoURL(e.target.value)}
              name="photoURL"
              placeholder="https://example.com/photo.jpg"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
               value={password}
               onChange={(e)=>setpassword(e.target.value)}
              type="password"
              name="password"
              placeholder="********"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 text-black ring-1 ring-gray-300 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
             type="submit"
              className="w-full bg-green-600 cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;