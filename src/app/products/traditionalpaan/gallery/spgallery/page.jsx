import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';

const Spgallery = () => {
  return (
    <>
      <div className="intro_box flex flex-wrap bg-black items-center relative animated-background">
        <div className="practice-single glow-on-hover wow animate__animated animate__fadeInDown" 
             data-wow-duration="1.5s" data-wow-delay="1.2s">
          <div className="header">
            <div className="icon-area">
              <Image
                src='/zero_supari.jpg'
                width={407}
                height={300}
                alt="zero-supari-Paan"
              />
            </div>
          </div>
          <div className="body text-center">
            <h4 className="md:mt-0 text-2xl md:text-2xl text-center font-bold bg-clip-text text-black">
              Zero Supari Paan
            </h4>
            <p>
              Discover the delightful and healthy alternative to traditional paan with our Zero Supari Paan. 
              Enjoy the rich flavors and numerous health benefits. 
              By choosing our Zero Supari Paan, you improve oral and digestive health, avoid addiction, 
              and enhance taste. 
              Freshen your breath naturally. 
            </p>
            <Link href="/products/zerosuparipaan" passHref>
              <button className="all_products transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#ecf18c] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md wow animate__animated animate__pulse" 
                      data-wow-duration="1s" data-wow-delay="1.4s">
                Explore Varieties
              </button>
            </Link>
          </div>
        </div>    
      </div>

      <div className="relative mt-6">
        <div className="relative">
          <input 
            type="text" 
            id="fname" 
            className="block w-full px-4 py-2 text-black bg-transparent border-2 border-gray-200 rounded-md focus:border-blue-500 focus:outline-none peer" 
            required 
          />
          <label 
            htmlFor="fname" 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-white px-1 transition-all duration-200 ease-in-out 
                       peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-m 
                       peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base"
          >
            First Name
          </label>
        </div>
      </div>
    </>
  );
}

export default Spgallery;
