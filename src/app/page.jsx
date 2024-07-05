
import dynamic from 'next/dynamic';
import Herosection from '@/components/HeroSection';
// import Aboutsection from '@/components/AboutSection';
  // import ProductSection from '@/components/ProductsSection';

  const DynamicProduct = dynamic(() => import('@/components/ProductsSection'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
    onLoad: () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = '/_next/static/chunks/app/page.js';
        script.async = true;
        document.body.appendChild(script);
      }
    },
  });
  
  const DynamicAbout = dynamic(() => import('@/components/AboutSection'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
    onLoad: () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = '/_next/static/chunks/app/page.js';
        script.async = true;
        document.body.appendChild(script);
      }
    },
  });






export default function Home() {
  return (
    <main className="flex min-h-screen antialiased flex-col items-center  p-1">
     
    <Herosection/>
    {/* <Aboutsection/> */}
    <DynamicAbout/>
    {/* <ProductSection/> */}
    <DynamicProduct/>
      <p>Exciting Products and New Offers coming Soon stay tuned</p> 
      <p>....Application Under Development</p>
    </main>
  );
}

