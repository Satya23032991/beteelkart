
//  "use client"



// import Head from 'next/head';
// import { useEffect } from 'react';
// import { WOW } from 'wowjs';
// import 'animate.css/animate.min.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import testimonialVideo1 from '../../../video/testimonial1.mp4';
// import testimonialVideo2 from '../../../video/actor_shinu.mp4';

// import { HiOutlineOfficeBuilding } from "react-icons/hi";
// import { FaDelicious } from "react-icons/fa";
// import { FaHandsWash } from "react-icons/fa";
// import { FaGrinStars } from "react-icons/fa";

// import './customervoice.css';

// const Custvoice = () => {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       import('wowjs').then(({ WOW }) => {
//         const wow = new WOW({
//           live: false
//         });
//         wow.init();
//       });
//     }
//   }, []);

//   return (
//     <>
//       <Head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Playwrite+CU:wght@100..400&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       <div className='product_sec bg-[#ffeee2] h-auto w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-30'>
//         <div className="section-title text-center">
//           <span className="wow animate__animated animate__fadeIn large-text" data-wow-duration="1.5s" data-wow-delay="0.2s">
//             <h1 className="text-[#075156] font-serif font-[cursive] tracking-wider leading-snug">
//               Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan
//             </h1>
//           </span>
//         </div>

//         <div className="intro_box_main mt-5 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-5">
//           {/* Testimonial One*/}
//           <div className="intro_box flex flex-wrap items-center">
//             <div className='practice-single wow animate__animated animate__fadeInDown'
//               data-wow-duration="1.5s" data-wow-delay="0.2s"
//               style={{ transition: 'transform 0.3s ease-in-out' }}>
//               <div className="header relative">
//                 <div className="icon-area">
//                   <video controls className="w-full rounded-lg mt-8" 
//                                           style={{ height: '400px'}}>
//                       <source src={testimonialVideo1} type="video/mp4" />
//                   </video>
//                 </div>
//                 <div className="text-overlay">
//                   <p className='text-customGreen-500'>
//                    Preetam , A happy customer who came for
//                     1paan but settled with 6 paans after tasting the first one
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Testionial Two */}

//           <div className="intro_box flex flex-wrap items-center">
//             <div className='practice-single wow animate__animated animate__fadeInDown'
//               data-wow-duration="1.5s" data-wow-delay="0.2s"
//               style={{ transition: 'transform 0.3s ease-in-out' }}>
//               <div className="header relative">
//                 <div className="icon-area">
//                  <video controls className="w-full rounded-lg mt-8"
//                           style={{ height: '400px'}}>
//                             <source src={testimonialVideo2} type="video/mp4" />
//                           </video>
//                 </div>
//                 <div className="text-overlay">
//                   <p className='text-[#6b0e1c]'>
//                   Kannada Actor/Comedian 
//                   Shinu Mithra just could resist to share his verdict after having our Paan.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Zero Supari Paan */}

//           {/* <div className="intro_box flex flex-wrap items-center">
//             <div className='practice-single wow animate__animated animate__fadeInDown'
//             data-wow-duration="1.5s" data-wow-delay="0.2s"
//             style={{ transition: 'transform 0.3s ease-in-out' }}>
//               <div className="header relative">
//                 <div className="icon-area">
//                   <Image src={zerosupari} width={407} height={300} alt="ZeroSupari Paan" />
//                 </div>
 
//                <div className="text-overlay">
//                <p className="text-customGreen-500">
//                Discover the delightful and healthy alternative to traditional paan
//                with our Zero Supari Paan. Enjoy the rich flavors and numerous
//                health benefits. By choosing our Zero Supari Paan, you improve oral
//                and digestive health, avoid addiction, and enhance taste. Freshen
//                your breath naturally.
//               </p>  
//               </div>  

//               </div>
//             </div>
//           </div> */}

//           {/* Special Paan */}

//           {/* <div className="intro_box flex flex-wrap items-center">
//             <div className="practice-single wow animate__animated animate__fadeInDown"
//             data-wow-duration="1.5s" data-wow-delay="0.2s"
//             style={{ transition: 'transform 0.3s ease-in-out' }}>
//               <div className="header relative">
//               <div className="icon-area">
//                 <Image src={specialpaan} width={407} height={300} alt="Special Paan" />
//               </div>

//              <div className="text-overlay">
//              <p className="text-customGreen-500">
//              Discover the delightful and healthy alternative to traditional paan with our Special Paan. 
//              Enjoy the rich flavors and numerous health benefits. 
//              By choosing our Special Paan, you improve oral and digestive health, avoid addiction, 
//              and enhance taste. 
//              Freshen your breath naturally. 
//              </p>  
//              </div>

