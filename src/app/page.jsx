

 import Herosection from '@/components/HeroSection';
 import Aboutsection from '@/components/AboutSection';
 import ProductSection from '@/components/ProductsSection';





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-1">
     
    <Herosection/>
    <Aboutsection/>
    <ProductSection/>
      <p>Exciting Products and New Offers coming Soon stay tuned</p> 
      <p>....Application Under Development</p>
    </main>
  );
}

