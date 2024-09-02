

// "use client"
//  import Herovideo from "/src/video/Hero_banner.mp4";


//  const HeroSection = () => {
//   return(
   

//     <div className='w-full bg-[#075156] flex justify-center'>
//       <video
//         className="w-full rounded-lg mt-1 sm:h-[500px] h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] h-[700px]"
//         style={{ height: '500px' }}
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
import Herovideo from "/src/video/Hero_banner.mp4";

const HeroSection = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

  return (
    <div className="w-full bg-[#791917] sm:mt-0 flex justify-center">
      <video
        className="w-full rounded-lg mt-0"
        style={{ height: isMobile ? '278px' : '650px', marginBotton: '0px', paddingBottom: '0px' }}
        autoPlay
        loop
        muted
      >
        <source src={Herovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroSection;

