'use client'
import React, { useState } from 'react'
import cyberGenLogo from '@/public/assets/logo.png'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'
import { IoAccessibility } from "react-icons/io5"
import {useSession} from 'next-auth/react'
import profileFic from '@/public/assets/evolutive.jpg'
import ProfileModal from './ProfileModal'
import LoginModal from './LoginModal'

export default function Header() {
const {data: session} = useSession();
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <header className='flex justify-between items-center
     bg-gradient-to-b from-blue-300 to-black h-32 px-3'>
      <Link href="/" className='flex items-center border-solid border-r-2 rounded-3xl border-white pr-6 h-full'>
      <Image src={cyberGenLogo} className="w-20 rounded-full"  alt="logo" />
      </Link>
      <Nav/>
      <div className='w-fit'>
      {!session ? (
        <>
        <button onClick={() => setLoginModal(!loginModal)} className='w-[100px] flex items-center justify-around h-8 
      rounded-lg bg-gradient-to-br from-purple-600 to-black text-white'>
        <p>Login</p> 
      <IoAccessibility size={20}/>
      </button>
      {loginModal && <LoginModal isOpen={loginModal} setIsOpen={setLoginModal}/>}
      </>
    ) : (
        <>
        <button onClick={() => setProfileModalOpen(!profileModalOpen)} className='mr-6'>
          <Image src={profileFic} alt='profile pic' className='rounded-full w-[60px]'/>
        </button>
      {profileModalOpen && <ProfileModal isOpen={profileModalOpen}/>}
      </>
    )
  }
      </div>
    </header>
  )
}
