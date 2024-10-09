import Header from '@/app/components/sections/Header'
import Hero from './components/sections/Hero';
import MainNfts from './components/MainNfts';

export default function Home() {
  const tags = ["All", "Images", "Music", "Collections", "Drops", "Avatars"];


  return (
    <main className="overflow-x-hidden w-full h-full bg-black">
      <Header/>
      <Hero/>
      <div className='flex self-start gap-3 pl-4'>
            {tags.map((tag) => (
                <button key={tag} className='px-4 rounded-lg bg-black bg-opacity-25 text-white'>{tag}</button>
            ))}
        </div>
      <MainNfts/>
    </main>
  );
}
