/* eslint-disable react/no-unescaped-entities */
'use client' 
import React, { useState } from 'react'
import Header from '../components/Header';
import {signIn} from 'next-auth/react'
 
 export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        
        try {
            const response = fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                console.log("Login successful");
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

   return (
     <>
        <Header/>
        <div className='flex justify-center items-center h-screen bg-gradient-to-b from-mainSecondColor to-mainColor'>
        <form className='flex flex-col bg-gray-500 bg-opacity-45 rounded-lg
         items-center justify-center w-[500px] min-h-[400px] gap-3' onSubmit={handleLogin}>
          <h1 className='text-white'>Enter your account</h1>
            <input type="email" placeholder='email' className='rounded-lg px-1 bg-gray-600 border-solid border-2' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password' className='rounded-lg px-1 bg-gray-600 border-solid border-2' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
            <p>Don't have your account yet? Go to signup: </p> <a href="/register" className='text-blue-500'>Register</a>	
        </form>
        </div>
     </>
   )
 }
 