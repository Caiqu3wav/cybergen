/* eslint-disable react/no-unescaped-entities */
import HeroCarousel from './HeroCarousel';

export default function Hero() {
  return (
    <section className="hero-sec min-h-[600px] bg-opacity-65">
      <div className="flex flex-col items-center gap-3 text-white">
      <h1>NTF'S</h1>
      <p>The modern decentralizated generation that provides
        trade and merch of modern products and coins
      </p>
      <HeroCarousel/>
      </div>
    </section>
  )
}
