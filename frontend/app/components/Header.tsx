import React from 'react'
import cyberGenLogo from '@/public/assets/logo.png'
import Image from 'next/image'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='flex justify-between items-center
     bg-gradient-to-br from-blue-200 to-blue-700 h-32 px-3'>
      <Image src={cyberGenLogo} className="w-20 rounded-full"  alt="logo" />
      <Nav/>
      <button>Login</button>
    </header>
  )
}
