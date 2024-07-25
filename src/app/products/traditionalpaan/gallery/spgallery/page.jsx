import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';
import './spgallerystyles.modules.css';
import './stars.css';  

const Spgallery = () => {
  return (
      <div className="intro_box flex flex-wrap bg-black items-center relative animated-background">
          
          <div className="practice-single glow-on-hover wow animate__animated animate__fadeInDown " 
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
  );
}

export default Spgallery;