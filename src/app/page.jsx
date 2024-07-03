

 import Herosection from '@/components/HeroSection';
 import Aboutsection from '@/components/AboutSection';
 





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-1">
     
    <Herosection/>
    <Aboutsection/>
    
      <p>Exciting Products and New Offers coming Soon stay tuned</p> 
      <p>....Application Under Development</p>
    </main>
  );
}

