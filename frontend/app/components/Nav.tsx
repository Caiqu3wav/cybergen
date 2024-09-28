import React from 'react'
import SearchInput from '../ui/SearchInput.jsx';

export default function Nav() {
  return (
    <nav className='flex flex-col gap-2 items-center'>
      <SearchInput/>
      <ul className='flex gap-6 items-center'>
        <li>Explore</li>
        <li>About</li>
        <li>MarketPlace</li>
        <li>Collections</li>
        <li>Artists</li>
      </ul>
    </nav>
  )
}
