'use client'
import React from 'react'
import cyberGenLogo from '@/public/assets/logo.png'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'
import { IoAccessibility } from "react-icons/io5"
import {useSession} from 'next-auth/react'
import { VscSignOut } from "react-icons/vsc"

export default function Header() {
  const {data: session} = useSession();


  return (
    <header className='flex justify-between items-center
     bg-gradient-to-b from-blue-300 to-black h-32 px-3'>
      <Link href="/" className='flex items-center border-solid border-r-2 rounded-3xl border-white pr-6 h-full'>
      <Image src={cyberGenLogo} className="w-20 rounded-full"  alt="logo" />
      </Link>
      <Nav/>
      <div className='w-fit opacity-60'>
        {!session ? <Link href="/login" className='w-[100px] flex items-center justify-around h-8 
      rounded-lg bg-gradient-to-br from-purple-600 to-black text-white'>
        <p>Login</p> 
      <IoAccessibility size={20}/>
      </Link> : 
          <button className='w-[100px] flex items-center justify-around h-8 
          rounded-lg bg-gradient-to-br from-purple-600 to-black text-white'><p>SignOut</p> <VscSignOut size={20}/></button>
      }
      
      </div>
    </header>
  )
}
