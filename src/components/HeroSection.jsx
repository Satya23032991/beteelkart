

// "use client"
//  import Herovideo from "/src/video/Hero_banner.mp4";


//  const HeroSection = () => {
//   const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;
//   return(
    
//     <div className='w-full bg-[#075156] flex justify-center'>
//       <video
//         className="w-full rounded-lg mt-1 sm:h-[500px] h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] h-[700px]"
//         style={{ height: isMobile ? '280px' : '650px', marginBottom: '0px', paddingBottom: '0px'}}
//         autoPlay
//         loop
//         muted
//       >
//         <source src={Herovideo} type="video/mp4" />
//         Your browser does not support the video.
//       </video>
//     </div>
//   )
//  }

//  export default HeroSection;




"use client";
import React, { useState, useEffect } from 'react';
import Herovideo from "/src/video/Hero_banner.mp4";
import swal from 'sweetalert2';
import './ui/HeroSection.css';

const HeroSection = () => {

 const[hadShownPopup,setHadShownPopup] = useState(false)

 useEffect(() => {
  if (!hadShownPopup) {
    swal.fire({
      title: 'Our Products Have Achieved a 5-Star rating!',
      text: 'Thanks to our valuable customers.',
      background: '#8ac7e9', 
      customClass: {
        popup: 'custom-popup',  
        title: 'custom-title',  
        content: 'custom-content'  
      }
    }).then(() => {
      setHadShownPopup(true);
    });
  }
}, [hadShownPopup]);

  return (
    <div className='w-full bg-[#075156] flex justify-center'>
      <video
        className="w-full h-auto sm:h-[280px] md:h-[400px] lg:h-[500px] xl:h-[650px] object-cover" 
        autoPlay
        loop
        muted
      >
        <source src={Herovideo} type="video/mp4" />
        Your browser does not support the video.
      </video>
    </div>
  );
};

export default HeroSection;




