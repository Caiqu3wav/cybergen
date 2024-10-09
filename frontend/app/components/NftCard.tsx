import React from 'react'
import { nfts } from '../api/nfts'
import Image from 'next/image'

export default function NftCard() {
  return (
    <>
    {nfts.map((nft) => (
    <div key={nft.id} className='w-[200px] h-[130px] mt-2 bg-black bg-opacity-30 flex flex-col items-center
     justify-between bg-black- rounded-lg px-2 py-3 self-center'>
        <Image src={`/${nft.image}`} width={11} height={11} className='w-11 h-11' alt={nft.name}/>
        <div className='flex flex-col gap-2'>
        <h1>{nft.name}</h1>
        <p className='text-green-500 self-center'>${nft.price}</p>
        </div>
    </div>
          ))}
    </>
  )
}
