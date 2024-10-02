/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import { LiaEyeSolid } from "react-icons/lia"
import { BsEyeSlashFill } from "react-icons/bs"
import { useRouter } from 'next/navigation'

 export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupResult, setSignupResult] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        setSignupResult('As senhas não coincidem.');
        return;
    }

    setIsLoading(true);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_NODE_API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        setIsLoading(false);

        if (!response.ok) {
            throw new Error('Falha no cadastro');
        }

        setSignupResult('Cadastro realizado com sucesso! Redirecionando para login...');
        setTimeout(() => {
            router.push('/auth/login');
        }, 2000);
    } catch (error) {
      setIsLoading(false);
        setSignupResult('Erro ao fazer cadastro. Tente novamente.');
    }
};

   return (
     <>
        <Header/>
        <div className='flex justify-center items-center h-screen bg-gradient-to-b from-mainSecondColor to-mainColor'>
        {isLoading ? (
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        ) : (
        <form className='flex flex-col bg-gray-500 bg-opacity-45 rounded-lg
         items-center justify-center w-[500px] min-h-[400px] gap-3' onSubmit={handleSignup}>
          <h1 className='text-white'>Create your account</h1>
          <label>Name:
                    <input className="rounded-lg bg-gray-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                        type="name"
                        name="name"
                        required
                    />
                </label> 
          <label>Email:
                    <input className="rounded-lg bg-gray-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        required
                    />
                </label>
                            <label>
              Password:
                    <input className="rounded-lg bg-gray-400"
                        type={!isVisible ? "password" : "text"}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button onClick={() => setIsVisible(!isVisible)} style={{ backgroundColor: 'transparent' }} type="button" id="togglePassword">
                       {isVisible ? <BsEyeSlashFill /> : <LiaEyeSolid />}
                    </button>
                </label>     
                <label>Confirmar Senha: 
                    <input className='rounded-lg bg-gray-400'
                        type={!isVisible ? "password" : "text"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button onClick={() => setIsVisible(!isVisible)} style={{ backgroundColor: 'transparent' }} type="button">
                       {isVisible ? <BsEyeSlashFill /> : <LiaEyeSolid />}
                    </button>
                </label>
                {signupResult && <p style={{ color: 'red' }}>{signupResult}</p>}
                       <button type='submit'>Sign</button>
            <p>Already have your account yet? Go to login: </p> <a href="/login" className='text-white'>Login</a>	
        </form>
         )}
        </div>
     </>
   )
 }
 