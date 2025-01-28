 
 "use client"

 import dynamic from 'next/dynamic';
 import Herosection from '@/components/HeroSection';
 import Script from 'next/script'; 
 import './app.css';

// import Aboutsection from '@/components/AboutSection';
  // import ProductSection from '@/components/ProductsSection';

  const DynamicProduct = dynamic(() => import('@/components/ProductsSection'), {
    ssr: false,
    loading: () => <div className="progress mt-1"></div>,
    onLoad: () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = '/_next/static/chunks/app/page.js';
        script.async = true;
        document.body.appendChild(script);
      }
    },
  });
  

  const DynamicAdvertisement = dynamic(() => import('@/components/advertisement'), {
    ssr: false,
    loading: () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = '/_next/static/chunks/app/page.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  })

  // const DynamicMouseinteraction = dynamic(()=> import('@/components/MouseInteraction'),{
  //   ssr: false,
  //   loading: () => <p>Loading...</p>,
  //   onLoad: () => {
  //     if (typeof window !== 'undefined') {
  //       const script = document.createElement('script');
  //       script.src = '/_next/static/chunks/app/page.js';
  //       script.async = true;
  //       document.body.appendChild(script);
  //     }
  //   }
  // })
  
  // const DynamicAbout = dynamic(() => import('@/components/AboutSection'), {
  //   ssr: false,
  //   loading: () => <p>Loading...</p>,
  //   onLoad: () => {
  //     if (typeof window !== 'undefined') {
  //       const script = document.createElement('script');
  //       script.src = '/_next/static/chunks/app/page.js';
  //       script.async = true;
  //       document.body.appendChild(script);
  //     }
  //   },
  // });

  const DynamicFooter = dynamic(() => import('@/components/FooterSection'), {
    ssr: false,
    // loading: () => <p>Loading...</p>,
    loading: () => <div className="progress mt-1"></div>,
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
    loading: () => <div className="progress mt-1"></div>,
    onLoad: () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = '/_next/static/chunks/app/page.js';
        script.async = true;
        document.body.appendChild(script);
    }
  },
  })

  const DynamicChoose = dynamic(()=> import('@/components/chooseUs'),{
    ssr:false,
    loading: () => <div className="progress mt-1"></div>,
    onLoad: () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = '/_next/static/chunks/app/page.js';
        script.async = true;
        document.body.appendChild(script);
      }
    },
  })

  const DynamicHeader = dynamic(()=> import('@/components/headerNotice'),{
    ssr:false,
    loading: () => <div className="progress mt-1"></div>,
    onLoad: () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = '/_next/static/chunks/app/page.js';
        script.async = true;
        document.body.appendChild(script);
      }
    },
  })

  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      window.gtag('event', 'click', {
        event_category: 'interaction',
        event_label: 'launch_button',
        value: 'Clicked Launch Button',
      });
    }
  };


export default function Home() {
  return (
    <main className="flex min-h-screen antialiased flex-col items-center bg-[#ffeee2] p-0">

<Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GFYRQC9K5T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GFYRQC9K5T', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

     <DynamicHeader/>
    <Herosection/>
    {/* <Aboutsection/> */}
    {/* <DynamicAbout/> */}
    {/* <ProductSection/> */}
    {/* <DynamicAdvertisement/> */}
    <DynamicProduct/>
    {/* <DynamicTestimonial/> */}
    <DynamicTestimonial/>
    {/* <DynamicMouseinteraction/> */}
    <DynamicChoose/>
    <DynamicFooter/>
      <p>Our Online Store is Launching Soon....Relish the Dessert from the comfort of your Home</p> 
     
    </main>
  );
}

