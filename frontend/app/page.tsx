import Header from '@/app/components/Header'
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full h-full bg-blue-200">
      <Header/>
      <Hero/>
    </main>
  );
}
