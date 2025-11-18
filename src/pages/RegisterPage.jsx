import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Services/BaseUrl';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() { 
      const navigate=useNavigate();
    const [userName, setuserName] = useState("");
      const [password, setPassword] = useState("");
      const [email,setEmail]=useState('')
      const [error, setError] = useState("");
    
      const handleSubmit =async (e) => {
        e.preventDefault();
    
        if (!userName || !email || !password) {
          setError("Please enter all fields");
          return;
        }
    
        console.log("Login Data:", { userName, password,email });
        
    try {
      const response = await axios.post(`${BASE_URL}/MyApp/register/`, {
        username: userName,
        password: password,
        email:email
      });

      console.log("Registered:", response.data);
      alert("Registration successful! You can now login");
      navigate('/login')
      
     setuserName("");
      setEmail("");
      setPassword("");
      
      
      

    } catch (err) {
      console.log(err);

      if (err.response) {
        setError(err.response.data.detail || "Registration failed");
      } else {
        setError("Network error. Try again.");
      }
    }
    
        // Call API here
        // axios.post("/login", { email, password })
    
        setError("");

};
 return (
    <div>
       <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        
        {error && (
          <p className="text-red-500 mb-3 text-center text-sm">{error}</p>
        )}
        <h2 className='text-center text-2xl font-semibold'>Register</h2>
        <div className=' mt-5'>
            <label htmlFor="email" className=''>Email</label><br />
        <input value={email} type="email" placeholder='Enter your username' className='h-8 border-2 w-full p-4 rounded-l mt-2 mb-2' 
        onChange={(event)=>setEmail(event.target.value)} />
        </div>
        <div className=' mt-2'>
            <label htmlFor="text" className=''>User Name</label><br />
        <input value={userName} type="text" placeholder='Enter your username' className='h-8 border-2 w-full p-4 rounded-l mt-2 mb-2' 
        onChange={(event)=>setuserName(event.target.value)} />
        </div>
         <div>
            <label htmlFor="password">Password</label><br />
        <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" placeholder='Enter your password' className='h-8 border-2 w-full p-4 rounded-l mt-2 ' />
        </div>

        <button type='submit' className='w-full bg-blue-600 mt-6 p-2 rounded' >Login</button>
        
      </form>
    </div>
    </div>
  )
}
