/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import { LiaEyeSolid } from "react-icons/lia"
import { BsEyeSlashFill } from "react-icons/bs"
import { useRouter } from 'next/navigation'
import { IoReturnUpBackSharp } from "react-icons/io5";

interface SignUpFormProps {
    setIsLoading: (isLoading: boolean) => void;
    setIsOpen: (isOpen: boolean) => void;
    setLoginFormVisible: (isOpen: boolean) => void;
}

 export default function SignUp({setIsLoading, setIsOpen, setLoginFormVisible}: SignUpFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupResult, setSignupResult] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        setSignupResult('As senhas não coincidem.');
        return;
    }

    setIsLoading(true);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        setIsLoading(false);

        if (!response || !response.ok) {
            const errorData = await response.json();
            const errorText = errorData?.message || 'Falha ao tentar fazer cadastro';
            setErrorMessage(errorText);
            return;
          }

        setSignupResult('Cadastro realizado com sucesso! Redirecionando para login...');
        setTimeout(() => {
            router.refresh();
        }, 2000);
    } catch (error) {
      setIsLoading(false);
        setErrorMessage('Erro ao fazer cadastro. Tente novamente.');
    }
};

const changeToLogin = () => {
    setIsOpen(false)
    setLoginFormVisible(true);
}

   return (
        <form className='flex flex-col items-center justify-center gap-3' onSubmit={handleSignup}>
            {signupResult ? (
                <p style={{ color: 'green' }}>{signupResult}</p>
            ) : errorMessage ? (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            ) : (
                <>
            <button onClick={() => setIsOpen(false)}><IoReturnUpBackSharp size={25}/></button>
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
                    <button type='submit'>Sign</button>
            <p>Already have your account yet? Go to login: </p> <button onClick={changeToLogin} className='text-blue-600'>Login</button>
            </>
        )}	
        </form>
   )
 }
