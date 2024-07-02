
 import Link from "next/link";
 import Image from 'next/image';
 import image from '../images/comingsoon3.jpg';

 const Aboutsection = () => {
    return(
        <div className="about_sec bg-[#375736] h-auto w-full flex flex-col
         items-center justify-center relative overflow-hidden mx-auto py-30 p-5">
        <div className="section-title bg-[#375736] text-center text-[#c1861e] mt-5">
        <span>Our Journey</span> 
        <h2 className="md:mt-0 text-4xl md:text-5xl font-bold
           bg-clip-text text-black"></h2>   
        </div>    
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2
             lg:grid-cols-2 gap-5 py-5">
         <div className="flex-auto text-center py-2 m-0">
            <Image
                src={image}
                width={600}
                height={450}
                alt="Coming Soon"
                />
         </div>
        </div>
         </div>
    )
 }

 export default Aboutsection;