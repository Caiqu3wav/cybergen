import Header from '@/app/components/sections/Header'
import Hero from './components/sections/Hero';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full h-full bg-blue-200">
      <Header/>
      <Hero/>
    </main>
  );
}
