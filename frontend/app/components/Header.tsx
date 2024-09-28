import React from 'react'
import cyberGenLogo from '@/public/assets/logo.png'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'
import { IoAccessibility } from "react-icons/io5";

export default function Header() {
  return (
    <header className='flex justify-between items-center
     bg-gradient-to-b from-blue-300 to-black h-32 px-3'>
      <Link href="/" className='flex items-center border-solid border-r-2 rounded-3xl border-white pr-6 h-full'>
      <Image src={cyberGenLogo} className="w-20 rounded-full"  alt="logo" />
      </Link>
      <Nav/>
      <div className='w-fit opacity-60'>
      <button className='w-[100px] flex items-center justify-around h-8 
      rounded-lg bg-gradient-to-br from-purple-600 to-black text-white'>
        <p>Login</p> 
      <IoAccessibility size={20}/>
      </button>
      </div>
    </header>
  )
}
