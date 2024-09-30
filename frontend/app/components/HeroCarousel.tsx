'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { nfts } from '../api/nfts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/caroulsel.css'

export default function HeroCarousel() {


  return (
    <div className="flex w-full px-[240px] h-fit min-h-52 items-center justify-center">
      <Swiper modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false
        }}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={40}
        navigation
        pagination={{ clickable: true }} className='flex w-full h-full'>
                          {nfts.map((nft) => (
            <SwiperSlide className='min-h-fit py-8' key={nft.id}>
                    <div className='flex flex-col items-center gap-3 justify-center h-fit text-white'>
                        <img src={nft.image} alt={nft.name} className='w-[280px] h-[280px]' />
                        <p className='text-white'>{nft.name}</p>
                        <p className='text-white'>{nft.price}</p>
                    </div>
            </SwiperSlide>
                            ))}
          </Swiper>
    </div>
  );
}
