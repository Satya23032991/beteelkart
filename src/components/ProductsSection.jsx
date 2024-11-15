 
 
 "use client";
 import Head from 'next/head';
 import { useState,useEffect } from 'react';
 import { WOW } from 'wowjs';
 import 'animate.css/animate.min.css';
 import Image from 'next/image';
 import Link from 'next/link';
 import Product from '../images/trad-paan-lat.jpg';
 import Product1 from '../images/Ice-Burst-Paan.jpg';
 import Product2 from '../images/comingsoon3.jpg';
 import specialpaan from '../images/special_flavour.jpg';
 import zerosupari from '../images/zero_supari.jpg';
 import combo from '../images/comingsoon1.jpg';
 import comboBack from '../images/sampleCombocomp.jpg';
 import { HiOutlineOfficeBuilding } from "react-icons/hi";
 import { FaDelicious } from "react-icons/fa";
 import { FaHandsWash } from "react-icons/fa";
 import { FaGrinStars } from "react-icons/fa";
 
 import '../components/productsection.css';

 
 
 const ProductSection = () => {

 
    const[isFlipped, setIsFlipped] = useState(false);
   
  
   const handleMouseEnter = () => {
     setIsFlipped(true);
   }
  
   const handleMouseLeave = () => {
    setIsFlipped(false);
   }

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
     <>
       <Head>
         <link
           href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Playwrite+CU:wght@100..400&display=swap"
           rel="stylesheet"
         />
       </Head>
 
       <div className='product_sec bg-[#ffeee2] h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-30'>
         <div className="section-title text-center">
           <span className="wow animate__animated animate__fadeIn large-text" data-wow-duration="1.5s" data-wow-delay="0.2s">
             <h1 className="text-[#791917] font-serif font-[cursive] tracking-wider leading-snug">
               Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan
             </h1>
           </span>
         </div>
 
         <div className="intro_box_main mt-5 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-5">
           {/* Traditional Paan */}
           <div className="intro_box flex flex-wrap items-center">
             <div className='practice-single wow animate__animated animate__fadeInDown'
               data-wow-duration="1.5s" data-wow-delay="0.2s"
               style={{ transition: 'transform 0.3s ease-in-out' }}>
               <div className="header relative">
                 <div className="icon-area">
                   <Image src={Product} width={407} height={300} alt="Traditional Paan" />
                 </div>
                 <div className="text-overlay">
                   <p className='text-customGreen-500'>
                     Mostly in India paan is referred to as a digestive aid.
                     It has breath-freshening and relaxant properties.
                     Most of the time people eat paan after a meal or sometimes they eat at any time of the day.
                     There are several general types of paan, including meetha (sweet) paan.
                   </p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Ice-burst Paan */}
 
           <div className="intro_box flex flex-wrap items-center">
             <div className='practice-single wow animate__animated animate__fadeInDown'
               data-wow-duration="1.5s" data-wow-delay="0.2s"
               style={{ transition: 'transform 0.3s ease-in-out' }}>
               <div className="header relative">
                 <div className="icon-area">
                   <Image src={Product1} width={407} height={300} alt="IceBurst Paan" />
                 </div>
                 <div className="text-overlay">
                   <p className='text-[#6b0e1c]'>
                   Ice Burst Paan represents a fusion of traditional paan with modern flavors and concepts,
                   appealing to both older generations and younger ones looking for something new and exciting.
                  The burst of coolness combined with the sweet and minty flavors provides a refreshing and energizing effect.
                   </p>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Zero Supari Paan */}
 
           <div className="intro_box flex flex-wrap items-center">
             <div className='practice-single wow animate__animated animate__fadeInDown'
             data-wow-duration="1.5s" data-wow-delay="0.2s"
             style={{ transition: 'transform 0.3s ease-in-out' }}>
               <div className="header relative">
                 <div className="icon-area">
                   <Image src={zerosupari} width={407} height={300} alt="ZeroSupari Paan" />
                 </div>
  
                <div className="text-overlay">
                <p className="text-customGreen-500">
                Discover the delightful and healthy alternative to traditional paan
                with our Zero Supari Paan. Enjoy the rich flavors and numerous
                health benefits. By choosing our Zero Supari Paan, you improve oral
                and digestive health, avoid addiction, and enhance taste. Freshen
                your breath naturally.
               </p>  
               </div>  
 
               </div>
             </div>
           </div>
 
           {/* Special Paan */}
 
           <div className="intro_box flex flex-wrap items-center">
             <div className="practice-single wow animate__animated animate__fadeInDown"
             data-wow-duration="1.5s" data-wow-delay="0.2s"
             style={{ transition: 'transform 0.3s ease-in-out' }}>
               <div className="header relative">
               <div className="icon-area">
                 <Image src={specialpaan} width={407} height={300} alt="Special Paan" />
               </div>
 
              <div className="text-overlay">
              <p className="text-customGreen-500">
              Discover the delightful and healthy alternative to traditional paan with our Special Paan. 
              Enjoy the rich flavors and numerous health benefits. 
              By choosing our Special Paan, you improve oral and digestive health, avoid addiction, 
              and enhance taste. 
              Freshen your breath naturally. 
              </p>  
              </div>
 
               </div>
             </div>
           </div>
 
           
           {/* Combo Paan */}

           <div className="intro_box flex flex-wrap items-center">
           <div
             className="card-container practice-single
              wow animate__animated animate__fadeInDown"
             data-wow-duration="1.5s"
             data-wow-delay="0.2s"
             style={{ transition: 'transform 0.3s ease-in-out' }}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
           >
             <div className= {`card ${ isFlipped ? 'flipped' : ''}`}>
               <div className="card-side card-side-front">
                 <Image
                   src={combo}
                   width={407}
                   height={300}
                   alt="Combo Paan"
                   className="object-cover w-full h-full"
                 />
               </div>
               <div className="card-side card-side-back">
                 <div className="card-image-wrapper">
                   <Image
                     src={comboBack}
                     layout="fill"
                     alt="Combo Paan"
                     className="object-cover"
                   />
                 </div>
                 
               </div>
             </div>
           </div>
         </div>
         


         
{/* <div className="card-container">
<div className="card">
  <div className="card-side card-side-front">
    <Image
      src={combo}
      width={407}
      height={300}
      alt="Combo Paan"
      className="object-cover w-full h-full"
    />
   
  </div>
  <div className="card-side card-side-back">
    <p className="text-customGreen-500">
      Discover the delightful and healthy alternative to traditional paan with
      our Zero Supari Paan. Enjoy the rich flavors and numerous health benefits.
      By choosing our Zero Supari Paan, you improve oral and digestive health,
      avoid addiction, and enhance taste. Freshen your breath naturally.
    </p>
    
  </div>
</div>
</div> */}




 
         </div>
       </div>
     </>
   );
 }
 
 export default ProductSection;
 


