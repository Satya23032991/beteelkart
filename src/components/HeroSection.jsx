

//  "use client";
//  import React, { useState, useEffect } from 'react';
// import Herovideo from "/src/video/Hero_banner.mp4";
// import swal from 'sweetalert2';
// import './ui/HeroSection.css';

// const HeroSection = () => {

//  const[hadShownPopup,setHadShownPopup] = useState(false)

//  useEffect(() => {
//   if (!hadShownPopup) {
//     swal.fire({
//       title: 'Our Products Have Achieved a 5-Star rating!',
//       text: 'Thanks to our valuable customers.',
//       background: '#8ac7e9', 
//       customClass: {
//         popup: 'custom-popup',  
//         title: 'custom-title',  
//         content: 'custom-content'  
//       }
//     }).then(() => {
//       setHadShownPopup(true);
//     });
//   }
// }, [hadShownPopup]);

//   return (
//     <div className='w-full bg-[#075156] flex justify-center'>
//       <video
//         className="w-full h-auto sm:h-[280px] md:h-[400px] lg:h-[500px] xl:h-[650px] object-cover" 
//         autoPlay
//         loop
//         muted
//       >
//         <source src={Herovideo} type="video/mp4" />
//         Your browser does not support the video.
//       </video>
//     </div>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect, useRef } from "react";
import swal from "sweetalert2";
import Herovideo1 from "/src/video/Hero_banner.mp4";
import Herovideo2 from "/src/video/Tradpaan.mp4";
import Herovideo3 from "/src/video/Iceburst.mp4";
import Herovideo4 from "/src/video/Zerosupari.mp4";
import "./ui/HeroSection.css";

const HeroSection = () => {


  const [hadShownPopup, setHadShownPopup] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); 
  const [isMobile, setIsMobile] = useState(false); 
  const videos = [Herovideo1, Herovideo2, Herovideo3, Herovideo4]; 
  const videoRefs = useRef([]);

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentVideoIndex]);

  useEffect(() => {
    if (!hadShownPopup) {
      swal
        .fire({
          title: "Our Products Have Achieved a 5-Star Rating!",
          text: "Thanks to our valuable customers.",
          background: "#8ac7e9",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
          },
        })
        .then(() => {
          setHadShownPopup(true);
        });
    }
  }, [hadShownPopup]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length); 
    }, 4000); 

    return () => clearInterval(interval); 
  }, [videos.length]);

  return (
    <div className="hero-container">
      {videos.map((video, index) => (
        <video
          key={index}
          className={`hero-video ${index === currentVideoIndex ? "active" : "inactive"}`}
          ref={(el) => (videoRefs.current[index] = el)}
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: isMobile ? "270px" : "auto", 
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default HeroSection;





