"use client";

import { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import Image from 'next/image';
import Link from 'next/link';
import Product from '../images/Traditional_pLatest.jpg';
import Product1 from '../images/Ice-Burst-Paan.jpg';
import Product2 from '../images/comingsoon3.jpg';
import specialpaan from '../images/special_flavour.jpg';
import zerosupari from '../images/zero_supari.jpg';
import combo from '../images/comingsoon1.jpg';


import '../components/productsection.css';
const ProductSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then(({ WOW }) => {
        const wow = new WOW({
          live: false
        });
        wow.init();
      });
    }
  }, []);

  return (
    <div className='product_sec bg-[#075156] h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-30'>
      <div className="section-title text-center">
      <span className="wow animate__animated animate__fadeIn large-text 
      " data-wow-duration="1.5s" 
      data-wow-delay="0.2s">
        <h1 className="text-[#f3d36c] font-serif tracking-wider leading-snug">
        Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan
        </h1>
        </span>
        {/* <h2 className="wow animate__animated animate__fadeOut 
        md:mt-0 text-4xl md:text-5xl 
        font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug" 
        data-wow-duration="1.5s" data-wow-delay="0.2s">
          Bringing Back the Authentic Qualities of our Traditional Dessert
        </h2> */}
        {/* <h3 className="wow animate__animated animate__fadeOut 
        md:mt-0 text-md md:text-md 
         bg-clip-text text-[#da371d] italic" 
        data-wow-duration="1.5s" data-wow-delay="0.2s">
          Point or Touch On Anywhere of a Product to Unleash More Details About it
        </h3> */}
      </div>

      <div className="intro_box_main mt-5 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-5">

      {/* Traditional Paan */}
      {/* <div className="intro_box flex flex-wrap items-center">
  <div className='practice-single wow animate__animated animate__fadeInDown'
    data-wow-duration="1.5s" data-wow-delay="0.2s"
    style={{ transition: 'transform 0.3s ease-in-out' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
        inset 0 0 60px whitesmoke,
        inset 20px 0 80px #f0f,
        inset -20px 0 80px #0ff,
        inset 20px 0 300px #f0f,
        inset -20px 0 300px #0ff,
        0 0 50px #fff,
        -10px 0 80px #f0f,
        10px 0 80px #0ff
      `;
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.height = `${textContainer.scrollHeight}px`;
      textContainer.style.transition = 'height 0.5s';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.height = '50px';
      textContainer.style.transition = 'height 0.5s';
    }}
  >
    <div className="header">
      <div className="icon-area">
        <Image src={Product} width={407} height={300} alt="Products" />
      </div>
    </div>
    <div className="body text-center">
      <h4 className="md:mt-0 text-2xl md:text-2xl text-center font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug">
        Traditional Paan
        </h4>
      <div className="text-container overflow-hidden"
       style={{ height: '50px', transition: 'height 0.5s' }}>
        <p className='text-[#f3d36c]'>
          Mostly in India paan is referred to as a digestive aid.
          It has breath-freshening and relaxant properties.
          Most of the time people eat paan after a meal or sometimes they eat at any time of the day.
          There are several general types of paan, including meetha (sweet) paan.
        </p>
        <Link href="/products/traditionalpaan" passHref>
          <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#691a13] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.4s">
            Explore Varieties
          </button>
        </Link>
      </div>
    </div>
  </div>
</div> */}

<div className="intro_box flex flex-wrap items-center">
  <div className='practice-single wow animate__animated animate__fadeInDown'
    data-wow-duration="1.5s" data-wow-delay="0.2s"
    style={{ transition: 'transform 0.3s ease-in-out' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
        0 0 30px 10px rgba(243, 211, 108, 1),   
        0 0 60px 20px rgba(243, 211, 108, 1),   
        0 0 100px 40px rgba(243, 211, 108, 1)
      `;
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = `${textContainer.scrollHeight}px`;
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = '50px';
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
  >
    <div className="header">
      <div className="icon-area">
        <Image src={Product} width={407} height={300} alt="Products" />
      </div>
    </div>
    <div className="body text-center">
      <h4 className="md:mt-0 text-2xl md:text-2xl text-center font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug">
        Traditional Paan
      </h4>
      <div className="text-container overflow-hidden"
        style={{ maxHeight: '50px', transition: 'max-height 0.5s ease-in-out' }}>
        <p className='text-[#f3d36c]'>
          Mostly in India paan is referred to as a digestive aid.
          It has breath-freshening and relaxant properties.
          Most of the time people eat paan after a meal or sometimes they eat at any time of the day.
          There are several general types of paan, including meetha (sweet) paan.
        </p>
        {/* <Link href="/products/traditionalpaan" passHref>
          <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#691a13] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.4s">
            Explore Varieties
          </button>
        </Link> */}
      </div>
    </div>
  </div>
</div>

     {/* Ice-Burst Paan */}
        {/* <div className="intro_box flex flex-wrap items-center">
        <div className='practice-single wow 
        animate__animated animate__fadeInDown' 
        data-wow-duration="1.5s"
         data-wow-delay="0.7s"
         style={{ transition: 'transform 0.3s ease-in-out' }}
         onMouseEnter={(e) => {
           e.currentTarget.style.transform = 'translateY(0)';
           e.currentTarget.style.boxShadow = `
             inset 0 0 60px whitesmoke,
             inset 20px 0 80px #f0f,
             inset -20px 0 80px #0ff,
             inset 20px 0 300px #f0f,
             inset -20px 0 300px #0ff,
             0 0 50px #fff,
             -10px 0 80px #f0f,
             10px 0 80px #0ff
           `;
           const textContainer = 
           e.currentTarget.querySelector('.text-container');
           textContainer.style.height = 
           `${textContainer.scrollHeight}px`;
           textContainer.style.transition = 
           'height 0.5s'
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.transform = '';
           e.currentTarget.style.boxShadow = '';
           const textContainer = 
           e.currentTarget.querySelector('.text-container');
           textContainer.style.height = '50px';
           textContainer.style.transition = 'height 0.5s';
         }}
         >
            <div className="header">
              <div className="icon-area">
                <Image 
                  src={Product1}
                  width={407}
                  height={300}
                  alt="Ice-Burst-Paan"
                />
              </div>
            </div> 
            <div className="body text-center">
              <h4 className="md:mt-0 text-2xl md:text-2xl text-center
               font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug">
                Ice Burst Paan
                </h4>
              <div className= "text-container overflow-hidden"
               style={{height:'50px',transition:'height 0.5s'}}>
                <p className='text-[#f3d36c]'>
                Ice Burst Paan represents a fusion of traditional paan with modern flavors and concepts,
                 appealing to both older generations and younger ones looking for something new and exciting.
                The burst of coolness combined with the sweet and minty flavors provides a refreshing and energizing effect.
                </p>
               
              <Link href="/products/iceburstpaan" passHref>
              <button className="all_products transition ease-in-out delay-150 
              bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#0960a4] 
              duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow 
              animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.2s">
              Explore Varieties
                </button>
              </Link>
              </div>
            </div>  
          </div>
        </div> */}

        {/* Ice-Burst Paan */}
<div className="intro_box flex flex-wrap items-center">
  <div
    className='practice-single wow animate__animated animate__fadeInDown'
    data-wow-duration="1.5s"
    data-wow-delay="0.2s"
    style={{ transition: 'transform 0.3s ease-in-out' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
      0 0 30px 10px rgba(243, 211, 108, 1),   
      0 0 60px 20px rgba(243, 211, 108, 1),   
      0 0 100px 40px rgba(243, 211, 108, 1)
      `;
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = `${textContainer.scrollHeight}px`;
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = '50px';
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
  >
    <div className="header">
      <div className="icon-area">
        <Image 
          src={Product1}
          width={407}
          height={300}
          alt="Ice-Burst-Paan"
        />
      </div>
    </div>
    <div className="body text-center">
      <h4 className="md:mt-0 text-2xl md:text-2xl text-center font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug">
        Ice Burst Paan
      </h4>
      <div className="text-container overflow-hidden"
        style={{ maxHeight: '50px', transition: 'max-height 0.5s ease-in-out' }}>
        <p className='text-[#f3d36c]'>
          Ice Burst Paan represents a fusion of traditional paan with modern flavors and concepts,
          appealing to both older generations and younger ones looking for something new and exciting.
          The burst of coolness combined with the sweet and minty flavors provides a refreshing and energizing effect.
        </p>
        {/* <Link href="/products/iceburstpaan" passHref>
          <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#0960a4] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.2s">
            Explore Varieties
          </button>
        </Link> */}
      </div>
    </div>
  </div>
</div>


        


      {/* Zero Supari Paan */}
<div className="intro_box flex flex-wrap items-center">
      {/* <div
        className="practice-single wow 
        animate__animated animate__fadeInDown 
        transform transition duration-300 ease-in-out"
        data-wow-duration="1.5s"
        data-wow-delay="1.2s"
        style={{ transition: 'transform 0.3s ease-in-out' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = `
            inset 0 0 60px whitesmoke,
            inset 20px 0 80px #f0f,
            inset -20px 0 80px #0ff,
            inset 20px 0 300px #f0f,
            inset -20px 0 300px #0ff,
            0 0 50px #fff,
            -10px 0 80px #f0f,
            10px 0 80px #0ff
          `;
          const textContainer = 
          e.currentTarget.querySelector('.text-container');
          textContainer.style.height = 
          `${textContainer.scrollHeight}px`;
          textContainer.style.transition = 
          'height 0.5s';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.boxShadow = '';
          const textContainer = 
          e.currentTarget.querySelector('.text-container');
          textContainer.style.height = '50px';
          textContainer.style.transition = 'height 0.5s';
        }}
      > */}

<div
    className='practice-single wow animate__animated animate__fadeInDown'
    data-wow-duration="1.5s"
    data-wow-delay="0.2s"
    style={{ transition: 'transform 0.3s ease-in-out' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
      0 0 30px 10px rgba(243, 211, 108, 1),   
      0 0 60px 20px rgba(243, 211, 108, 1),   
      0 0 100px 40px rgba(243, 211, 108, 1)
      `;
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = `${textContainer.scrollHeight}px`;
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = '50px';
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
  >
        <div className="header">
          <div className="icon-area">
            <Image
              src={zerosupari}
              width={407}
              height={300}
              alt="zero-supari-Paan"
            />
          </div>
        </div>
        <div className="body text-center">
          <h4 className="md:mt-0 text-2xl md:text-2xl text-center 
          font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug">
            Zero Supari Paan
          </h4>
          <div className="text-container overflow-hidden transition-height duration-300"
           style={{maxHeight: '50px', transition:'height 0.5s' }}>
            <p className= 'text-[#f3d36c]'>
            Discover the delightful and healthy alternative to traditional paan
            with our Zero Supari Paan. Enjoy the rich flavors and numerous
            health benefits. By choosing our Zero Supari Paan, you improve oral
            and digestive health, avoid addiction, and enhance taste. Freshen
            your breath naturally.
          </p>
          
          {/* <Link href="/products/zerosuparipaan" passHref>
            <button className="all_products transition ease-in-out delay-150 
              bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#4c4029] 
              duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow 
              animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.2s">
              Explore Varieties
            </button>
          </Link> */}
          </div>
        </div>
      </div>
    </div>

       {/* Special Paan */}
       <div className="intro_box flex flex-wrap items-center">
          {/* <div className="practice-single wow 
          animate__animated animate__fadeInUp"
           data-wow-duration="1.5s" data-wow-delay="1.1s"
           style={{transition:'transform 0.3s ease-in-out'}}
           onMouseEnter={(e)=>{
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow =` 
            inset 0 0 60px whitesmoke,
            inset 20px 0 80px #f0f,
            inset -20px 0 80px #0ff,
            inset 20px 0 300px #f0f,
            inset -20px 0 300px #0ff,
            0 0 50px #fff,
            -10px 0 80px #f0f,
            10px 0 80px #0ff
            `;
            const textContainer = 
            e.currentTarget.querySelector('.text-container');
            textContainer.style.height =
            `${textContainer.scrollHeight}px`;
            textContainer.style.transition = 
            'height 0.5s';
           }}
           onMouseLeave = {(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow= "";
            const textContainer = 
            e.currentTarget.querySelector('.text-container');
            textContainer.style.height = '50px';
            textContainer.style.transition = 'height 0.5s';
           }}
           > */}

<div
    className='practice-single wow animate__animated animate__fadeInDown'
    data-wow-duration="1.5s"
    data-wow-delay="0.2s"
    style={{ transition: 'transform 0.3s ease-in-out' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
      0 0 30px 10px rgba(243, 211, 108, 1),   
      0 0 60px 20px rgba(243, 211, 108, 1),   
      0 0 100px 40px rgba(243, 211, 108, 1)
      `;
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = `${textContainer.scrollHeight}px`;
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = '50px';
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
  >
            <div className="header">
              <div className="icon-area">
                <Image
                src={specialpaan}
                width={407}
                height={300}
                alt="special paan"
                />
              </div>
            </div>
            <div className="body text-center">
              <h4 className="md:mt-0 text-2xl md:text-2xl text-center 
              font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug">
                Special Paan
                </h4>
              <div className="text-container overflow-hidden transition-height duration-300"
                 style={{maxHeight: '50px',transition: 'height 0.5s'}}>
                  <p className= 'text-[#f3d36c]'>
                Discover the delightful and healthy alternative to traditional paan with our Special Paan. 
                Enjoy the rich flavors and numerous health benefits. 
                By choosing our Special Paan, you improve oral and digestive health, avoid addiction, 
                and enhance taste. 
                Freshen your breath naturally. 
              </p>
                 
              {/* <Link href="/products/specialpaan" passHref>
              <button className="all_products transition ease-in-out delay-150 
              bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#ff636a] 
              duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow 
              animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.4s">
                Explore Varieties
                </button>
              </Link> */}
              </div>
            </div>
          </div>
        </div> 


         {/* Combo Paan */}
        <div className="intro_box flex flex-wrap items-center">
          {/* <div className="practice-single
           wow animate__animated 
           animate__fadeInUp" 
           data-wow-duration="1.5s" 
           data-wow-delay="1s"
           style={{transition:'transform 0.3s ease-in-out'}}
           onMouseEnter={(e)=>{
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow =` 
            inset 0 0 60px whitesmoke,
            inset 20px 0 80px #f0f,
            inset -20px 0 80px #0ff,
            inset 20px 0 300px #f0f,
            inset -20px 0 300px #0ff,
            0 0 50px #fff,
            -10px 0 80px #f0f,
            10px 0 80px #0ff
            `;
            const textContainer =
            e.currentTarget.querySelector('.text-container');
           textContainer.style.height = 
           `${textContainer.scrollHeight}px`;
           textContainer.style.transition =
            'height 0.5s';
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.transform = '';
           e.currentTarget.style.boxShadow = '';
           const textContainer =
            e.currentTarget.querySelector('.text-container');
           textContainer.style.height = '50px';
           textContainer.style.transition = 'height 0.5s';
         }}
           > */}

<div
    className='practice-single wow animate__animated animate__fadeInDown'
    data-wow-duration="1.5s"
    data-wow-delay="0.2s"
    style={{ transition: 'transform 0.3s ease-in-out' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
      0 0 30px 10px rgba(243, 211, 108, 1),   
      0 0 60px 20px rgba(243, 211, 108, 1),   
      0 0 100px 40px rgba(243, 211, 108, 1)
      `;
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = `${textContainer.scrollHeight}px`;
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      const textContainer = e.currentTarget.querySelector('.text-container');
      textContainer.style.maxHeight = '50px';
      textContainer.style.transition = 'max-height 0.5s ease-in-out';
    }}
  >
            <div className="header">
              <div className="icon-area">
                <Image
                src={combo}
                width={407}
                height={300}
                alt="Combo Paan"
                />
              </div>
            </div>
            <div className="body text-center">
              <h4 className="md:mt-0 text-2xl text-center font-bold bg-clip-text text-[#f3d36c] font-serif tracking-wider leading-snug">
                Combo Paan
                </h4>
              <div className="text-container overflow-hidden 
              transition-height duration-300"
              style={{maxHeight: '50px',transition: 'height 0.5s'}}>
                <p className='text-[#f3d36c]'>
              Discover the delightful and healthy alternative to traditional paan with our Zero Supari Paan. 
                Enjoy the rich flavors and numerous health benefits. 
                By choosing our Zero Supari Paan, you improve oral and digestive health, avoid addiction, 
                and enhance taste. 
                Freshen your breath naturally. 
              </p>
              
              {/* <Link href="/products/combopaan" passHref>
                <button className="all_products transition ease-in-out delay-150 
                bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#ffd858] 
                duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md 
                wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.4s">
                  Explore Varieties
                </button>
              </Link> */}
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default ProductSection;