//               </div>
//             </div>
//           </div> */}

          
         

//         </div>
//       </div>
//     </>
//   );
// }

// export default Custvoice;



"use client"



import Head from 'next/head';
// import { useEffect } from 'react';
// import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import Image from 'next/image';
import Link from 'next/link';
import testimonialVideo1 from '../../../video/testimonial1.mp4';
import testimonialVideo2 from '../../../video/actor_shinu.mp4';
import testimonialVideo3 from '../../../video/Arif_Review.mp4';
import testimonialVideo4 from '../../../video/testimonial2.mp4';

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaDelicious } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";

import './customervoice.css';

const Custvoice = () => {

  // const WOW = dynamic(
  //   () => import('wowjs').then(mod => mod.WOW),
  //   { ssr: false }
  // );
  
  
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     import('wowjs').then(({ WOW }) => {
  //       const wow = new WOW({
  //         live: false
  //       });
  //       wow.init();
  //     });
  //   }
  // }, []);

 

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
          <span className=" large-text" >
            <h1 className="text-[#075156] font-serif font-[cursive] tracking-wider leading-snug">
              Rooted in Tradition, Crafted for Today – A Modern Take on Authentic Paan
            </h1>
          </span>
        </div>

        <div className="intro_box_main mt-5 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 py-5">
          
          
          {/* Testimonial One*/}

          <div className="intro_box flex flex-wrap items-center">
             <div className='practice-single '
               data-wow-duration="1.5s" data-wow-delay="0.2s"
               style={{ transition: 'transform 0.3s ease-in-out' }}>
               <div className="header relative">
                 <div className="icon-area">
                 <video controls className="w-full rounded-lg mt-8" 
                                          style={{ height: '400px'}}>
                      <source src={testimonialVideo2} type="video/mp4" />
                  </video>
                 </div>
                 <div className="text-overlay">
                   <p className='text-[#6b0e1c]'>
                   Kannada Actor/Comedian 
                  Shinu Mithra couldn&apos;t just resist to share his verdict after having our Paan.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         

          {/* Testionial Two */}

         
          <div className="intro_box flex flex-wrap items-center">
             <div className='practice-single'
               data-wow-duration="1.5s" data-wow-delay="0.2s"
               style={{ transition: 'transform 0.3s ease-in-out' }}>
               <div className="header relative">
                 <div className="icon-area">
                 <video controls className="w-full rounded-lg mt-8" 
                                          style={{ height: '400px'}}>
                      <source src={testimonialVideo1} type="video/mp4" />
                  </video>
                 </div>
                 <div className="text-overlay">
                   <p className='text-[#6b0e1c]'>
                   Pritam : This is the most amazing paan I have
                            ever eaten and you will be amazed to eat the paan 
                   </p>
                 </div>
               </div>
             </div>
           </div>


          {/* Testimonial Three */}

          <div className="intro_box flex flex-wrap items-center">
             <div className='practice-single'
               data-wow-duration="1.5s" data-wow-delay="0.2s"
               style={{ transition: 'transform 0.3s ease-in-out' }}>
               <div className="header relative">
                 <div className="icon-area">
                 <video controls className="w-full rounded-lg mt-8" 
                                          style={{ height: '400px'}}>
                      <source src={testimonialVideo3} type="video/mp4" />
                  </video>
                 </div>
                 <div className="text-overlay">
                   <p className='text-[#6b0e1c]'>
                  Arif: Honestly speaking, the kind of taste and ingredients 
              they are getting into this product are amazing
                   </p>
                 </div>
               </div>
             </div>
           </div>

          
           {/* Testimonial four */}

           <div className="intro_box flex flex-wrap items-center">
             <div className='practice-single'
               data-wow-duration="1.5s" data-wow-delay="0.2s"
               style={{ transition: 'transform 0.3s ease-in-out' }}>
               <div className="header relative">
                 <div className="icon-area">
                 <video controls className="w-full rounded-lg mt-8" 
                                          style={{ height: '400px'}}>
                      <source src={testimonialVideo4} type="video/mp4" />
                  </video>
                 </div>
                 <div className="text-overlay">
                   <p className='text-[#6b0e1c]'>
                 This is Pritam&apos;s 6th Paan in 20 minutes,he maynot be a paan lover but this
                 paan&apos;s really nice
                   </p>
                 </div>
               </div>
             </div>
           </div>
         
        </div>
      </div>
    </>
  );
}

export default Custvoice;