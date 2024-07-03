"use client";


import { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import Image from 'next/image';
import Link from 'next/link';
import Product from '../images/comingsoon1.jpg';



const ProductSection = () => {

    
//   useEffect(() => {
//     const wow = new WOW({
//       live: false
//     });
//     wow.init();
//   }, []);

const wow = new WOW({
           live: false
        });


  return (
    <div className='product_sec bg-[#c1861e] h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-30'>
      <div className="section-title text-center">
        <span>OUR PRODUCTS</span>
        <h2 className="md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-black">
          Bringing Back the Authentic Qualities of our Traditional Desert
        </h2>
      </div>
      <div className="intro_box_main max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-5">
        <div className="intro_box flex flex-wrap items-center">
          <div className='practice-single wow animate__animated animate__fadeInDown' data-wow-duration="1.5s" data-wow-delay="0.2s">
            <div className="header">
              <div className="icon-area">
                <Image src={Product} width={407} height={300} alt="Products" />
              </div>
            </div>
            <div className="body">
              <h4 className="md:mt-0 text-2xl md:text-2xl font-bold bg-clip-text text-yellow">Traditional Paan</h4>
              <p>
                Mostly in India paan is referred to as a digestive aid. 
                It has breath-freshening and relaxant properties. 
                Most of the time people eat paan after a meal or sometimes they eat at any time of the day. 
                There are several general types of paan, including meetha (sweet) paan
              </p>
              <Link href="/traditional-paan" passHref>
              <button className='details-btn wow animate__animated animate__pulse' data-wow-duration="1s" data-wow-delay="0.5s">

                    Learn More
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
