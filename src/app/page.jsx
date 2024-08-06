
import dynamic from 'next/dynamic';
import Herosection from '@/components/HeroSection';
import './globals.css'

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

  const DynamicFooter = dynamic(() => import('@/components/FooterSection'), {
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

  const DynamicTestimonial = dynamic(() => import('@/components/Testimonial'),{
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
  })




export default function Home() {
  return (
    <main className="flex min-h-screen antialiased flex-col items-center p-0">
     
    <Herosection/>
    {/* <Aboutsection/> */}
    <DynamicAbout/>
    {/* <ProductSection/> */}
    <DynamicProduct/>
    {/* <DynamicTestimonial/> */}
    <DynamicTestimonial/>
    <DynamicFooter/>
      <p>Our Online Store is Launching Soon....Relish the Dessert from the comfort of your Home</p> 
      <p>....Application Under Development</p>
    </main>
  );
}

