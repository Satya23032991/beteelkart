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
    <div className='product_sec bg-[#c1861e] h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-30'>
      <div className="section-title text-center">
      <span className="wow animate__animated animate__fadeIn large-text 
      text-black" data-wow-duration="1.5s" 
      data-wow-delay="0.2s">
        OUR PRODUCTS
        </span>
        <h2 className="wow animate__animated animate__fadeOut 
        md:mt-0 text-4xl md:text-5xl 
        font-bold bg-clip-text text-[#2e4008]" 
        data-wow-duration="1.5s" data-wow-delay="0.2s">
          Bringing Back the Authentic Qualities of our Traditional Dessert
        </h2>
      </div>

      <div className="intro_box_main max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-5">

      {/* Traditional Paan */}
        <div className="intro_box flex flex-wrap items-center">
        <div className='practice-single wow animate__animated animate__fadeInDown' data-wow-duration="1.5s" data-wow-delay="0.2s">
            <div className="header">
              <div className="icon-area">
                <Image src={Product} width={407} height={300} alt="Products" />
              </div>
            </div>
            <div className="body text-center">
              <h4 className="md:mt-0 text-2xl md:text-2xl text-center font-bold bg-clip-text text-yellow">Traditional Paan</h4>
              <p>
                Mostly in India paan is referred to as a digestive aid. 
                It has breath-freshening and relaxant properties. 
                Most of the time people eat paan after a meal or sometimes they eat at any time of the day. 
                There are several general types of paan, including meetha (sweet) paan
              </p>
              <Link href="/products/traditionalpaan" passHref>
              <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#691a13] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.4s">
              Explore Varieties
                </button>
              </Link>
            </div>
          </div>
        </div>

     {/* Ice-Burst Paan */}
        <div className="intro_box flex flex-wrap items-center">
        <div className='practice-single wow animate__animated animate__fadeInDown' data-wow-duration="1.5s" data-wow-delay="0.7s">
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
              <h4 className="md:mt-0 text-2xl md:text-2xl text-center font-bold bg-clip-text text-black">Ice Burst Paan</h4>
              <p>Ice Burst Paan represents a fusion of traditional paan with modern flavors and concepts, appealing to both older generations and younger ones looking for something new and exciting.
                The burst of coolness combined with the sweet and minty flavors provides a refreshing and energizing effect.</p>
              <Link href="/products/iceburstpaan" passHref>
              <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#0960a4] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.2s">
              Explore Varieties
                </button>
              </Link>
            </div>  
          </div>
        </div>

        {/* Zero Supari Paan */}
        <div className="intro_box flex flex-wrap items-center">
          <div className="practice-single wow animate__animated animate__fadeInDown" data-wow-duration="1.5s" data-wow-delay="1.2s">
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
              <h4 className="md:mt-0 text-2xl md:text-2xl text-center font-bold bg-clip-text text-black">Zero Supari Paan</h4>
              <p>
                Discover the delightful and healthy alternative to traditional paan with our Zero Supari Paan. 
                Enjoy the rich flavors and numerous health benefits. 
                By choosing our Zero Supari Paan, you improve oral and digestive health, avoid addiction, 
                and enhance taste. 
                Freshen your breath naturally. 
              </p>
              <Link href="/products/zerosuparipaan" passHref>
              <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#ecf18c] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.4s">
                Explore Varieties
                </button>
              </Link>
            </div>
          </div>    
        </div>

       {/* Special Paan */}
       <div className="intro_box flex flex-wrap items-center">
          <div className="practice-single wow animate__animated animate__fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.1s">
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
              <h4 className="md:mt-0 text-2xl md:text-2xl text-center font-bold bg-clip-text text-black">Special Paan</h4>
              <p>
                Discover the delightful and healthy alternative to traditional paan with our Special Paan. 
                Enjoy the rich flavors and numerous health benefits. 
                By choosing our Special Paan, you improve oral and digestive health, avoid addiction, 
                and enhance taste. 
                Freshen your breath naturally. 
              </p>
              <Link href="/products/specialpaan" passHref>
              <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#024c48] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.4s">
                Explore Varieties
                </button>
              </Link>
            </div>
          </div>
        </div> 


         {/* Combo Paan */}
        <div className="intro_box flex flex-wrap items-center">
          <div className="practice-single wow animate__animated animate__fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
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
              <h4 className="md:mt-0 text-2xl text-center font-bold bg-clip-text text-black">Combo Paan</h4>
              <p>
              Discover the delightful and healthy alternative to traditional paan with our Zero Supari Paan. 
                Enjoy the rich flavors and numerous health benefits. 
                By choosing our Zero Supari Paan, you improve oral and digestive health, avoid addiction, 
                and enhance taste. 
                Freshen your breath naturally. 
              </p>
              <Link href="/products/combopaan" passHref>
                <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#024c48] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" data-wow-duration="1s" data-wow-delay="1.4s">
                  Explore Varieties
                </button>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default ProductSection;
