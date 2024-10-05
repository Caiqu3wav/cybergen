import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { CgProfile } from "react-icons/cg";
import { BsWatch } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { GiTrade } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean,
}

export default function ProfileModal({isOpen}: ModalProps) {

    return (
      <>
      {isOpen && (
    <div className='absolute top-20 right-6 gap-6 bg-white text-black p-4 rounded-lg shadow-lg'>
      <div className='flex flex-col gap-2'>
      <Link href="" className='flex items-center'><CgProfile size={20}/> <strong className='ml-2'>Profile</strong></Link>
              <hr />
      <Link href="" className='flex items-center'><BsWatch size={20}/> <strong className='ml-2'>WatchList</strong></Link>
      <hr />
      <Link href="" className='flex items-center'><GiTrade size={20}/> <strong className='ml-2'>Deals</strong></Link>
      <hr />
      <Link href="" className='flex items-center'><BsTools size={20}/> <strong className='ml-2'>Create</strong></Link>
      <hr />
      <Link href="" className='flex items-center'><IoSettings size={20}/> <strong className='ml-2'>Settings</strong></Link>
      </div>
                <button onClick={() => signOut()} className='mt-4 text-red-500'>Sign Out</button>
    </div>
    )}
    </>
  )
}
