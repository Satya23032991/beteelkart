
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
                alt="Our Journey"
                />
         </div>
         <div className="flex-auto text-left py-2 m-2">
           <h3 className=" md:mt-0 text-3xl font-bold bg-clip-text
               text-black">
              The Natural Goodness of Betel & 
              an Array of Flavours for your taste buds all in one    
                  </h3>
                  <p className="pt-10" style={{ color: '#091e3e'}}>
                 
Indian Paan Samrat (IPS) is built on a rich legacy of excellence, dating back to the 1960s when our grandfathers operated kiosks in prominent locations in Bengaluru. Established in 2022, we are dedicated to providing paan connoisseurs with an authentic taste of tradition, using only premium-quality, tobacco-free, and spit-free ingredients.

Our Vision

We are committed to hygiene and quality, using FSSAI-approved ingredients to ensure the safety and health of our customers. Our objective is to establish ourselves as a leading global brand in the paan industry, characterized by a commitment to premium quality ingredients and rigorous hygiene standards.

Our Approach

As FSSAI-certified Paan Masters, we have revamped traditional Paan with secret ingredients and unique methods, ensuring high-quality standards for a consistently delicious taste. We promote 100% tobacco-free and spit-free paan, offering a diverse array of paan varieties to provide consumers with an enhanced and unique experience.

Our Mission

To rediscover the authentic taste of India, we are dedicated to delivering exceptional paan experiences that exceed expectations. Explore our range of premium paan offerings, from traditional to gourmet varieties, and indulge in the pinnacle of indulgence.
                     </p> 

           <div className='mt-4'>
            <Link href={'/contact'}>
            <button className="all_products transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#091e3e] duration-300 rounded-lg px-6 py-3 text-white font-semibold shadow-md">
      Learn More
    </button>
            </Link>
            </div>          
         </div>
        </div>
         </div>
    )
 }

 export default Aboutsection;