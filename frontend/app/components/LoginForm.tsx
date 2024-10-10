/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { signIn } from 'next-auth/react';
import { BsEyeSlashFill } from "react-icons/bs";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { LiaEyeSolid } from "react-icons/lia";
import React, { useState } from 'react';

interface LoginFormProps {
    setIsLoading: (isLoading: boolean) => void;
    setIsOpen: (isOpen: boolean) => void;
    setSignupFormVisible: (isOpen: boolean) => void;
}

export default function LoginForm({ setIsLoading, setIsOpen, setSignupFormVisible }: LoginFormProps) {
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!isValidEmail(email)) {
            setErrorMessage("Email inválido");
            return;
        }

        if (!password || password.length < 8) {
            setErrorMessage("Senha inválida");
            return;
        }

        setIsLoading(true);

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
                callbackUrl: '/'
            });

            console.log("Sign in Response: ", res);

            if (!res || res.error || res.ok !== true) {
                setErrorMessage("Email ou senha inválidos");
            } else {
                setSuccessMessage("Usuário logado com sucesso!");
            }
        } catch (error: any) {
            setErrorMessage("Email ou senha inválidos");
        } finally {
            setIsLoading(false);
        }
    };

    const changeToSignUp = () => {
        setIsOpen(false)
        setSignupFormVisible(true);
    }

    return (
        <form className='flex flex-col items-center justify-center gap-3' onSubmit={handleLogin}>

            {errorMessage ?   (<> 
            <button type='button' onClick={() => setIsOpen(false)}><IoReturnUpBackSharp size={25}/></button>
            <p style={{ color: 'red' }}>{errorMessage}</p>
  </> )
             : successMessage ?  (
                <>
            <button type='button' onClick={() => setIsOpen(false)}><IoReturnUpBackSharp size={25}/></button>
             <p style={{ color: 'green' }}>{successMessage}</p> 
             </>
            ) : (
                <>
            <button type='button' onClick={() => setIsOpen(false)}><IoReturnUpBackSharp size={25}/></button>
            <h1 className='text-white'>Enter your account</h1>
            <label>Email:
                <input className="rounded-lg"
                    type="email"
                    name="email"
                    required
                />
            </label>            <label>
                Password:
                <input className="rounded-lg"
                    type={!showPassword ? "password" : "text"}
                    name="password"
                    required
                />
                <button type='button' onClick={() => setShowPassword(!showPassword)} style={{ backgroundColor: 'transparent' }} id="togglePassword">
                    {showPassword ? <BsEyeSlashFill /> : <LiaEyeSolid />}
                </button>
            </label>
            <button type='submit'>Login</button>
            <p>Don't have your account yet? Go to signup: </p> <button type='button' onClick={changeToSignUp} className='text-blue-600'>Register</button>
            </>
        )}
        </form>
    )
}